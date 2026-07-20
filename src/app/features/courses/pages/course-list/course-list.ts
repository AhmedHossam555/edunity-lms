import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CoursesFacade } from '../../facades';
import { PageBanner, Pagination } from '@app/shared';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseSkeleton } from '../../components/course-skeleton/course-skeleton';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [PageBanner, CourseCard, CourseSkeleton, Pagination],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseList {
  protected readonly facade = inject(CoursesFacade);

  ngOnInit(): void {
    this.facade.loadCourses();
  }

  // Pagination event handlers
  onPageChange(page: number): void {
    this.facade.setPage(page);
  }

  onPageSizeChange(size: number): void {
    this.facade.setItemsPerPage(size);
  }
}
