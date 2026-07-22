import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CoursesFacade } from '../../facades';
import { PageBanner, Pagination } from '@app/shared';

import {
  CourseSearchSkeleton,
  CourseFilterSkeleton,
  CourseSkeleton,
} from '../../skeletons';
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
}