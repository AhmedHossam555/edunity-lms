import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-course-filter',
  imports: [], 
  templateUrl: './course-filter.html',
  styleUrl: './course-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFilter {

}
