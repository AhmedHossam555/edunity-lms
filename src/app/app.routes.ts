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
    path: 'blogs',
    loadChildren: () => import('./features/blogs/routes').then((m) => m.BLOGS_ROUTES),
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./features/contact/routes').then((m) => m.CONTACT_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/routes').then((m) => m.AUTH_ROUTES),
  },
  // 404 Page
  {
    path: '**',
    loadChildren: () => import('./features/not-found/routes').then((m) => m.NOT_FOUND_ROUTES),
  },
];
