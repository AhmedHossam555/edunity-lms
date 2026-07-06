import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];