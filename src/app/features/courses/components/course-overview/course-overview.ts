import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ICourse } from '../../interfaces';
import { DEFAULT_IMAGES, FallbackImage, Gender } from '@app/shared';
import { NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-course-overview',
  imports: [NgOptimizedImage, FallbackImage],
  templateUrl: './course-overview.html',
  styleUrl: './course-overview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseOverview {
  course = input.required<ICourse>();
  private readonly sanitizer = inject(DomSanitizer);

  protected instructorFallbackImage = computed(() => {
    const gender = this.course()?.instructor.gender;
    return gender === Gender.Female ? DEFAULT_IMAGES.FEMALE : DEFAULT_IMAGES.MALE;
  });

  protected readonly description = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.course().description ?? ''),
  );
}
