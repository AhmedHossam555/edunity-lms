import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICourse } from '../../interfaces';
import { DEFAULT_IMAGES, FallbackImage, Gender } from '@app/shared';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-course-instructor',
  imports: [NgOptimizedImage, FallbackImage],
  templateUrl: './course-instructor.html',
  styleUrl: './course-instructor.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseInstructor {
  course = input.required<ICourse>();

  protected instructorFallbackImage = computed(() => {
    const gender = this.course()?.instructor.gender;
    return gender === Gender.Female
      ? DEFAULT_IMAGES.FEMALE
      :DEFAULT_IMAGES.MALE;
  });
}
