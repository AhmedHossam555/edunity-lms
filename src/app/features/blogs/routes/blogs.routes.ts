import { Routes } from '@angular/router';

export const BLOGS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.Blogs),
  },

  {
    path: ':id',
    loadComponent: () => import('../pages').then((m) => m.BlogDetails),
  },
  {
    path: ':id/:slug',
    loadComponent: () => import('../pages').then((m) => m.BlogDetails),
  },
];
