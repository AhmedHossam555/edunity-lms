import {
  Injectable,
  inject,
  signal,
  computed,
  effect,
  PLATFORM_ID,
  Optional,
  Inject,
  REQUEST,
} from '@angular/core';
import { APP_BASE_HREF, DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE_CODE, Language } from '../models';
import { LOCAL_STORAGE_KEYS } from '@app/core/storage/configs/local-storage.keys';
import { PlatformService } from '@app/core/platform/platform.service';
import { INITIAL_CONFIG } from '@angular/platform-server';

@Injectable({ providedIn: 'root' })
export class LanguageManagerService {
  // ==================== DEPENDENCIES ====================
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly platformService = inject(PlatformService);
  private readonly platformId = inject(PLATFORM_ID);

  @Optional() @Inject(REQUEST) private request: any;
  @Optional() private readonly ssrConfig = inject(INITIAL_CONFIG, { optional: true }) as {
    url?: string;
  } | null;
  @Optional() private readonly appBaseHref = inject(APP_BASE_HREF, { optional: true });

  // ==================== STATE ====================
  private readonly currentLang = signal<Language>(Language.EN);
  readonly currentLanguage = this.currentLang.asReadonly();
  readonly isRTL = computed(() => this.currentLanguage() === Language.AR);
  readonly toggleLanguage = computed(() =>
    this.currentLanguage() === Language.AR ? Language.EN : Language.AR,
  );

  private isChanging = false;
  private readonly changeQueue: Language[] = [];

  // ==================== CONSTRUCTOR ====================
  constructor() {
    this.initLanguage();

    if (isPlatformServer(this.platformId)) {
      this.updateHtmlAttributes(this.currentLang());
      return;
    }

    effect(() => {
      this.updateHtmlAttributes(this.currentLanguage());
      this.persistToStorage(this.currentLanguage());
    });

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const lang = this.extractLanguageFromUrl(event.urlAfterRedirects ?? event.url);
        if (lang && lang !== this.currentLang()) {
          this.currentLang.set(lang);
        }
      });
  }

  // ==================== INITIALIZATION ====================
  initLanguage(): void {
    const lang = isPlatformServer(this.platformId)
      ? this.resolveLangFromUrl(this.getInitialUrl()) ||
        this.getStoredLanguage() ||
        DEFAULT_LANGUAGE_CODE
      : this.getCurrentLanguage();

    this.currentLang.set(lang as Language);
  }

  getCurrentLanguage(): any {
    const defaultLang = DEFAULT_LANGUAGE_CODE;

    if (isPlatformBrowser(this.platformId)) {
      const path = window.location.pathname;
      const first = path.split('/')[1];
      return first || defaultLang;
    }

    const url = this.request?.url || '';
    const first = url.split('/')[1];
    return first || defaultLang;
  }

  private getInitialUrl(): string {
    if (isPlatformServer(this.platformId)) {
      if (this.request && this.request.url) {
        return this.request.url;
      }

      if (this.ssrConfig?.url) {
        return this.ssrConfig.url;
      }

      if (this.appBaseHref && this.appBaseHref !== '/') {
        return this.appBaseHref;
      }

      return '/';
    }

    return this.router.url;
  }

  // ==================== PUBLIC API ====================
  async changeLanguage(newLang: Language): Promise<boolean> {
    if (this.isChanging) {
      this.changeQueue.push(newLang);
      return false;
    }

    if (newLang === this.currentLanguage()) {
      return true;
    }

    this.isChanging = true;

    try {
      const success = await this.updateUrlLanguage(newLang);

      if (success) {
        this.currentLang.set(newLang);
        await this.waitForStableState();
      }

      return success;
    } catch (err) {
      console.error('Language change failed:', err);
      return false;
    } finally {
      this.isChanging = false;
      this.processChangeQueue();
    }
  }

  getLanguageFromUrl(url: string): Language {
    const lang: any = this.resolveLangFromUrl(url);
    return lang || DEFAULT_LANGUAGE_CODE;
  }

  // ==================== URL HANDLING ====================
  private resolveLangFromUrl(url: string): Language | null {
    let path = url;

    try {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        const urlObj = new URL(url);
        path = urlObj.pathname;
      } else {
        path = url.split('?')[0];
      }
    } catch {
      path = url.split('?')[0];
    }

    return this.extractLanguageFromUrl(path);
  }

  private extractLanguageFromUrl(urlPath: string): Language | null {
    const cleanPath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;
    const segment = cleanPath.split('/')[0];

    return AVAILABLE_LANGUAGES.some((l) => l.code === segment) ? (segment as Language) : null;
  }

  private async updateUrlLanguage(newLang: Language): Promise<boolean> {
    const currentUrl = this.router.url;
    const segments = currentUrl.split('?')[0].split('/').filter(Boolean);

    if (segments.length && AVAILABLE_LANGUAGES.some((l) => l.code === segments[0])) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }

    try {
      await this.router.navigate(['/', ...segments], {
        queryParamsHandling: 'preserve',
        replaceUrl: true,
      });
      return true;
    } catch {
      return false;
    }
  }

  // ==================== STORAGE ====================
  private getStoredLanguage(): Language | null {
    if (isPlatformServer(this.platformId)) return null;

    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE);
      if (stored && AVAILABLE_LANGUAGES.some((l) => l.code === stored)) {
        return stored as Language;
      }
    } catch {}

    return null;
  }

  private persistToStorage(lang: Language): void {
    if (isPlatformServer(this.platformId)) return;

    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, lang);
    } catch {}
  }

  private getBrowserLanguage(): Language | null {
    if (isPlatformServer(this.platformId)) return null;

    const browserLang = navigator.language.split('-')[0];
    return AVAILABLE_LANGUAGES.some((l) => l.code === browserLang)
      ? (browserLang as Language)
      : null;
  }

  // ==================== DOM UPDATES ====================
  private updateHtmlAttributes(lang: Language): void {
    const html = this.document.documentElement;
    const config = AVAILABLE_LANGUAGES.find((l) => l.code === lang);

    if (!config) return;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', config.direction);

    html.classList.remove(Language.AR, Language.EN);
    html.classList.add(lang);
  }

  // ==================== QUEUE HANDLING ====================
  private processChangeQueue(): void {
    if (this.changeQueue.length && !this.isChanging) {
      const next = this.changeQueue.shift();
      if (next && next !== this.currentLanguage()) {
        this.changeLanguage(next);
      }
    }
  }

  private async waitForStableState(): Promise<void> {
    await new Promise((r) => setTimeout(r, 0));
  }
}