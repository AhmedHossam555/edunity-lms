import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe, NgOptimizedImage } from '@angular/common';

import { DEFAULT_IMAGES, EmptyState, ErrorState, FallbackImage, PageBanner, safeSvg } from '@app/shared';

import { BlogsFacade } from '../../facades';
import { BlogDetailsSkeleton } from '../../skeletons';
import { IBlogCategory, IBlogTag } from '../../interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SVG_ICONS } from '../../constants';
import { isBlogCategory, isBlogTag } from '../../helpers';
import { BlogCommentForm } from "../../components";

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    PageBanner,
    EmptyState,
    ErrorState,
    BlogDetailsSkeleton,
    RouterLink,
    DatePipe,
    NgOptimizedImage,
    FallbackImage,
    BlogCommentForm
],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetails implements OnInit {
  // ─────────────────────────────────────────────────────────────
  // Injected Dependencies
  // ─────────────────────────────────────────────────────────────

  protected readonly facade = inject(BlogsFacade);

  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Signals
  // ─────────────────────────────────────────────────────────────

  protected readonly blog = this.facade.selectedBlog;
  protected readonly loading = this.facade.loading;

  // ─────────────────────────────────────────────────────────────
  // Constants
  // ─────────────────────────────────────────────────────────────

  protected readonly defaultBlogImage = DEFAULT_IMAGES.BLOG;
  protected readonly icons = SVG_ICONS;

  protected readonly pageConfig = {
    emptyState: {
      title: 'Blog not found',
      description: 'The requested blog could not be found.',
    },
    errorState: {
      title: 'Something went wrong',
      description: 'Unable to load the blog.',
      buttonText: 'Try Again',
    },
  };

  // ─────────────────────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────────────────────

  private blogId = '';

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.blogId = params.get('id') ?? '';

        if (this.blogId) {
          this.facade.loadBlog(this.blogId);
        }
      });
  }

  protected retry(): void {
    if (this.blogId) {
      this.facade.loadBlog(this.blogId);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Template Helpers
  // ─────────────────────────────────────────────────────────────

  protected getCategoryName(category: string | IBlogCategory | undefined): string {
    if (!category) return '';
    return isBlogCategory(category) ? category.name : category;
  }

  protected getCategorySlug(category: string | IBlogCategory | undefined): string {
    if (!category) return '';
    return isBlogCategory(category) ? category.slug : category;
  }

  protected getTagId(tag: string | IBlogTag): string {
    return isBlogTag(tag) ? tag.id : tag;
  }

  protected getTagSlug(tag: string | IBlogTag): string {
    return isBlogTag(tag) ? tag.slug : tag;
  }

  protected getTagName(tag: string | IBlogTag): string {
    return isBlogTag(tag) ? tag.name : tag;
  }

  protected getSafeContent(content: string | undefined): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
  }

  protected getSafeSvg(svg: string): SafeHtml {
    return safeSvg(this.sanitizer, svg);
  }
}
