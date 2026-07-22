import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import {
  DEFAULT_IMAGES,
  EmptyState,
  ErrorState,
  FallbackImage,
  Gender,
  PageBanner,
  safeSvg,
} from '@app/shared';
import { CoursesFacade } from '../../facades';
import {
  CourseSidebar,
  CourseOverview,
  CourseReviews,
  CourseInstructor,
  CourseCurriculum,
} from '../../components';
import { CourseDetailsTab } from '../../enums';
import { buildCourseDetailsSvgIcons } from '../../constants';
import { CourseDetailsSkeleton } from '../../skeletons';
import { COURSE_DETAILS_PAGE_CONFIG, COURSE_DETAILS_TABS } from '../../configs';

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
    CourseInstructor,
    CourseDetailsSkeleton,
    ErrorState,
    EmptyState,
  ],
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetails {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly route = inject(ActivatedRoute);
  protected readonly facade = inject(CoursesFacade);
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Route State
  // ─────────────────────────────────────────────────────────────

  private readonly courseId = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      tap((id) => {
        if (id) {
          this.facade.loadCourse(id);
        }
      }),
    ),
    { initialValue: null },
  );

  // ─────────────────────────────────────────────────────────────
  // Reactive State
  // ─────────────────────────────────────────────────────────────

  protected readonly course = computed(() => this.facade.selectedCourse());
  protected readonly loading = this.facade.loading;

  protected readonly instructorFallbackImage = computed(() => {
    const gender = this.course()?.instructor.gender;
    return gender === Gender.Female ? DEFAULT_IMAGES.FEMALE : DEFAULT_IMAGES.MALE;
  });

  protected readonly activeTab = signal<CourseDetailsTab>(CourseDetailsTab.Overview);

  // ─────────────────────────────────────────────────────────────
  // Configuration
  // ─────────────────────────────────────────────────────────────

  protected readonly pageConfig = COURSE_DETAILS_PAGE_CONFIG;
  protected readonly tabs = COURSE_DETAILS_TABS;
  protected readonly Tabs = CourseDetailsTab;

  // ─────────────────────────────────────────────────────────────
  // Icons
  // ─────────────────────────────────────────────────────────────

  protected readonly svgIcons = buildCourseDetailsSvgIcons(this.sanitizer);

  // ─────────────────────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────────────────────

  protected setActiveTab(tab: CourseDetailsTab): void {
    this.activeTab.set(tab);
  }

  protected retry(): void {
    const id = this.courseId();

    if (id) {
      this.facade.loadCourse(id);
    }
  }
}
