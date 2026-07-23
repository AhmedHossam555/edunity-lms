import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { EmptyState, ErrorState, PageBanner, Pagination } from '@app/shared';

import { BlogCard } from '../../components';
import { BlogsFacade } from '../../facades';
import { BlogCardSkeleton, BlogSearchSkeleton } from "../../skeletons";
import { BlogSearch } from '../blog-search';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    PageBanner,
    BlogCard,
    // BlogSkeleton,
    Pagination,
    BlogSearch,
    // BlogFilter,
    // BlogSearchSkeleton,
    // BlogFilterSkeleton,
    EmptyState,
    ErrorState,
    BlogCardSkeleton,
    BlogSearchSkeleton
],
  templateUrl: './blog-list.html',
  styleUrls: ['./blog-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogList implements OnInit {
  // ─────────────────────────────────────────────────────────────
  //  Dependencies
  // ─────────────────────────────────────────────────────────────

  protected readonly facade = inject(BlogsFacade);

  // ─────────────────────────────────────────────────────────────
  //  Lifecycle Hooks
  // ─────────────────────────────────────────────────────────────

  public ngOnInit(): void {
    this.facade.loadBlogs();
  }

  // ─────────────────────────────────────────────────────────────
  //  Pagination
  // ─────────────────────────────────────────────────────────────

  protected onPageChange(page: number): void {
    this.facade.setPage(page);
  }

  protected onPageSizeChange(size: number): void {
    this.facade.setItemsPerPage(size);
  }

  // ─────────────────────────────────────────────────────────────
  //  Filter Actions
  // ─────────────────────────────────────────────────────────────

  protected clearAllFilters(): void {
    this.facade.filter.set({
      searchTerm: '',
      category: undefined,
      tag: undefined,
      author: undefined,
      sortBy: 'newest',
      featuredOnly: false,
    });
  }

  protected retry(): void {
    this.facade.loadBlogs();
  }

  // ─────────────────────────────────────────────────────────────
  //  Empty State Helpers
  // ─────────────────────────────────────────────────────────────

  protected getEmptyStateTitle(): string {
    const hasFilters = this.hasActiveFilters();
    return hasFilters ? 'No matching blogs found' : 'No blogs available';
  }

  protected getEmptyStateDescription(): string {
    const hasFilters = this.hasActiveFilters();

    if (hasFilters) {
      return "Try adjusting your filters or search criteria to find what you're looking for.";
    }

    return 'There are currently no blog posts available. Please check back later.';
  }

  protected getEmptyStateButtonText(): string | null {
    return this.hasActiveFilters() ? 'Clear all filters' : null;
  }

  protected handleEmptyStateAction(): void {
    if (this.hasActiveFilters()) {
      this.clearAllFilters();
    }
    // If no filters, you could navigate to blog creation or refresh
    // this.facade.loadBlogs();
  }

  private hasActiveFilters(): boolean {
    const filter = this.facade.filter();
    return !!(
      filter.searchTerm ||
      filter.category ||
      filter.tag ||
      filter.author ||
      filter.featuredOnly
    );
  }
}