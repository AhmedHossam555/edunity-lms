import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ICourse } from '../../interfaces';
import { COURSE_SVG_ICONS } from '../../constants';
import {
  DEFAULT_IMAGES,
  FallbackImage,
  Gender,
  safeSvg,
} from '@app/shared';

@Component({
  selector: 'app-course-reviews',
  imports: [DatePipe, FallbackImage],
  templateUrl: './course-reviews.html',
  styleUrl: './course-reviews.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseReviews {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Inputs
  // ─────────────────────────────────────────────────────────────

  public readonly course = input.required<ICourse>();

  // ─────────────────────────────────────────────────────────────
  // UI Helpers
  // ─────────────────────────────────────────────────────────────

  protected readonly stars = (rating: number): string =>
    '★'.repeat(rating) + '☆'.repeat(5 - rating);

  protected readonly roundedRating = (rating: number): number =>
    Math.round(rating);

  protected readonly ratingStarsSvg: SafeHtml = safeSvg(
    this.sanitizer,
    COURSE_SVG_ICONS.ratingStars
  );

  // ─────────────────────────────────────────────────────────────
  // Computed Values
  // ─────────────────────────────────────────────────────────────

  protected readonly fallbackImage = computed(() => {
    const gender = this.course()?.instructor.gender;

    return gender === Gender.Female
      ? DEFAULT_IMAGES.FEMALE
      : DEFAULT_IMAGES.MALE;
  });
}