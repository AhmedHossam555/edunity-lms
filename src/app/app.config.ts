import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  APP_INITIALIZER,
  inject,
  LOCALE_ID,
} from '@angular/core';

import { provideRouter, UrlSerializer, withInMemoryScrolling } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from '@angular/platform-browser';

import { SeoModule } from '@core/seo';
import { LanguageManagerService } from './core/i18n/services/language-manager.service';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { languageInterceptor } from './core/interceptors/language/language-interceptor';
import { LowerCaseUrlSerializer } from './core/routing/application/lower-case-url.serializer';
import { SeoUrlService } from './core/seo/infrastructure/seo-url.service';
import { routes } from './app.routes';

export function initializeLanguage() {
  const languageManager = inject(LanguageManagerService);
  return () => {
    languageManager.initLanguage();
    return Promise.resolve();
  };
}

export function initializeSeo() {
  const seoUrlService = inject(SeoUrlService);

  return () => {
    seoUrlService.initialize();
  };
}
// app.config.ts — reorder providers
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),

    // 1. Router first
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),

    provideClientHydration(withEventReplay(), withIncrementalHydration()),
    provideHttpClient(withFetch(), withInterceptors([languageInterceptor])),

    // 2. Language init BEFORE SeoModule
    {
      provide: APP_INITIALIZER,
      useFactory: initializeLanguage,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeSeo,
      multi: true,
    },

    // 3. SeoModule after initializer (still in providers array,
    //    but Angular resolves APP_INITIALIZER before bootstrapping)
    importProvidersFrom(SeoModule),

    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    {
      provide: LOCALE_ID,
      useFactory: () => {
        const languageManager = inject(LanguageManagerService);
        return languageManager.currentLanguage() === 'ar' ? 'ar-EG' : 'en-US';
      },
    },


  ],
};
