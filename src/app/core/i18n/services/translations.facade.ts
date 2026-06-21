import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { tap, finalize, first } from 'rxjs/operators';

import { TranslationsService } from './translations.service';
import { ILanguageTranslations } from '../dtos';
import { DEFAULT_LANGUAGE_CODE, DEFAULT_TRANSLATION_CACHE_CONFIG, Language } from '../models';
import { LOCAL_STORAGE_KEYS } from '@app/core/storage/configs/local-storage.keys';
import { PlatformService } from '@app/core/platform/platform.service';

/**
 * Translations Facade – SSR-safe, signal-based, with fallback and cache.
 * Language swap (HTML attrs, dir, class) is applied ONLY after the loader finishes.
 */
@Injectable({ providedIn: 'root' })
export class TranslationsFacade {
  private readonly service = inject(TranslationsService);
  private readonly paltformService = inject(PlatformService);

  // ─── Signals ─────────────────────────────
  private readonly _currentTranslations = signal<ILanguageTranslations | null>(null);
  private readonly _fallbackTranslations = signal<ILanguageTranslations | null>(null);
  private readonly _currentLanguage = signal<string>(DEFAULT_LANGUAGE_CODE);
  private readonly _isLoading = signal<boolean>(true);
  private readonly _error = signal<string | null>(null);
  private readonly _isInitialized = signal<boolean>(false);

  // ─── Public signals ──────────────────────
  readonly currentTranslations = computed(() => this._currentTranslations());
  readonly currentLanguage = computed(() => this._currentLanguage());
  readonly isLoading = computed(() => this._isLoading());
  readonly error = computed(() => this._error());
  readonly isInitialized = computed(() => this._isInitialized());

  // ─── Observable legacy support ───────────
  private readonly _translationsSubject = new BehaviorSubject<ILanguageTranslations | null>(null);
  readonly translations$ = this._translationsSubject.asObservable();

  /**
   * Emits the new language string AFTER translations are fully loaded and loader is hidden.
   * Subscribe to this in AppComponent to apply HTML lang/dir/class attrs.
   */
  private readonly _languageChanged = new Subject<string>();
  readonly languageChanged$ = this._languageChanged.asObservable();

  // ─── Initialize translations ─────────────
  initialize(lang?: string): Observable<ILanguageTranslations> {
    const targetLang = lang || this._currentLanguage();

    this._isLoading.set(true);
    this._error.set(null);

    return this.service.getTranslations(targetLang, !DEFAULT_TRANSLATION_CACHE_CONFIG.useMock).pipe(
      // ← bypassCache = true  // not use cahce
      tap((data) => {
        this._currentTranslations.set(data);
        this._currentLanguage.set(targetLang);
        this._translationsSubject.next(data);
        this._isInitialized.set(true);

        // Pre-fetch other language silently (use cache for this one)
        // const otherLang = targetLang === 'ar' ? 'en' : 'ar';
        // this.service.getTranslations(otherLang, false).subscribe();

        this.loadFallbackIfNeeded();
      }),
      finalize(() => {
        this._isLoading.set(false);
        // ✅ Emit after paint
        if (this.paltformService.isBrowser) {
          requestAnimationFrame(() => {
            this._languageChanged.next(this._currentLanguage());
          });
        } else {
          this._languageChanged.next(this._currentLanguage());
        }
      }),
    );
  }

  // ─── Set / Toggle language ──────────────
  /**
   * Returns an Observable so callers can chain logic after loading completes.
   * HTML attrs (lang, dir, class) are NOT applied here — AppComponent listens to languageChanged$.
   */
  setLanguage(lang: string, forceReload: boolean = false): Observable<ILanguageTranslations> {
    const current = this._currentLanguage();

    if (this.paltformService.isServer || (current === lang && !forceReload)) {
      return of(this._currentTranslations()!);
    }

    if (this._isLoading()) {
      return of(this._currentTranslations()!);
    }

    this._isLoading.set(true);

    const source$ = forceReload
      ? this.service.forceRefresh(lang)
      : this.service.getTranslations(lang, false);

    return new Observable<ILanguageTranslations>((observer) => {
      source$.pipe(first()).subscribe({
        next: (data) => {
          this._currentTranslations.set(data);
          this._currentLanguage.set(lang);
          this._translationsSubject.next(data);
          this._isInitialized.set(true);
          this.loadFallbackIfNeeded();

          const finish = () => {
            this._languageChanged.next(lang);
            this._isLoading.set(false); // loader hides only after lang/dir signal fires
          };

          if (this.paltformService.isBrowser) {
            requestAnimationFrame(finish);
          } else {
            finish();
          }

          observer.next(data);
          observer.complete();
        },
        error: (err) => {
          this._isLoading.set(false);
          observer.error(err);
        },
      });
    });
  }

