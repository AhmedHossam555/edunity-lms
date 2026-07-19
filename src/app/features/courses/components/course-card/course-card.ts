import { Component, ChangeDetectionStrategy, input, output, computed, Injector, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICourse } from '../../interfaces';
import { COURSE_SVG_ICONS } from '../../constants';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.scss'],
  standalone: true,
  imports: [ RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCard {
   // ─────────────────────────────────────────────────────────────
  // Inputs
  // ─────────────────────────────────────────────────────────────

  readonly course = input.required<ICourse>();
  readonly variant = input<'default' | 'featured'>('default');

  // ─────────────────────────────────────────────────────────────
  // Outputs
  // ─────────────────────────────────────────────────────────────

  readonly addToCart = output<ICourse>();

  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Computed Icons
  // ─────────────────────────────────────────────────────────────

  protected readonly icons = computed<Record<string, SafeHtml>>(() =>
    Object.fromEntries(
      Object.entries(COURSE_SVG_ICONS).map(([key, svg]) => [
        key,
        this.sanitizer.bypassSecurityTrustHtml(svg),
      ])
    )
  );

  // ─────────────────────────────────────────────────────────────
  // Computed Properties
  // ─────────────────────────────────────────────────────────────

  protected readonly displayPrice = computed(() => {
    const course = this.course();

    // Use priceObject if available (featured card)
    if (course.priceObject) {
      return `${course.priceObject.currency}${course.priceObject.current}`;
    }

    // Default price display
    if (course.isFree) {
      return 'Free';
    }

    return `${this.getCurrencySymbol()}${course.price}`;
  });

  protected readonly displayOldPrice = computed(() => {
    const course = this.course();

    // Use priceObject if available (featured card)
    if (course.priceObject?.old) {
      return `${course.priceObject.currency}${course.priceObject.old}`;
    }

    // Default old price
    if (course.oldPrice) {
      return `${this.getCurrencySymbol()}${course.oldPrice}`;
    }

    return null;
  });

  protected readonly formattedRating = computed(() => {
    return this.course().rating.toFixed(1);
  });

  protected readonly ratingLabel = computed(() => {
    const course = this.course();
    return course.ratingLabel || `${course.rating} out of 5`;
  });

  protected readonly lessonLabel = computed(() => {
    const course = this.course();

    // Use meta if available (featured card)
    if (course.meta?.lessonCount) {
      return `Lesson ${course.meta.lessonCount}`;
    }

    return `Lesson ${course.totalLessons || 0}`;
  });

  protected readonly studentLabel = computed(() => {
    const course = this.course();

    // Use meta if available (featured card)
    if (course.meta?.studentCount) {
      return `Students ${course.meta.studentCount}`;
    }

    return `Students ${course.totalStudents || 0}`;
  });

  protected readonly durationLabel = computed(() => {
    const course = this.course();

    // Use meta if available (featured card)
    if (course.meta?.duration) {
      return course.meta.duration;
    }

    return `${course.duration} hrs`;
  });

  protected readonly authorName = computed(() => {
    const course = this.course();

    // Use author if available (featured card)
    if (course.author) {
      return course.author.name;
    }

    return course.instructor?.name || '';
  });

  protected readonly authorAvatar = computed(() => {
    const course = this.course();

    // Use author if available (featured card)
    if (course.author?.avatarSrc) {
      return course.author.avatarSrc;
    }

    return course.instructor?.avatar || '';
  });

  protected readonly authorAvatarAlt = computed(() => {
    const course = this.course();

    // Use author if available (featured card)
    if (course.author?.avatarAlt) {
      return course.author.avatarAlt;
    }

    return `Avatar of ${this.authorName()}`;
  });

  protected readonly authorCategory = computed(() => {
    const course = this.course();

    // Use author if available (featured card)
    if (course.author?.category) {
      return course.author.category;
    }

    return course.category || '';
  });

  protected readonly badgeText = computed(() => {
    const course = this.course();

    // Use badge if available (featured card)
    if (course.badge) {
      return course.badge;
    }

    // Generate badge from level
    if (course.level) {
      return course.level;
    }

    return null;
  });

  protected readonly imageSource = computed(() => {
    const course = this.course();

    // Use imageSrc if available (featured card)
    if (course.imageSrc) {
      return course.imageSrc;
    }

    return course.thumbnail;
  });

  protected readonly imageAltText = computed(() => {
    const course = this.course();

    // Use imageAlt if available (featured card)
    if (course.imageAlt) {
      return course.imageAlt;
    }

    return course.title;
  });

  protected readonly isInCart = computed(() => {
    return this.course().isInCart || false;
  });

  // ─────────────────────────────────────────────────────────────
  // Private Methods
  // ─────────────────────────────────────────────────────────────

  private getCurrencySymbol(): string {
    // This could be extended to support different currencies
    return '$';
  }

  // ─────────────────────────────────────────────────────────────
  // Public Methods
  // ─────────────────────────────────────────────────────────────

  protected onAddToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    // Create a new course object with updated cart status
    const updatedCourse = {
      ...this.course(),
      isInCart: true,
    };

    this.addToCart.emit(updatedCourse);
  }

  protected getAriaLabel(): string {
    return `View course: ${this.course().title}`;
  }

  protected formatPrice(amount: number, currency: string = '$'): string {
    return `${currency}${amount}`;
  }
}