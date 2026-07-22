/**
 * course-card.config.ts
 * -----------------------------------------------------------------------
 * Static configuration values that were hard-coded inline in
 * course-card.html (image dimensions, aria-label copy, currency symbol,
 * fallback image paths). Centralizing these makes the template/component
 * easier to theme or localize without touching markup logic.
 * -----------------------------------------------------------------------
 */
export type CourseCardVariant = 'default' | 'featured';

export const COURSE_CARD_CONFIG = {
  ROUTES: {
    COURSES_BASE: '/courses',
  },

  IMAGE: {
    WIDTH: 400,
    HEIGHT: 225,
  },

  AVATAR: {
    WIDTH: 30,
    HEIGHT: 30,
  },

  CURRENCY_SYMBOL: '$',

  ARIA_LABELS: {
    viewCourse: (title: string) => `View course: ${title}`,
    addToCart: (title: string) => `Add ${title} to cart`,
    avatarOf: (name: string) => `Avatar of ${name}`,
    freeCourse: 'Free course',
    originalPrice: 'Original price',
  },

  LABELS: {
    lessonPrefix: 'Lesson',
    studentsPrefix: 'Students',
    durationSuffix: 'hrs',
    inCart: 'In Cart',
    addToCart: 'Add to Cart',
    free: 'Free',
  },
} as const;

