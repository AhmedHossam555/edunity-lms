import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FallbackImage } from '@app/shared';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'app-course-sidebar',
  imports: [NgOptimizedImage, FallbackImage],
  templateUrl: './course-sidebar.html',
  styleUrl: './course-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSidebar {
  readonly course = input.required<ICourse>();
}
