import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/routes').then((m) => m.COURSES_ROUTES),
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./features/contact/routes').then((m) => m.CONTACT_ROUTES),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