  toggleLanguage(): string {
    return this._currentLanguage() === 'ar' ? 'en' : 'ar';
  }

  // ─── Refresh translations ───────────────
  refresh(lang?: string): Observable<ILanguageTranslations> {
    const targetLang = lang || this._currentLanguage();

    this._isLoading.set(true);
    this._error.set(null);
    this._currentTranslations.set(null);
    this._translationsSubject.next(null);
    this._isInitialized.set(false);

    return this.service.forceRefresh(targetLang).pipe(
      tap((data) => {
        this._currentTranslations.set(data);
        this._currentLanguage.set(targetLang);
        this._translationsSubject.next(data);
        this._isInitialized.set(true);
        this.loadFallbackIfNeeded();
      }),
      finalize(() => {
        this._isLoading.set(false);
        // ✅ Emit after paint
        if (this.paltformService.isBrowser) {
          requestAnimationFrame(() => {
            this._languageChanged.next(this._currentLanguage());
          });
        } else {
          this._languageChanged.next(this._currentLanguage());
        }
      }),
    );
  }

  changeLanguage(lang: Language): void {
    if (this.paltformService.isServer) return;
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, lang);
    // // ✅ Just reload — Fix 2 handles attrs on startup
    window.location.reload();
  }

  // ─── Translation lookup ─────────────────
  translate(key: string, lang?: string): string {
    const currentTranslations = this._currentTranslations();
    const fallbackTranslations = this._fallbackTranslations();
    const currentLang = this._currentLanguage();

    // 1. Try current language translations
    const current = currentTranslations && this.getNestedTranslation(currentTranslations, key);
    if (current) return current;

    // 2. For English: never fallback to Arabic → return formatted key immediately // cases increase
    // Option for future if key not found value
    // if (currentLang === 'en' ) {
    //   return this.formatFallbackKey(key);
    // }
    // if (currentLang === 'ar' ) {
    //   return this.formatFallbackKey(key);
    // }

    // 3. For Arabic (and any other future language): try fallback translations (English)
    const fallback = fallbackTranslations && this.getNestedTranslation(fallbackTranslations, key);
    if (fallback) return fallback;

    // 4. Ultimate fallback (still formatted key)
    return this.formatFallbackKey(key);
  }
  hasTranslation(key: string): boolean {
    const translations = this._currentTranslations();
    return !!translations && this.getNestedTranslation(translations, key) !== null;
  }

  getCurrentTranslations(): ILanguageTranslations | null {
    return this._currentTranslations();
  }

  getIsInitialized(): boolean {
    return this._isInitialized();
  }

  setCacheDurationMinutes(minutes: number): void {
    this.service.setCacheDurationMinutes(minutes);
  }

  getCacheDurationMinutes(): number {
    return this.service.getCacheDurationMinutes();
  }

  // ─── Private helpers ────────────────────
  private loadFallbackIfNeeded(): void {
    const current = this._currentLanguage();
    const fallbackLang = this.getFallbackLanguage(current);

    if (this._fallbackTranslations() || fallbackLang === current) return;

    this.service.getTranslations(fallbackLang).subscribe({
      next: (data) => this._fallbackTranslations.set(data),
      error: () => console.warn(`[TranslationsFacade] Failed to load fallback '${fallbackLang}'`),
    });
  }

  private getFallbackLanguage(lang: string): string {
    return lang === 'ar' ? 'en' : 'ar';
  }

  // private formatKey(key: string): string {
  //   return key
  //     .replace(/([a-z])([A-Z])/g, '$1 $2')
  //     .replace(/[_-]/g, ' ')
  //     .replace(/\b\w/g, c => c.toUpperCase());
  // }
  private formatFallbackKey(key: string): string {
    return key
      .replace(/_/g, ' ') // Replace underscores with spaces
      .toLowerCase() // Convert everything to lowercase
      .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize only the first character
  }

  private getNestedTranslation(obj: ILanguageTranslations, path: string): string | null {
    return path.split('.').reduce((o: any, k) => (o && k in o ? o[k] : null), obj);
  }
}
