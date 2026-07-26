import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Button, DEFAULT_IMAGES, FallbackImage, safeSvg } from '@app/shared';

import { IBlog } from '../../interfaces';
import { BLOG_CARD_CONFIG } from '../../configs';
import { BLOG_CARD_ICONS } from '../../constants';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe, Button, FallbackImage, NgOptimizedImage],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCard {
  // ─────────────────────────────────────────────────────────────
  //  Inputs / Outputs
  // ─────────────────────────────────────────────────────────────
  readonly blog = input.required<IBlog>();

  readonly like = output<string>();
  readonly save = output<string>();

  // ─────────────────────────────────────────────────────────────
  //  Dependencies
  // ─────────────────────────────────────────────────────────────
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  //  Configuration
  // ─────────────────────────────────────────────────────────────
  protected readonly config = BLOG_CARD_CONFIG;
  protected readonly defaultImage = DEFAULT_IMAGES.BLOG;

  // ─────────────────────────────────────────────────────────────
  //  Computed Properties
  // ─────────────────────────────────────────────────────────────
  protected readonly image = computed(
    () => this.blog().imageSrc ?? this.blog().featuredImage,
  );

  protected readonly imageAlt = computed(
    () =>
      this.blog().imageAlt ?? this.blog().featuredImageAlt ?? this.blog().title,
  );

  protected readonly authorName = computed(
    () =>
      this.blog().authorName ??
      this.blog().author?.name ??
      this.config.labels.unknownAuthor,
  );

  protected readonly authorAvatar = computed(() => this.blog().authorAvatarSrc);

  protected readonly categoryLabel = computed(() => {
    const category = this.blog().category;
    return typeof category === 'string' ? category : (category?.name ?? '');
  });

  protected readonly readTimeLabel = computed(
    () =>
      this.blog().readTimeLabel ??
      `${this.blog().meta.readTime} ${this.config.labels.readTimeSuffix}`,
  );

  protected readonly publishedDate = computed(() => this.blog().meta.publishedAt);

  // ─────────────────────────────────────────────────────────────
  //  Icons
  // ─────────────────────────────────────────────────────────────
  protected readonly calendarIcon: SafeHtml = safeSvg(
    this.sanitizer,
    BLOG_CARD_ICONS.calendar,
  );

  protected readonly commentIcon: SafeHtml = safeSvg(
    this.sanitizer,
    BLOG_CARD_ICONS.comment,
  );

  // ─────────────────────────────────────────────────────────────
  //  Actions
  // ─────────────────────────────────────────────────────────────
  protected onLike(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.like.emit(this.blog().id);
  }

  protected onSave(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.save.emit(this.blog().id);
  }

  protected navigateToBlog(): void {
    this.router.navigate(['/blogs', this.blog().id, this.blog().slug]);
  }
}