import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CoursesFacade } from '../../facades';
import { COURSE_SEARCH_CONFIG } from '../../configs';
import { COURSE_SEARCH_SVG } from '../../constants';

@Component({
  selector: 'app-course-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-search.html',
  styleUrl: './course-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSearch implements OnInit {
 private readonly facade = inject(CoursesFacade);
  private readonly destroyRef = inject(DestroyRef);

  // Template reference using viewChild signal (Angular 21)
  protected readonly searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');

  // Configuration and constants
  protected readonly config = COURSE_SEARCH_CONFIG;
  protected readonly svg = COURSE_SEARCH_SVG;

  // Signal-based state management
  protected readonly search = signal('');

  // Subject for debounced search
  private readonly searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(this.config.debounceTime),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value: string) => {
        this.facade.updateSearch(value);
      });
  }

  protected onSearch(value: string): void {
    this.search.set(value);
    this.searchSubject.next(value);
  }

  protected clear(): void {
    this.search.set('');
    this.facade.updateSearch('');
    
    // Use viewChild signal instead of DOM query (SSR-safe)
    this.searchInput().nativeElement.focus();
  }
}