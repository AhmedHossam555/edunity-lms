import {
  Injectable,
  inject,
  TransferState,
  makeStateKey,
  StateKey,
  signal,
  computed,
  afterNextRender,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, shareReplay, finalize } from 'rxjs/operators';
import { IndexedDbService } from './indexed-db.service';
import {
  ILanguageTranslations,
  ITranslationsApiResponse,
} from '../dtos/translation-api-response.dto';
import { DEFAULT_TRANSLATION_CACHE_CONFIG, TRANSLATION_KEYS } from '../models';
import {
  AGRO_TEBA_INTERNATIONAL_SITE_TRANSLATIONS_AR_STORAGE,
  AGRO_TEBA_INTERNATIONAL_SITE_TRANSLATIONS_EN_STORAGE,
} from '../configs';
import { LanguageManagerService } from './language-manager.service';
import { Logger } from '@app/core/logging/logger';
import { PlatformService } from '@app/core/platform/platform.service';

function flattenTranslations(data: ILanguageTranslations): Record<string, string> {
  const result: Record<string, string> = {};

  const flatten = (obj: any, prefix = ''): void => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const fullKey = prefix ? `${prefix}_${key}` : key;

      if (typeof value === 'string') {
        result[fullKey] = value;
      } else if (value && typeof value === 'object') {
        // Recursively flatten nested objects
        flatten(value, fullKey);
      }
    });
  };

  flatten(data);
  return result;
}

@Injectable({ providedIn: 'root' })
export class TranslationsService {
  private readonly http = inject(HttpClient);
  private readonly platformService = inject(PlatformService);
  private readonly transferState = inject(TransferState);
  private readonly indexedDb = inject(IndexedDbService);
  private readonly languageManagerService = inject(LanguageManagerService);
  private readonly isBrowser = this.platformService.isBrowser;
  private readonly baseUrl = `https://api.dev.talbinah.net/api/translations`;
  private readonly cache: Record<string, { data: Record<string, string>; expiresAt: number }> = {};
  private readonly inFlightRequests = new Map<string, Observable<Record<string, string>>>();
  private readonly _loading = signal(true);
  readonly loading = this._loading.asReadonly();
  readonly isLoading = computed(() => this._loading());
  // private readonly publicService = inject(PublicService);
  // Local fallback translations (already flat strings)
  private readonly localTranslations: Record<string, Record<string, string>> = {
    ar: AGRO_TEBA_INTERNATIONAL_SITE_TRANSLATIONS_AR_STORAGE as Record<string, string>,
    en: AGRO_TEBA_INTERNATIONAL_SITE_TRANSLATIONS_EN_STORAGE as Record<string, string>,
  };

  // -------------------------------
  // Cache duration in milliseconds
  // -------------------------------
  private cacheDurationMs = DEFAULT_TRANSLATION_CACHE_CONFIG.cacheDuration!;

