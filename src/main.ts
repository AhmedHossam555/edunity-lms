import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';

import localeAr from '@angular/common/locales/ar';
import localeEn from '@angular/common/locales/en';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { injectSpeedInsights } from '@vercel/speed-insights';

registerLocaleData(localeAr);
registerLocaleData(localeEn);

bootstrapApplication(App, appConfig).then(() => {
  requestIdleCallback(() => {
    injectSpeedInsights();
  });
});