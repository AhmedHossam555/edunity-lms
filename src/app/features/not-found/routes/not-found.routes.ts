import { Routes } from '@angular/router';

export const NOT_FOUND_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.NotFound),
  },
];
