// blog-search.component.ts
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

import { BlogsFacade } from '../../facades';

@Component({
  selector: 'app-blog-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-search.html',
  styleUrl: './blog-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogSearch implements OnInit {
  private readonly facade = inject(BlogsFacade);
  private readonly destroyRef = inject(DestroyRef);

  // Template reference using viewChild signal (Angular 21)
  protected readonly searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');

  // Configuration
  protected readonly config = {
    placeholder: 'Search blogs...',
    ariaLabel: 'Search blogs',
    ariaLabelClear: 'Clear search',
    debounceTime: 400,
  } as const;

  // SVG constants
  protected readonly svg = {
    search: {
      width: 16,
      height: 16,
      viewBox: '0 0 24 24',
      strokeWidth: 2,
      strokeLinecap: 'round' as const,
      strokeLinejoin: 'round' as const,
      paths: [
        'M21 21l-4.35-4.35',
        'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
      ],
    },
    clear: {
      width: 14,
      height: 14,
      viewBox: '0 0 24 24',
      strokeWidth: 2,
      strokeLinecap: 'round' as const,
      strokeLinejoin: 'round' as const,
      paths: [
        'M18 6L6 18',
        'M6 6l12 12',
      ],
    },
  } as const;

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