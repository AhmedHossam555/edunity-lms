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
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { BlogsFacade } from '../../facades';
import { BLOG_SEARCH_CONFIG } from '../../configs';
import { BLOG_SEARCH_SVG_ICONS } from '../../constants/blog-search.constants';
import { IBlogSearchConfig, ISvgIconsConfig } from '../../interfaces';

@Component({
  selector: 'app-blog-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-search.html',
  styleUrl: './blog-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogSearch implements OnInit {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────
  private readonly facade = inject(BlogsFacade);
  private readonly destroyRef = inject(DestroyRef);

  // ─────────────────────────────────────────────────────────────
  // Template References
  // ─────────────────────────────────────────────────────────────
  protected readonly searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');

  // ─────────────────────────────────────────────────────────────
  // Configuration
  // ─────────────────────────────────────────────────────────────
  protected readonly config: IBlogSearchConfig = BLOG_SEARCH_CONFIG;
  protected readonly svg: ISvgIconsConfig = BLOG_SEARCH_SVG_ICONS;

  // ─────────────────────────────────────────────────────────────
  // Component State
  // ─────────────────────────────────────────────────────────────
  protected readonly search = signal('');

  // ─────────────────────────────────────────────────────────────
  // Search Stream
  // ─────────────────────────────────────────────────────────────
  private readonly searchSubject = new Subject<string>();

  // ─────────────────────────────────────────────────────────────
  // Lifecycle Hooks
  // ─────────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(this.config.debounceTime),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((value: string) => {
        this.facade.updateSearch(value);
      });
  }

  // ─────────────────────────────────────────────────────────────
  // Event Handlers
  // ─────────────────────────────────────────────────────────────
  protected onSearch(value: string): void {
    this.search.set(value);
    this.searchSubject.next(value);
  }

  protected clear(): void {
    this.search.set('');
    this.facade.updateSearch('');

    this.searchInput().nativeElement.focus();
  }
}
