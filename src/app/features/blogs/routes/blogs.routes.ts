import { Routes } from '@angular/router';
import { seo } from '@app/core/seo2/seo.model';
export const BLOGS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.Blogs),
    data: {
      breadcrumb: 'Blogs',
      ...seo({
        title: 'Blog',
        description:
          'Explore the Edunity LMS blog for educational insights, learning tips, course updates, and useful resources.',
      }),
    },
  },
  {
    path: ':id',
    loadComponent: () => import('../pages').then((m) => m.BlogDetails),
    data: {
      breadcrumb: 'Blog Details',
      ...seo({
        title: 'Blog Details',
        description:
          'Read educational articles, insights, and useful resources on the Edunity LMS blog.',
      }),
    },
  },
  {
    path: ':id/:slug',
    loadComponent: () => import('../pages').then((m) => m.BlogDetails),
    data: {
      breadcrumb: 'Blog Details',
      ...seo({
        title: 'Blog Details',
        description:
          'Read educational articles, insights, and useful resources on the Edunity LMS blog.',
      }),
    },
  },
];
