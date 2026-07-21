import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-course-reviews',
  imports: [],
  templateUrl: './course-reviews.html',
  styleUrl: './course-reviews.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseReviews {
  course = input.required<ICourse>();
}
