import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { FallbackImage, Gender, PageBanner, safeSvg } from '@app/shared';
import { CoursesFacade } from '../../facades';
import { 
  CourseSidebar, 
  CourseOverview, 
  CourseReviews, 
  CourseInstructor, 
  CourseCurriculum 
} from "../../components";
import { CourseDetailsTab } from '../../enums';
import { COURSE_SVG_ICONS } from '../../constants';


@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    PageBanner, 
    NgOptimizedImage, 
    FallbackImage, 
    CourseSidebar, 
    CourseOverview, 
    CourseCurriculum, 
    CourseReviews, 
    CourseInstructor
  ],
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetails {
  private readonly route = inject(ActivatedRoute);
  protected readonly facade = inject(CoursesFacade);
  private readonly sanitizer = inject(DomSanitizer);

  private readonly courseId = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => {
        if (id) {
          this.facade.loadCourse(id);
        }
      })
    ),
    { initialValue: null }
  );

  protected readonly course = computed(() => this.facade.selectedCourse());
  protected readonly loading = this.facade.loading;

  // Safe SVG icons for template usage
  protected readonly svgIcons = {
    ratingStars: safeSvg(this.sanitizer, COURSE_SVG_ICONS.ratingStars),
    lessonIcon: safeSvg(this.sanitizer, COURSE_SVG_ICONS.lessonIcon),
    clockIcon: safeSvg(this.sanitizer, COURSE_SVG_ICONS.clockIcon),
    personIcon: safeSvg(this.sanitizer, COURSE_SVG_ICONS.personIcon),
    cartIcon: safeSvg(this.sanitizer, COURSE_SVG_ICONS.cartIcon),
  };

  protected readonly instructorFallbackImage = computed(() => {
    const gender = this.course()?.instructor.gender;
    return gender === Gender.Female
      ? '/assets/images/global/gender/female.webp'
      : '/assets/images/global/gender/male.webp';
  });

  protected readonly Tabs = CourseDetailsTab;
  protected readonly activeTab = signal<CourseDetailsTab>(CourseDetailsTab.Overview);

  protected setActiveTab(tab: CourseDetailsTab): void {
    this.activeTab.set(tab);
  }

  protected readonly tabs = [
    { label: 'Overview', value: CourseDetailsTab.Overview },
    { label: 'Curriculum', value: CourseDetailsTab.Curriculum },
    { label: 'Instructor', value: CourseDetailsTab.Instructor },
    { label: 'Reviews', value: CourseDetailsTab.Reviews },
  ] as const;
}