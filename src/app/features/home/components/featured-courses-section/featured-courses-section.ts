import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button, safeSvg, SectionTagHeader } from '@app/shared';
import { FEATURED_COURSES_CONFIG } from '../../configs/featured-courses-section.config';
import { COURSE_SVG_ICONS } from '../../constants';
import { CurrencySymbol } from '../../enums';
import {
  IFeaturedCoursesSectionConfig,
  ICourseSvgIcons,
  ICourse,
} from '../../interfaces';

@Component({
  selector: 'app-featured-courses-section',
  imports: [Button, SectionTagHeader],
  templateUrl: './featured-courses-section.html',
  styleUrl: './featured-courses-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedCoursesSection {

  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────────────────────

  protected readonly config =
    signal<IFeaturedCoursesSectionConfig>(FEATURED_COURSES_CONFIG);

  // ─────────────────────────────────────────────────────────────
  // Computed Signals
  // ─────────────────────────────────────────────────────────────

  protected readonly subtitle = computed(() => this.config().subtitle);

  protected readonly title = computed(() => this.config().title);

  protected readonly titleBreak = computed(
    () => this.config().titleBreak ?? '',
  );

  protected readonly buttonText = computed(
    () => this.config().buttonText,
  );

  protected readonly courses = computed(
    () => this.config().courses,
  );

  // ─────────────────────────────────────────────────────────────
  // Sanitized SVG Icons
  // ─────────────────────────────────────────────────────────────

  protected readonly icons = computed<Record<keyof ICourseSvgIcons, SafeHtml>>(
    () =>
      Object.fromEntries(
        Object.entries(COURSE_SVG_ICONS).map(([key, svg]) => [
          key,
          safeSvg(this.sanitizer, svg),
        ]),
      ) as Record<keyof ICourseSvgIcons, SafeHtml>,
  );

  // ─────────────────────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────────────────────

  /**
   * Format a numeric price with the course's currency symbol.
   * Example: formatPrice(60, '$') → '$60'
   */
  protected formatPrice(
    amount: number,
    currency: CurrencySymbol,
  ): string {
    return `${currency}${amount}`;
  }

  /**
   * Returns the lesson label.
   */
  protected lessonLabel(course: ICourse): string {
    return `Lesson ${course.meta.lessonCount}`;
  }

  /**
   * Returns the student count label.
   */
  protected studentLabel(course: ICourse): string {
    return `Students ${course.meta.studentCount}`;
  }

  /**
   * TrackBy function for @for.
   */
  protected trackByCourseId(
    _index: number,
    course: ICourse,
  ): number {
    return course.id;
  }
}