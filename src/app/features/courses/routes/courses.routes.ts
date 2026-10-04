import { Routes } from '@angular/router';
import { seo } from '@app/core/seo2/seo.model';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages').then((m) => m.CourseList),
    data: {
      breadcrumb: 'Courses',
      ...seo({
        title: 'Courses',
        description:
          'Explore online courses on Edunity LMS and develop your skills with high-quality learning resources, quizzes, and expert instruction.',
      }),
    },
  },
  {
    path: ':id',
    loadComponent: () => import('../pages').then((m) => m.CourseDetails),
    data: {
      breadcrumb: 'Course Details',
      ...seo({
        title: 'Course Details',
        description:
          'Explore course details, lessons, quizzes, and learning resources on Edunity LMS.',
      }),
    },
  },
  {
    path: ':id/:slug',
    loadComponent: () => import('../pages').then((m) => m.CourseDetails),
    data: {
      breadcrumb: 'Course Details',
      ...seo({
        title: 'Course Details',
        description:
          'Explore course details, lessons, quizzes, and learning resources on Edunity LMS.',
      }),
    },
  },
];
