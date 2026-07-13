import { Routes } from '@angular/router';

export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.ContactPage),
    title: 'Contact Us'
  },
];
