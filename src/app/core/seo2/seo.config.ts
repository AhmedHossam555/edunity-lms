// core/seo/seo.config.ts
import { InjectionToken } from '@angular/core';

export interface SeoConfig {
  siteUrl: string; // no trailing slash
  siteName: string;
  titleTemplate: string; // %s is replaced
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  locale: string;
  twitterHandle?: string;
}

export const SEO_CONFIG = new InjectionToken<SeoConfig>('SEO_CONFIG');

export const SITE: SeoConfig = {
  siteUrl: 'https://your-domain.com',
  siteName: 'Edunity LMS',
  titleTemplate: '%s | Edunity LMS',
  defaultTitle: 'Edunity LMS - Free Online Courses With Certificates & Diplomas',
  defaultDescription:
    'Learn with Edunity LMS through online courses, quizzes, instructors, and learning resources designed to help you build your skills and achieve your goals.',
  defaultImage: '/og-default.png',
  locale: 'en_US',
  twitterHandle: '@edunitylms',
};
