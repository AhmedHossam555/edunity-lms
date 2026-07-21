import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-course-curriculum',
  imports: [],
  templateUrl: './course-curriculum.html',
  styleUrl: './course-curriculum.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCurriculum {
  course = input.required<ICourse>();
}