  // -------------------------------
  // Core methods
  // -------------------------------
  getTranslations(lang: string, bypassCache = false): Observable<Record<string, string>> {
    const language = this.languageManagerService.currentLanguage();
    Logger.debug(`[TranslationsService] Fetching translations for '${language}' `);
    const key = language === 'ar' ? TRANSLATION_KEYS.STORAGE_AR : TRANSLATION_KEYS.STORAGE_EN;
    const tsKey: StateKey<Record<string, string>> = makeStateKey<Record<string, string>>(key);

    // 1️⃣ Server TransferState
    // if (!this.isBrowser) {
    //   return of(this.transferState.get(tsKey, {} as Record<string, string>));
    // }
    // const serverData = this.transferState.get(tsKey, null);

    // if (!this.isBrowser && serverData) {
    //   return of(serverData);
    // }

    // 2️⃣ Browser SSR handoff
    if (this.transferState.hasKey(tsKey)) {
      const data = this.transferState.get(tsKey, {} as Record<string, string>);
      this.cache[key] = { data, expiresAt: Date.now() + this.cacheDurationMs };
      this.transferState.remove(tsKey);
      return of(data);
    }

    // ✅ Skip all cache layers if bypassCache requested
    if (!bypassCache) {
      // 3️⃣ Memory cache
      const cached = this.cache[key];
      if (cached && Date.now() < cached.expiresAt) return of(cached.data);

      // 4️⃣ localStorage cache
      if (this.isBrowser) {
        const stored = localStorage.getItem(key);
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (parsed.expiresAt && Date.now() < parsed.expiresAt) {
              this.cache[key] = { data: parsed.data, expiresAt: parsed.expiresAt };
              return of(this.patchWithLocalKeys(parsed.data, language));
            }
          } catch {
            // fall through
          }
        }
      }
    }

    // 5️⃣ Prevent duplicate in-flight requests
    if (this.inFlightRequests.has(language)) return this.inFlightRequests.get(language)!;

    this._loading.set(true);
    // 6️⃣ HTTP request
    const request$ = this.http.get<ITranslationsApiResponse>(this.baseUrl).pipe(
      map((response) => this.mergeWithLocalTranslations(response.data, language)),

      tap((data) => {
        const expiresAt = Date.now() + this.cacheDurationMs;

        this.cache[key] = { data, expiresAt };

        if (this.isBrowser) {
          localStorage.setItem(key, JSON.stringify({ data, expiresAt }));

          this.indexedDb.updateTranslations(key, data);
        } else {
          this.transferState.set(tsKey, data);
        }

        this.inFlightRequests.delete(language);
          this._loading.set(false); // flip it here, same tick as data being cached

      }),

      catchError((err) => {
        console.error('[TranslationsService] API failed:', err);
        this.inFlightRequests.delete(language);

        return new Observable<Record<string, string>>((observer) => {
          this.indexedDb
            .get<{ data: Record<string, string> }>(key)
            .then((result) => {
              // 🟢 IndexedDB fallback
              if (result?.data && Object.keys(result.data).length > 0) {
                console.log('[TranslationsService] Loaded from IndexedDB ✔');

                this.cacheFallbackData(key, result.data);
                observer.next(result.data);
              } else {
                // 🟡 local fallback
                console.warn('[TranslationsService] IndexedDB empty → local fallback');

                const localData = this.getLocalTranslations(language);

                this.cacheFallbackData(key, localData);

                observer.next(localData);
              }

              observer.complete();
            })

            // 🔴 IndexedDB failure
            .catch(() => {
              console.warn('[TranslationsService] IndexedDB failed → local fallback');

              const localData = this.getLocalTranslations(language);

              this.cacheFallbackData(key, localData);

              observer.next(localData);
              observer.complete();
            });
        });
      }),
      shareReplay({
        bufferSize: 1,
        refCount: true,
      }),
      finalize(() => {
            this._loading.set(false);
      }),
    );

    this.inFlightRequests.set(language, request$);
    return request$;
  }

  /**
   * Patches any keys present in local translations but missing from cached/stored data.
   * Runs in-memory only — does NOT write back to localStorage/IndexedDB/cache.
   * Safe to call at every cache-hit exit point.
   */
  private patchWithLocalKeys(data: Record<string, string>, lang: string): Record<string, string> {
    const localData = this.localTranslations[lang as keyof typeof this.localTranslations] || {};

    const missingKeys = Object.keys(localData).filter((k) => !data[k] || data[k].trim() === '');

    if (missingKeys.length === 0) return data;

    console.log(
      `[TranslationsService] Patching ${missingKeys.length} new local key(s) into cached data for '${lang}'`,
    );

    const patched = { ...data };
    missingKeys.forEach((k) => (patched[k] = localData[k]));
    return patched;
  }
  // // Get Language
  //   private getLanguage(): string {
  //     if (!this.isBrowser) {
  //       return DEFAULT_LANGUAGE_CODE; // fallback on server
  //     }

  //     return localStorage.getItem('TalbinahBusinessLanguage') || DEFAULT_LANGUAGE_CODE;
  //   }
  /**
   * Merge API response with local translations (fallback)
   */
  private mergeWithLocalTranslations(
    apiData: ILanguageTranslations,
    lang: string,
  ): Record<string, string> {
    const localData = this.localTranslations[lang as keyof typeof this.localTranslations] || {};

    // Flatten API data first (convert nested objects to flat strings)
    const flattenedApiData = flattenTranslations(apiData);

    // Start with local translations as base (these are already flat)
    const merged: Record<string, string> = { ...localData };

    // Override with flattened API data where available
    Object.keys(flattenedApiData).forEach((key) => {
      if (flattenedApiData[key] && flattenedApiData[key].trim() !== '') {
        merged[key] = flattenedApiData[key];
      }
    });

    // Log if we're using any local fallbacks
    const localKeysUsed = Object.keys(localData).filter(
      (key) => !flattenedApiData[key] || flattenedApiData[key].trim() === '',
    );

    if (localKeysUsed.length > 0) {
      console.log(
        `[TranslationsService] Using local fallback for ${localKeysUsed.length} keys in '${lang}'`,
      );
    }

    return merged;
  }

  /**
   * Get translations directly from local storage (no API call)
   */
  getLocalTranslations(lang: string): Record<string, string> {
    const localData = this.localTranslations[lang as keyof typeof this.localTranslations];
    if (!localData) {
      console.warn(`[TranslationsService] No local translations found for language: ${lang}`);
      return {};
    }

    console.log(`[TranslationsService] Using local translations for '${lang}'`);
    return { ...localData };
  }

  /**
   * Force load local translations (bypass API completely)
   */
  loadLocalTranslations(lang: string): Observable<Record<string, string>> {
    const key = lang === 'ar' ? TRANSLATION_KEYS.STORAGE_AR : TRANSLATION_KEYS.STORAGE_EN;
    // const tsKey: StateKey<Record<string, string>> = makeStateKey<Record<string, string>>(key);

    const localData = this.getLocalTranslations(lang);

    // Cache the local data
    const expiresAt = Date.now() + this.cacheDurationMs;
    this.cache[key] = { data: localData, expiresAt };

    if (this.isBrowser) {
      //    localStorage.setItem(key, JSON.stringify({ data: localData, expiresAt }));
    }

    console.log(`[TranslationsService] Local translations loaded for '${lang}'`);
    return of(localData);
  }

  /**
   * Check if a specific translation key exists in local storage
   */
  hasLocalTranslation(lang: string, key: string): boolean {
    const localData = this.localTranslations[lang as keyof typeof this.localTranslations];
    return !!localData && key in localData && localData[key] !== undefined && localData[key] !== '';
  }

  /**
   * Get a specific translation with fallback to local storage
   */
  getTranslation(lang: string, key: string): string {
    // First check cache
    const cacheKey = lang === 'ar' ? TRANSLATION_KEYS.STORAGE_AR : TRANSLATION_KEYS.STORAGE_EN;
    const cached = this.cache[cacheKey];

    if (cached && cached.data[key]) {
      return cached.data[key];
    }

    // Check browser storage
    if (this.isBrowser) {
      const stored = localStorage.getItem(cacheKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.data && parsed.data[key]) {
            return parsed.data[key];
          }
        } catch (e) {
          // Silently fail
        }
      }
    }

    // Fallback to local translations
    const localData = this.localTranslations[lang as keyof typeof this.localTranslations];
    return localData?.[key] || `[${key}]`;
  }

  private cacheFallbackData(key: string, data: Record<string, string>): void {
    const expiresAt = Date.now() + this.cacheDurationMs;
    this.cache[key] = { data, expiresAt };

    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify({ data, expiresAt }));
    }

    console.log(`[TranslationsService] Fallback translations cached for key: ${key}`);
  }

  forceRefresh(lang: string): Observable<Record<string, string>> {
    const key = lang === 'ar' ? TRANSLATION_KEYS.STORAGE_AR : TRANSLATION_KEYS.STORAGE_EN;
    delete this.cache[key];
    if (this.isBrowser) localStorage.removeItem(key);
    const tsKey: StateKey<Record<string, string>> = makeStateKey<Record<string, string>>(key);
    if (!this.isBrowser && this.transferState.hasKey(tsKey)) this.transferState.remove(tsKey);

    console.log(`[TranslationsService] Force refresh called for '${lang}'`);
    return this.getTranslations(lang);
  }

  clearAll(): void {
    Object.values(TRANSLATION_KEYS).forEach((k) => {
      delete this.cache[k];
      if (this.isBrowser) localStorage.removeItem(k);
    });
    console.log('[TranslationsService] All caches cleared');
  }

  // -------------------------------
  // HELPER FUNCTIONS
  // -------------------------------

  /**
   * Check if cache is valid for a specific language
   */
  isCacheValid(lang: string): boolean {
    const key = lang === 'ar' ? TRANSLATION_KEYS.STORAGE_AR : TRANSLATION_KEYS.STORAGE_EN;
    const cached = this.cache[key];

    if (!cached) {
      if (this.isBrowser) {
        const stored = localStorage.getItem(key);
        if (!stored) return false;
        try {
          const parsed = JSON.parse(stored);
          return parsed.expiresAt && Date.now() <= parsed.expiresAt;
        } catch {
          return false;
        }
      }
      return false;
    }

    return Date.now() <= cached.expiresAt;
  }

  /**
   * Get cache expiration timestamp
   */
  getCacheExpiration(lang: string): number | null {
    const key = lang === 'ar' ? TRANSLATION_KEYS.STORAGE_AR : TRANSLATION_KEYS.STORAGE_EN;
    const cached = this.cache[key];

    if (cached) return cached.expiresAt;

    if (this.isBrowser) {
      const stored = localStorage.getItem(key);
      if (!stored) return null;
      try {
        const parsed = JSON.parse(stored);
        return parsed.expiresAt || null;
      } catch {
        return null;
      }
    }

    return null;
  }

  /**
   * Set cache duration (minutes)
   */
  setCacheDurationMinutes(minutes: number): void {
    if (minutes <= 0) {
      this.cacheDurationMs = 0;
      console.log('[TranslationsService] Cache disabled');
    } else {
      this.cacheDurationMs = minutes * 60 * 1000;
      console.log(`[TranslationsService] Cache duration set to ${minutes} minutes`);
    }
  }

  /**
   * Get current cache duration in minutes
   */
  getCacheDurationMinutes(): number {
    return Math.floor(this.cacheDurationMs / 60_000);
  }

  /**
   * Get all available translation keys for a language
   */
  getAvailableKeys(lang: string): string[] {
    const localData = this.localTranslations[lang as keyof typeof this.localTranslations];
    return localData ? Object.keys(localData) : [];
  }

  /**
   * Get missing keys comparing API response with local storage
   */
  getMissingKeys(apiData: ILanguageTranslations, lang: string): string[] {
    const localData = this.localTranslations[lang as keyof typeof this.localTranslations];
    if (!localData) return [];

    const flattenedApiData = flattenTranslations(apiData);
    return Object.keys(localData).filter(
      (key) => !flattenedApiData[key] || flattenedApiData[key].trim() === '',
    );
  }

  /**
   * Convert ILanguageTranslations (nested) to flat Record<string, string>
   */
  flattenApiTranslations(apiData: ILanguageTranslations): Record<string, string> {
    return flattenTranslations(apiData);
  }

  clearTransferStateTranslations(): void {
    const keys = [
      makeStateKey<Record<string, string>>(TRANSLATION_KEYS.STORAGE_AR),
      makeStateKey<Record<string, string>>(TRANSLATION_KEYS.STORAGE_EN),
    ];

    keys.forEach((key) => this.transferState.remove(key));

    console.log('[TranslationsService] TransferState translations cleared');
  }
}
