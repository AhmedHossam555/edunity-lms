// core/seo/provide-seo.ts
import { EnvironmentProviders, inject, makeEnvironmentProviders,
         provideEnvironmentInitializer } from '@angular/core';
import { SEO_CONFIG, SeoConfig } from './seo.config';
import { SeoRouteListener } from './seo-route.listener';

export const provideSeo = (config: SeoConfig): EnvironmentProviders =>
  makeEnvironmentProviders([
    { provide: SEO_CONFIG, useValue: config },
    provideEnvironmentInitializer(() => inject(SeoRouteListener)),
  ]);