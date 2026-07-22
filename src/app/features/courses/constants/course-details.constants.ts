import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { safeSvg } from '@app/shared';
import { COURSE_SVG_ICONS } from './course-card.constants';

/**
 * Shape of the sanitized icon set used across the course-details page.
 * Kept as an interface (Ixxxx) so it can be reused/mocked in tests.
 */
export interface ICourseDetailsSvgIcons {
  ratingStars: SafeHtml;
  lessonIcon: SafeHtml;
  clockIcon: SafeHtml;
  personIcon: SafeHtml;
  cartIcon: SafeHtml;
}

/**
 * Builds the sanitized SVG icon set for the course-details page.
 * Extracted from the component so the sanitization/wiring logic lives in
 * one const-style factory instead of an inline object literal in the class.
 */
export function buildCourseDetailsSvgIcons(sanitizer: DomSanitizer): ICourseDetailsSvgIcons {
  return {
    ratingStars: safeSvg(sanitizer, COURSE_SVG_ICONS.ratingStars),
    lessonIcon: safeSvg(sanitizer, COURSE_SVG_ICONS.lessonIcon),
    clockIcon: safeSvg(sanitizer, COURSE_SVG_ICONS.clockIcon),
    personIcon: safeSvg(sanitizer, COURSE_SVG_ICONS.personIcon),
    cartIcon: safeSvg(sanitizer, COURSE_SVG_ICONS.cartIcon),
  };
}