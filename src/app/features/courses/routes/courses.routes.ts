import { Routes } from '@angular/router';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.CourseList),
  },

  {
    path: ':id',
    loadComponent: () => import('../pages').then((m) => m.CourseDetails),
  },
  {
    path: ':id/:slug',
    loadComponent: () => import('../pages').then((m) => m.CourseDetails),
  },
];
