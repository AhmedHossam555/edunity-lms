import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  ICourse,
  IInstructorOtherCourse,
  IInstructorSocialLink,
  IInstructorStat,
} from '../../interfaces';
import { DEFAULT_IMAGES, FallbackImage, Gender } from '@app/shared';
import { NgOptimizedImage } from '@angular/common';
import { INSTRUCTOR_STATS, INSTRUCTOR_SOCIAL_LINKS, INSTRUCTOR_OTHER_COURSES } from '../../configs';
import { SOCIAL_ICON_PATHS } from '../../constants';

@Component({
  selector: 'app-course-instructor',
  imports: [NgOptimizedImage, FallbackImage],
  templateUrl: './course-instructor.html',
  styleUrl: './course-instructor.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseInstructor {
  // ─────────────────────────────────────────────────────────────
  // Input
  // ─────────────────────────────────────────────────────────────
  course = input.required<ICourse>();

  // ─────────────────────────────────────────────────────────────
  // Static UI Configuration
  // ─────────────────────────────────────────────────────────────
  // Static UI config — plain readonly fields, not signals, since none of
  // this data derives from component state (see note below).
  protected readonly stats: readonly IInstructorStat[] = INSTRUCTOR_STATS;
  protected readonly socialLinks: readonly IInstructorSocialLink[] = INSTRUCTOR_SOCIAL_LINKS;
  protected readonly otherCourses: readonly IInstructorOtherCourse[] = INSTRUCTOR_OTHER_COURSES;
  protected readonly socialIconPaths = SOCIAL_ICON_PATHS;

  // ─────────────────────────────────────────────────────────────
  // Computed
  // ─────────────────────────────────────────────────────────────
  protected instructorFallbackImage = computed(() => {
    const gender = this.course()?.instructor.gender;

    return gender === Gender.Female ? DEFAULT_IMAGES.FEMALE : DEFAULT_IMAGES.MALE;
  });
}
