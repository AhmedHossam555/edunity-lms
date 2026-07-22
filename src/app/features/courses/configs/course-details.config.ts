import { DEFAULT_IMAGES } from '@app/shared';
import { CourseDetailsTab } from '../enums';

/**
 * Static tab definitions used to render the tab navigation
 * and to switch between the tab content sections.
 * Previously declared inline inside the component as `protected readonly tabs`.
 */
export const COURSE_DETAILS_TABS = [
  { label: 'Overview', value: CourseDetailsTab.Overview },
  { label: 'Curriculum', value: CourseDetailsTab.Curriculum },
  { label: 'Instructor', value: CourseDetailsTab.Instructor },
  { label: 'Reviews', value: CourseDetailsTab.Reviews },
] as const;

/**
 * All copy / fallback values that were previously hardcoded directly
 * inside course-details.html. Centralizing them here means the template
 * stays declarative and the strings can be reused, localized, or unit
 * tested without touching markup.
 */
export const COURSE_DETAILS_PAGE_CONFIG = {
  banner: {
    title: 'Course Details',
    currentPage: 'Course Details',
  },
  hero: {
    defaultBadge: 'Course',
    imageFallback: DEFAULT_IMAGES.COURSE,
  },
  errorState: {
    title: 'Something went wrong',
    description: "We couldn't load the course. Please try again.",
    buttonText: 'Retry',
  },
  emptyState: {
    title: 'Course not found',
    description: "The course you're looking for doesn't exist or has been removed.",
  },
} as const;