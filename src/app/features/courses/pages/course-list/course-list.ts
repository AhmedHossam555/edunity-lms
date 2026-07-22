import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CoursesFacade } from '../../facades';
import { EmptyState, ErrorState, PageBanner, Pagination } from '@app/shared';

import { CourseSearchSkeleton, CourseFilterSkeleton, CourseSkeleton } from '../../skeletons';
import { CourseCard, CourseFilter, CourseSearch } from '../../components';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    PageBanner,
    CourseCard,
    CourseSkeleton,
    Pagination,
    CourseSearch,
    CourseFilter,
    CourseSearchSkeleton,
    CourseFilterSkeleton,
    EmptyState,
    ErrorState
  ],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseList implements OnInit {
  // ─────────────────────────────────────────────────────────────
  //  Dependencies
  // ─────────────────────────────────────────────────────────────

  protected readonly facade = inject(CoursesFacade);

  // ─────────────────────────────────────────────────────────────
  //  Lifecycle Hooks
  // ─────────────────────────────────────────────────────────────

  public ngOnInit(): void {
  this.facade.loadCourses();
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
      search: '',
      category: null,
      level: null,
      isFree: null,
      minRating: null,
      sortBy: 'latest',
    });
  }

  protected retry(): void {
    this.facade.loadCourses();
  }

  // ─────────────────────────────────────────────────────────────
  //  Empty State Helpers
  // ─────────────────────────────────────────────────────────────

  protected getEmptyStateTitle(): string {
    const hasFilters = this.hasActiveFilters();
    return hasFilters ? 'No matching courses found' : 'No courses available';
  }

  protected getEmptyStateDescription(): string {
    const hasFilters = this.hasActiveFilters();

    if (hasFilters) {
      return "Try adjusting your filters or search criteria to find what you're looking for.";
    }

    return 'There are currently no courses available. Please check back later.';
  }

  protected getEmptyStateButtonText(): string | null {
    return this.hasActiveFilters() ? 'Clear all filters' : null;
  }

  protected handleEmptyStateAction(): void {
    if (this.hasActiveFilters()) {
      this.clearAllFilters();
    }
    // If no filters, you could navigate to course creation or refresh
    // this.facade.loadCourses();
  }

  private hasActiveFilters(): boolean {
    const filter = this.facade.filter();
    return !!(
      filter.search ||
      filter.category ||
      filter.level ||
      filter.isFree !== null ||
      filter.minRating
    );
  }
}
