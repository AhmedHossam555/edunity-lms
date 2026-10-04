import { Routes } from '@angular/router';
import { seo } from '@app/core/seo2/seo.model';

export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.ContactPage),
    data: {
      breadcrumb: 'Contact Us',
      ...seo({
        title: 'Contact Us',
        description:
          'Get in touch with Edunity LMS for questions, support, or more information about our online courses and learning platform.',
      }),
    },
  },
];
