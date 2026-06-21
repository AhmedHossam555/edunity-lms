// seo.resolver.ts
import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { MetaService } from '../application/meta.service';
import { ROUTE_META } from './route-meta.config';
import { TranslationsService } from '@app/core/i18n/services/translations.service';
import { LanguageManagerService } from '@app/core/i18n/services/language-manager.service';
import { firstValueFrom } from 'rxjs';

export const seoResolver: ResolveFn<void> = async (route: ActivatedRouteSnapshot) => {
  const metaService = inject(MetaService);
  const translationsService = inject(TranslationsService);
  const languageManager = inject(LanguageManagerService);
  const seoKey = route.data['seoKey'] as string | undefined;
  if (!seoKey) return;

  const lang = languageManager.currentLanguage();

  // Wait for translations to load using the existing getTranslations() method
  await firstValueFrom(translationsService.getTranslations(lang));

  const tags = ROUTE_META[seoKey];
  if (tags) {
    metaService.updateTags(tags);
  }
};