import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { DEFAULT_LANGUAGE_CODE, Language } from '../../../i18n';
import { LanguagePrefixService } from '../services/language-prefix.service';

export const languagePrefixGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const languageService = inject(LanguagePrefixService);

  const first = segments[0]?.path;

  // ✔ already has valid language → allow
  if (first && languageService.isLanguageSegment(first)) {
    return true;
  }

  // ✔ preserve current browser language if available
  const currentLang = languageService.currentLanguage || DEFAULT_LANGUAGE_CODE;

  return router.createUrlTree([
    '/',
    currentLang,
    ...segments.map(s => s.path)
  ]);
};