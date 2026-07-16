import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { COMMUNITY_EVENTS_SECTION_CONFIG } from '../../configs';
import {
  STAR_RATING_ICON,
  LESSON_ICON,
  CLOCK_ICON,
  STUDENTS_ICON,
  CART_ICON,
  ARROW_ICON,
} from '../../constants';
import { ICourseCard } from '../../interfaces';

@Component({
  selector: 'app-community-events-section',
  templateUrl: './community-events-section.html',
  styleUrl: './community-events-section.scss',
  imports: [DecimalPipe, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityEventsSection {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Section State
  // ─────────────────────────────────────────────────────────────
  /** Section data source. Signal-based so it can later be swapped for an async/store-driven value without touching the template. */
  protected readonly config = signal(COMMUNITY_EVENTS_SECTION_CONFIG);

  protected readonly courses: Signal<ICourseCard[]> = computed(() => this.config().courses);

  // ─────────────────────────────────────────────────────────────
  // Sanitized SVG Icons
  // ─────────────────────────────────────────────────────────────
  protected readonly arrowIcon: SafeHtml = this.sanitizeIcon(ARROW_ICON);
  protected readonly starRatingIcon: SafeHtml = this.sanitizeIcon(STAR_RATING_ICON);
  protected readonly lessonIcon: SafeHtml = this.sanitizeIcon(LESSON_ICON);
  protected readonly clockIcon: SafeHtml = this.sanitizeIcon(CLOCK_ICON);
  protected readonly studentsIcon: SafeHtml = this.sanitizeIcon(STUDENTS_ICON);
  protected readonly cartIcon: SafeHtml = this.sanitizeIcon(CART_ICON);

  // ─────────────────────────────────────────────────────────────
  // Template Helpers
  // ─────────────────────────────────────────────────────────────
  protected trackCourseById(_index: number, course: ICourseCard): string {
    return course.id;
  }

  // ─────────────────────────────────────────────────────────────
  // Private Helpers
  // ─────────────────────────────────────────────────────────────
  private sanitizeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
