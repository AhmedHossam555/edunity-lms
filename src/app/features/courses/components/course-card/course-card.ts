import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  computed,
  inject,
  linkedSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICourse } from '../../interfaces';
import { COURSE_SVG_ICONS } from '../../constants';
import { NgOptimizedImage } from '@angular/common';
import { DEFAULT_IMAGES, Gender } from '@app/shared';
import { COURSE_CARD_CONFIG, CourseCardVariant } from '../../configs';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.scss'],
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCard {
  // ─────────────────────────────────────────────────────────────
  // Inputs
  // ─────────────────────────────────────────────────────────────
 
  readonly course = input.required<ICourse>();
  readonly variant = input<CourseCardVariant>('default');
 
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
      ]),
    ),
  );
 
  // ─────────────────────────────────────────────────────────────
  // Computed Properties
  // ─────────────────────────────────────────────────────────────
  protected readonly courseLink = computed(() => {
    const course = this.course();
 
    return course.slug
      ? [COURSE_CARD_CONFIG.ROUTES.COURSES_BASE, course.id, course.slug]
      : [COURSE_CARD_CONFIG.ROUTES.COURSES_BASE, course.id];
  });
 
  protected readonly displayPrice = computed(() => {
    const course = this.course();
 
    // Use priceObject if available (featured card)
    if (course.priceObject) {
      return `${course.priceObject.currency}${course.priceObject.current}`;
    }
 
    // Default price display
    if (course.isFree) {
      return COURSE_CARD_CONFIG.LABELS.free;
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
      return `${COURSE_CARD_CONFIG.LABELS.lessonPrefix} ${course.meta.lessonCount}`;
    }
 
    return `${COURSE_CARD_CONFIG.LABELS.lessonPrefix} ${course.totalLessons || 0}`;
  });
 
  protected readonly studentLabel = computed(() => {
    const course = this.course();
 
    // Use meta if available (featured card)
    if (course.meta?.studentCount) {
      return `${COURSE_CARD_CONFIG.LABELS.studentsPrefix} ${course.meta.studentCount}`;
    }
 
    return `${COURSE_CARD_CONFIG.LABELS.studentsPrefix} ${course.totalStudents || 0}`;
  });
 
  protected readonly durationLabel = computed(() => {
    const course = this.course();
 
    // Use meta if available (featured card)
    if (course.meta?.duration) {
      return course.meta.duration;
    }
 
    return `${course.duration} ${COURSE_CARD_CONFIG.LABELS.durationSuffix}`;
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
 
    if (course.author?.avatarSrc) {
      return course.author.avatarSrc;
    }
 
    return course.instructor?.avatar || '';
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
 
  // Exposed so the template can bind width/height from config instead of
  // hard-coded literals, without changing NgOptimizedImage's API usage.
  protected readonly imageWidth = COURSE_CARD_CONFIG.IMAGE.WIDTH;
  protected readonly imageHeight = COURSE_CARD_CONFIG.IMAGE.HEIGHT;
  protected readonly avatarWidth = COURSE_CARD_CONFIG.AVATAR.WIDTH;
  protected readonly avatarHeight = COURSE_CARD_CONFIG.AVATAR.HEIGHT;
 
  private readonly fallbackImage = DEFAULT_IMAGES.COURSE;
 
  protected readonly imageUrl = linkedSignal(() => this.imageSource());
  protected readonly avatarUrl = linkedSignal(() => this.authorAvatar());
  protected readonly authorAvatarAlt = computed(() => {
    const course = this.course();
 
    // Use author if available (featured card)
    if (course.author?.avatarAlt) {
      return course.author.avatarAlt;
    }
 
    return COURSE_CARD_CONFIG.ARIA_LABELS.avatarOf(this.authorName());
  });
 
  protected onImageError(): void {
    this.imageUrl.set(this.fallbackImage);
  }
 
  protected onAvatarError(): void {
    const gender = this.course().instructor.gender;
 
    this.avatarUrl.set(
      gender === Gender.Female ? DEFAULT_IMAGES.FEMALE : DEFAULT_IMAGES.MALE,
    );
  }
  // ─────────────────────────────────────────────────────────────
  // Private Methods
  // ─────────────────────────────────────────────────────────────
 
  private getCurrencySymbol(): string {
    // This could be extended to support different currencies
    return COURSE_CARD_CONFIG.CURRENCY_SYMBOL;
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
    return COURSE_CARD_CONFIG.ARIA_LABELS.viewCourse(this.course().title);
  }
 
  protected formatPrice(amount: number, currency: string = COURSE_CARD_CONFIG.CURRENCY_SYMBOL): string {
    return `${currency}${amount}`;
  }
}
