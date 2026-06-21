import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EMPTY, filter, from, Subject, switchMap, takeUntil } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Language, SUPPORTED_LANGUAGES, TranslationsFacade } from '../../i18n';
import { LOCAL_STORAGE_KEYS } from '../../storage/configs/local-storage.keys';
import { LanguagePrefixService } from '../infrastructure/services/language-prefix.service';
import { LanguageManagerService } from '@app/core/i18n/services/language-manager.service';
import { PlatformService } from '@app/core/platform/platform.service';

@Injectable({ providedIn: 'root' })
export class LanguageSyncService {
  // ─── inject API (modern Angular) ─────────────────────────
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private languagePrefixService = inject(LanguagePrefixService);
  private translationsFacade = inject(TranslationsFacade);
  private readonly platformService = inject(PlatformService);
  private readonly languageManagerService = inject(LanguageManagerService);
    getCurrentLanguage(): string {
      return this.languageManagerService.currentLanguage();
    }
  private destroy$ = new Subject<void>();

  // ─────────────────────────────────────────────
  init(): void {
    this.listenToRouterEvents();
    this.listenToQueryParams();
  }

  // ─────────────────────────────────────────────
  listenToRouterEvents(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        switchMap((event: NavigationEnd) => {
          const segment = event.url.split('/')[1];
          const isValid = (SUPPORTED_LANGUAGES as readonly string[]).includes(
            segment,
          );
          const storedLang = this.languageManagerService.currentLanguage();

          if (isValid && segment !== storedLang) {
            return from(
              this.languagePrefixService.changeLanguage(segment),
            ).pipe(
              tap((navigationSuccess) => {
                if (navigationSuccess && this.platformService.isBrowser) {
                  this.translationsFacade.setLanguage(segment);
                  localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, segment);

                  setTimeout(() => {
                    window.location.reload();
                  }, 300);
                }
              }),
            );
          }

          return EMPTY;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  // ─────────────────────────────────────────────
  listenToQueryParams(): void {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const queryLang = params.get('lang');
        const storedLang = this.languageManagerService.currentLanguage();

        const finalLang =
          queryLang === Language.AR || queryLang === Language.EN
            ? queryLang
            : storedLang;

        if (queryLang === Language.AR || queryLang === Language.EN) {
          this.router
            .navigate([], {
              queryParams: { lang: null },
              queryParamsHandling: 'merge',
              replaceUrl: true,
            })
            .then(async () => {
              if (queryLang !== storedLang) {
                const ok =
                  await this.languagePrefixService.changeLanguage(queryLang);

                if (ok && this.platformService.isBrowser) {
                  this.translationsFacade.setLanguage(queryLang);
                  localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, queryLang);

                  setTimeout(() => window.location.reload());
                }
              }
            });

          return;
        }

        this.translationsFacade.initialize(finalLang).subscribe();
      });
  }

  // ─────────────────────────────────────────────
  destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
