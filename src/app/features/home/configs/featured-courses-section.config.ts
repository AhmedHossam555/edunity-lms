import { CourseCategory, CurrencySymbol } from '../enums';
import { IFeaturedCoursesSectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Shared Constants
// ─────────────────────────────────────────────────────────────

const ANGELA_AUTHOR = {
  name: 'Angela',
  avatarSrc:
    '/assets/images/home/featured-courses-section/images/person-instructor.webp',
  avatarAlt: 'Angela',
  category: CourseCategory.Development,
} as const;

const DEFAULT_COURSE_META = {
  lessonCount: 10,
  duration: '19h 30m',
  studentCount: '20+',
} as const;

const DEFAULT_COURSE_PRICE = {
  current: 60,
  old: 120,
  currency: CurrencySymbol.USD,
} as const;

// ─────────────────────────────────────────────────────────────
// Featured Courses Section Configuration
// ─────────────────────────────────────────────────────────────

export const FEATURED_COURSES_CONFIG: IFeaturedCoursesSectionConfig = {
  subtitle: 'Top Popular Course',
  title: 'Check Out Educate Features',
  titleBreak: 'Win Any Exam',
  buttonText: 'Browse Eduinity Courses',
  courses: [
    {
      id: 1,
      imageSrc:
        '/assets/images/home/featured-courses-section/images/three-students-working-on-laptop-one.webp',
      imageAlt: 'Three students working on a laptop',
      badge: CourseCategory.Development,
      rating: 4.7,
      ratingLabel: '(4.7)',
      title: 'IT Statistics Data Science And Business Analysis',
      meta: DEFAULT_COURSE_META,
      author: ANGELA_AUTHOR,
      price: DEFAULT_COURSE_PRICE,
    },
    {
      id: 2,
      imageSrc:
        '/assets/images/home/featured-courses-section/images/three-students-studying-outdoors.webp',
      imageAlt: 'Three students studying outdoors',
      badge: CourseCategory.Development,
      rating: 4.7,
      ratingLabel: '(4.7)',
      title: 'IT Statistics Data Science And Business Analysis',
      meta: DEFAULT_COURSE_META,
      author: ANGELA_AUTHOR,
      price: DEFAULT_COURSE_PRICE,
    },
    {
      id: 3,
      imageSrc:
        '/assets/images/home/featured-courses-section/images/five-students-at-round-table.webp',
      imageAlt: 'Five students studying at round table',
      badge: CourseCategory.Development,
      rating: 4.7,
      ratingLabel: '(4.7)',
      title: 'IT Statistics Data Science And Business Analysis',
      meta: DEFAULT_COURSE_META,
      author: ANGELA_AUTHOR,
      price: DEFAULT_COURSE_PRICE,
    },
  ],
} as const;