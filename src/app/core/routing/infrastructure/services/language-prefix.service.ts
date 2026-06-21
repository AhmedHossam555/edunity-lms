import { inject, Injectable } from "@angular/core";

import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { filter } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { DEFAULT_LANGUAGE_CODE, SUPPORTED_LANGUAGES } from "@app/core/i18n";


@Injectable({ providedIn: 'root' })
export class LanguagePrefixService {
  private readonly router = inject(Router);

  private readonly supportedLanguages = SUPPORTED_LANGUAGES;

  private language$ = new BehaviorSubject<string>(DEFAULT_LANGUAGE_CODE);

  constructor() {
    // initialize once
    this.syncLanguage(this.router.url);

    // keep in sync with navigation
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.syncLanguage(event.urlAfterRedirects);
      });
  }

  /** Public reactive language */
  get currentLanguage$(): Observable<string> {
    return this.language$.asObservable();
  }

  /** Current snapshot */
  get currentLanguage(): string {
    return this.language$.value;
  }

  /** Check supported language */
  isLanguageSegment(segment: any): boolean {
    return this.supportedLanguages.includes(segment);
  }

  /** Extract language from URL */
  private getLanguageFromUrl(url: string): string {
    const first = url.split('/').filter(Boolean)[0];
    return this.isLanguageSegment(first) ? first : DEFAULT_LANGUAGE_CODE;
  }

  /** Sync internal state */
  private syncLanguage(url: string): void {
    const lang = this.getLanguageFromUrl(url);
    this.language$.next(lang);
  }

  /** Change language safely */
  async changeLanguage(newLang: string): Promise<boolean> {
    if (!this.isLanguageSegment(newLang)) return false;

    const url = this.router.url;
    const segments = url.split('?')[0].split('/').filter(Boolean);

    if (segments.length && this.isLanguageSegment(segments[0])) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }

    const result = await this.router.navigate(['/', ...segments], {
      queryParamsHandling: 'preserve'
    });

    // force sync after navigation
    if (result) {
      this.language$.next(newLang);
    }

    return result;
  }
}