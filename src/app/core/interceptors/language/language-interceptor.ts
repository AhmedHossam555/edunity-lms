import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LanguageManagerService } from '@app/core/i18n/services/language-manager.service';

export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const languageManager = inject(LanguageManagerService);

  const currentLanguage = languageManager.currentLanguage();

  const modifiedRequest = req.clone({
    setHeaders: {
      'Accept-Language': currentLanguage,
    },
  });

  return next(modifiedRequest);
};  
