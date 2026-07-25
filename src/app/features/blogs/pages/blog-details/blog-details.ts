import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe, NgOptimizedImage } from '@angular/common';

import { DEFAULT_IMAGES, EmptyState, ErrorState, FallbackImage, PageBanner } from '@app/shared';

import { BlogsFacade } from '../../facades';
import { BlogDetailsSkeleton } from '../../skeletons';
import { IBlogCategory, IBlogTag } from '../../interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Helper functions for type checking
function isBlogCategory(obj: any): obj is IBlogCategory {
  return obj && typeof obj === 'object' && 'slug' in obj && 'name' in obj;
}

function isBlogTag(obj: any): obj is IBlogTag {
  return obj && typeof obj === 'object' && 'slug' in obj && 'name' in obj;
}

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    PageBanner,
    EmptyState,
    ErrorState,
    BlogDetailsSkeleton,
    RouterLink,
    DatePipe, // ✅ Import DatePipe
    NgOptimizedImage,
    FallbackImage,
  ],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetails implements OnInit {
  readonly facade = inject(BlogsFacade);

  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanitizer = inject(DomSanitizer);
  readonly blog = this.facade.selectedBlog;
  readonly loading = this.facade.loading;

  readonly pageConfig = {
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

  private blogId = '';

  protected readonly defaultBlogImage = DEFAULT_IMAGES.BLOG;

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.blogId = params.get('id') ?? '';

      if (this.blogId) {
        this.facade.loadBlog(this.blogId);
      }
    });
  }

  retry(): void {
    if (this.blogId) {
      this.facade.loadBlog(this.blogId);
    }
  }

  // Helper methods for template
  getCategoryName(category: string | IBlogCategory | undefined): string {
    if (!category) return '';
    return isBlogCategory(category) ? category.name : category;
  }

  getCategorySlug(category: string | IBlogCategory | undefined): string {
    if (!category) return '';
    return isBlogCategory(category) ? category.slug : category;
  }

  getTagId(tag: string | IBlogTag): string {
    return isBlogTag(tag) ? tag.id : tag;
  }

  getTagSlug(tag: string | IBlogTag): string {
    return isBlogTag(tag) ? tag.slug : tag;
  }

  getTagName(tag: string | IBlogTag): string {
    return isBlogTag(tag) ? tag.name : tag;
  }

  getSafeContent(content: string | undefined): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
}
}
