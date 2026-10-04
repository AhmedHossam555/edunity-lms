import { Routes } from '@angular/router';
import { seo } from '@app/core/seo2/seo.model';
export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/about').then((m) => m.About),
    data: {
      breadcrumb: 'About',
      ...seo({
        title: 'About Us',
        description:
          'Learn more about Edunity LMS, our mission, and how we help learners develop their skills through online education.',
      }),
    },
  },
];
