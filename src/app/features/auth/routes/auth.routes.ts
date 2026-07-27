import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../pages/login').then((m) => m.Login),
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../pages/register').then((m) => m.Register),
    title: 'Register',
  },

];