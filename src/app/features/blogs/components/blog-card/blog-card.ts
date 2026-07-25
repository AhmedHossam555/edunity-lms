import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IBlog } from '../../interfaces';
import { Router } from '@angular/router';
import { Button, DEFAULT_IMAGES, FallbackImage, safeSvg } from '@app/shared';

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
  private readonly sanitizer = inject(DomSanitizer);

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
  //  SVG Icons with safeSvg
  // ─────────────────────────────────────────────────────────────
  
  protected get calendarIcon(): SafeHtml {
    const svg = `
      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 13.5938V5.625H13.125V13.5938C13.125 13.9844 12.9883 14.3164 12.7148 14.5898C12.4414 14.8633 12.1094 15 11.7188 15H1.40625C1.01562 15 0.683594 14.8633 0.410156 14.5898C0.136719 14.3164 0 13.9844 0 13.5938ZM9.375 7.85156V9.02344C9.375 9.25781 9.49219 9.375 9.72656 9.375H10.8984C11.1328 9.375 11.25 9.25781 11.25 9.02344V7.85156C11.25 7.61719 11.1328 7.5 10.8984 7.5H9.72656C9.49219 7.5 9.375 7.61719 9.375 7.85156ZM9.375 11.6016V12.7734C9.375 13.0078 9.49219 13.125 9.72656 13.125H10.8984C11.1328 13.125 11.25 13.0078 11.25 12.7734V11.6016C11.25 11.3672 11.1328 11.25 10.8984 11.25H9.72656C9.49219 11.25 9.375 11.3672 9.375 11.6016ZM5.625 7.85156V9.02344C5.625 9.25781 5.74219 9.375 5.97656 9.375H7.14844C7.38281 9.375 7.5 9.25781 7.5 9.02344V7.85156C7.5 7.61719 7.38281 7.5 7.14844 7.5H5.97656C5.74219 7.5 5.625 7.61719 5.625 7.85156ZM5.625 11.6016V12.7734C5.625 13.0078 5.74219 13.125 5.97656 13.125H7.14844C7.38281 13.125 7.5 13.0078 7.5 12.7734V11.6016C7.5 11.3672 7.38281 11.25 7.14844 11.25H5.97656C5.74219 11.25 5.625 11.3672 5.625 11.6016ZM1.875 7.85156V9.02344C1.875 9.25781 1.99219 9.375 2.22656 9.375H3.39844C3.63281 9.375 3.75 9.25781 3.75 9.02344V7.85156C3.75 7.61719 3.63281 7.5 3.39844 7.5H2.22656C1.99219 7.5 1.875 7.61719 1.875 7.85156ZM1.875 11.6016V12.7734C1.875 13.0078 1.99219 13.125 2.22656 13.125H3.39844C3.63281 13.125 3.75 13.0078 3.75 12.7734V11.6016C3.75 11.3672 3.63281 11.25 3.39844 11.25H2.22656C1.99219 11.25 1.875 11.3672 1.875 11.6016ZM11.7188 1.875C12.1094 1.875 12.4414 2.01172 12.7148 2.28516C12.9883 2.55859 13.125 2.89063 13.125 3.28125V4.6875H0V3.28125C0 2.89063 0.136719 2.55859 0.410156 2.28516C0.683594 2.01172 1.01562 1.875 1.40625 1.875H2.8125V0.46875C2.8125 0.332031 2.85156 0.224609 2.92969 0.146484C3.02734 0.0488281 3.14453 0 3.28125 0H4.21875C4.35547 0 4.46289 0.0488281 4.54102 0.146484C4.63867 0.224609 4.6875 0.332031 4.6875 0.46875V1.875H8.4375V0.46875C8.4375 0.332031 8.47656 0.224609 8.55469 0.146484C8.65234 0.0488281 8.76953 0 8.90625 0H9.84375C9.98047 0 10.0879 0.0488281 10.166 0.146484C10.2637 0.224609 10.3125 0.332031 10.3125 0.46875V1.875H11.7188Z"
          fill="#704FE6"
        />
      </svg>
    `;
    return safeSvg(this.sanitizer, svg);
  }

  protected get commentIcon(): SafeHtml {
    const svg = `
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1875 6.5625C12.1875 7.07031 12.002 7.50977 11.6309 7.88086C11.2598 8.25195 10.8203 8.4375 10.3125 8.4375H4.74609L2.34375 10.2539C2.24609 10.332 2.13867 10.3418 2.02148 10.2832C1.92383 10.2246 1.875 10.1367 1.875 10.0195V8.4375C1.36719 8.4375 0.927734 8.25195 0.556641 7.88086C0.185547 7.50977 0 7.07031 0 6.5625V1.875C0 1.36719 0.185547 0.927734 0.556641 0.556641C0.927734 0.185547 1.36719 0 1.875 0H10.3125C10.8203 0 11.2598 0.185547 11.6309 0.556641C12.002 0.927734 12.1875 1.36719 12.1875 1.875V6.5625ZM15 4.6875C15.5078 4.6875 15.9473 4.87305 16.3184 5.24414C16.6895 5.61523 16.875 6.05469 16.875 6.5625V11.25C16.875 11.7578 16.6895 12.1973 16.3184 12.5684C15.9473 12.9395 15.5078 13.125 15 13.125H14.0625V14.707C14.0625 14.8242 14.0039 14.9121 13.8867 14.9707C13.7891 15.0293 13.6914 15.0195 13.5938 14.9414L11.1914 13.125H7.5C6.99219 13.125 6.55273 12.9395 6.18164 12.5684C5.81055 12.1973 5.625 11.7578 5.625 11.25V9.375H10.3125C11.0938 9.375 11.7578 9.10156 12.3047 8.55469C12.8516 8.00781 13.125 7.34375 13.125 6.5625V4.6875H15Z"
          fill="#704FE6"
        />
      </svg>
    `;
    return safeSvg(this.sanitizer, svg);
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