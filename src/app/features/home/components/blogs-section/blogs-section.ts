import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button, SectionTagHeader } from '@app/shared';
import { safeSvg } from '@app/shared/utils/svg.util';
import { IBlogCard, IBlogSectionCopy } from '../../interfaces';
import { BLOG_CARDS, BLOG_SECTION_COPY } from '../../configs';
import { BlogButtonLabel } from '../../enums';
import {
  BLOG_COMMENT_ICON,
  BLOG_DATE_ICON,
  BLOG_SUBTITLE_ICON,
} from '../../constants';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blogs-section',
  imports: [Button, SectionTagHeader,NgOptimizedImage],
  templateUrl: './blogs-section.html',
  styleUrl: './blogs-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsSection {
  protected readonly copy: IBlogSectionCopy = BLOG_SECTION_COPY;
  protected readonly buttonLabel = BlogButtonLabel;

  // ─────────────────────────────────────────────────────────────
  // Trusted SVG icons rendered via [innerHTML]
  // ─────────────────────────────────────────────────────────────
  protected readonly subtitleIcon: SafeHtml;
  protected readonly dateIcon: SafeHtml;
  protected readonly commentIcon: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.subtitleIcon = safeSvg(this.sanitizer, BLOG_SUBTITLE_ICON);
    this.dateIcon = safeSvg(this.sanitizer, BLOG_DATE_ICON);
    this.commentIcon = safeSvg(this.sanitizer, BLOG_COMMENT_ICON);
  }

  // ─────────────────────────────────────────────────────────────
  // Blog cards
  // Stored as a signal so the data source can later become async
  // without requiring template changes.
  // ─────────────────────────────────────────────────────────────
  protected readonly blogCards = signal<IBlogCard[]>(BLOG_CARDS);

  // ─────────────────────────────────────────────────────────────
  // Comment label formatter
  // Formats the raw comment count as:
  // "Comment (06)"
  // ─────────────────────────────────────────────────────────────
  protected formatCommentLabel(count: number): string {
    return `Comment (${count.toString().padStart(2, '0')})`;
  }
}