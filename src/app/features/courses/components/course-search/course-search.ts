import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CoursesFacade } from '../../facades';

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

  protected search = '';
  private readonly searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(value => {
        this.facade.updateSearch(value);
      });
  }

  onSearch(value: string): void {
    this.search = value;
    this.searchSubject.next(value);
  }

  clear(): void {
    this.search = '';
    this.facade.updateSearch('');
    // Focus input after clear
    const input = document.querySelector('.course-search__input') as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }
}