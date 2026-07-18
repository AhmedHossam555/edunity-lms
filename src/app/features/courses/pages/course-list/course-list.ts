import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class CourseList {}
