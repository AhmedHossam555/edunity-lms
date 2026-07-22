import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICourse } from '../../interfaces';
import { DEFAULT_IMAGES, FallbackImage, Gender } from '@app/shared';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-course-overview',
  imports: [NgOptimizedImage, FallbackImage],
  templateUrl: './course-overview.html',
  styleUrl: './course-overview.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CourseOverview {
course = input.required<ICourse>();
  
  protected instructorFallbackImage = computed(() => {
    const gender = this.course()?.instructor.gender;
    return gender === Gender.Female
      ? DEFAULT_IMAGES.FEMALE
      : DEFAULT_IMAGES.MALE;
  });
}
