import { Routes } from '@angular/router';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/about').then((m) => m.About),
    title: 'About',
    data: {
      breadcrumb: 'About',
    },
  },
];
