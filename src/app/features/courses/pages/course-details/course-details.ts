// course-details.ts
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

import { FallbackImage, PageBanner } from '@app/shared';
import { CoursesFacade } from '../../facades';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [PageBanner,NgOptimizedImage, FallbackImage],
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetails {
  private readonly route = inject(ActivatedRoute);
  protected readonly facade = inject(CoursesFacade);

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
}