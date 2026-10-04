import { Routes } from '@angular/router';
import { seo } from '@app/core/seo2/seo.model';
import { SITE } from '@app/core/seo2/seo.config';
export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/home').then((m) => m.Home),
    data: seo({
      title: 'Free Online Courses With Certificates & Diplomas',
      description:
        'Learn online with Edunity LMS through expert-led courses, quizzes, and learning resources designed to help you build your skills and achieve your goals.',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE.siteName,
        url: SITE.siteUrl,
      },
    }),
  },
];
