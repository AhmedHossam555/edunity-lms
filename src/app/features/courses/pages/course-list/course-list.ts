import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CoursesFacade } from '../../facades';
import { PageBanner, Pagination } from '@app/shared';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseSkeleton } from '../../components/course-skeleton/course-skeleton';
import { CourseSearch } from '../../components/course-search/course-search';
import { CourseFilter } from '../../components/course-filter/course-filter';
import { CourseSearchSkeleton, CourseFilterSkeleton } from "../../skeletons";

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
    CourseFilterSkeleton
],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseList implements OnInit {
  protected readonly facade = inject(CoursesFacade);

  ngOnInit(): void {
    this.facade.loadCourses();
  }

  onPageChange(page: number): void {
    this.facade.setPage(page);
  }

  onPageSizeChange(size: number): void {
    this.facade.setItemsPerPage(size);
  }
  clearAllFilters(): void {
  this.facade.filter.set({
    search: '',
    category: null,
    level: null,
    isFree: null,
    minRating: null,
    sortBy: 'latest'
  });
}
}