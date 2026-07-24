import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { IBlog } from '../../interfaces';
import { Router } from '@angular/router';
import { Button, DEFAULT_IMAGES, FallbackImage } from '@app/shared';

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

  @Input({ required: true }) blog!: IBlog;

  @Output() like = new EventEmitter<string>();
  @Output() save = new EventEmitter<string>();
  private readonly router = inject(Router);

  // ─────────────────────────────────────────────────────────────
  //  Display Helpers
  // ─────────────────────────────────────────────────────────────
  protected readonly defaultImage = DEFAULT_IMAGES.BLOG;
  protected get image(): string {
    return this.blog.imageSrc ?? this.blog.featuredImage;
  }

  protected get imageAlt(): string {
    return this.blog.imageAlt ?? this.blog.featuredImageAlt ?? this.blog.title;
  }

  protected get authorName(): string {
    return this.blog.authorName ?? this.blog.author?.name ?? 'Unknown author';
  }

  protected get authorAvatar(): string | undefined {
    return this.blog.authorAvatarSrc;
  }

  protected get categoryLabel(): string {
    const category = this.blog.category;
    return typeof category === 'string' ? category : (category?.name ?? '');
  }

  protected get readTimeLabel(): string {
    return this.blog.readTimeLabel ?? `${this.blog.meta.readTime} min read`;
  }

  protected get publishedDate(): Date {
    return this.blog.meta.publishedAt;
  }

  // ─────────────────────────────────────────────────────────────
  //  Actions
  // ─────────────────────────────────────────────────────────────

  protected onLike(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.like.emit(this.blog.id);
  }

  protected onSave(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.save.emit(this.blog.id);
  }

  protected navigateToBlog(): void {
    this.router.navigate(['/blogs', this.blog.id, this.blog.slug]);
  }
}
