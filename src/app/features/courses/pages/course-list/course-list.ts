import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CoursesFacade } from '../../facades';
import { PageBanner } from '@app/shared';
import { CourseCard } from '../../components/course-card/course-card';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [PageBanner, CourseCard],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseList {
  protected readonly facade = inject(CoursesFacade);

  ngOnInit(): void {
    this.facade.loadCourses();
  }
}
