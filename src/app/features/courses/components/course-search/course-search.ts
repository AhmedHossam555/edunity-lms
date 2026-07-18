import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from 'express';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'app-course-search',
  imports: [],
  templateUrl: './course-search.html',
  styleUrl: './course-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSearch implements OnInit, OnDestroy, AfterViewInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly elementRef = inject(ElementRef);
  private readonly router = inject(Router);

  private readonly destroy$ = new Subject<void>();
  private readonly searchSubject = new Subject<string>();
  private readonly suggestionsSubject = new Subject<string[]>();

  @Input() public placeholder: string = 'Search for courses...';
  @Input() public initialValue: string = '';
  @Input() public loading: boolean = false;
  @Input() public showSuggestions: boolean = true;
  @Input() public suggestions: string[] = [];
  @Input() public debounceTime: number = 300;
  @Input() public minQueryLength: number = 2;
  @Input() public autoFocus: boolean = false;
  @Input() public size: 'small' | 'medium' | 'large' = 'medium';
  @Input() public variant: 'default' | 'minimal' | 'rounded' = 'default';

  @Output() public search = new EventEmitter<string>();
  @Output() public searchChange = new EventEmitter<string>();
  @Output() public focus = new EventEmitter<void>();
  @Output() public blur = new EventEmitter<void>();
  @Output() public suggestionClick = new EventEmitter<string>();

  @ViewChild('searchInput') public searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('searchContainer') public searchContainer!: ElementRef<HTMLDivElement>;

  public searchTerm: string = '';
  public isFocused: boolean = false;
  public showSuggestionsDropdown: boolean = false;
  public filteredSuggestions: string[] = [];
  public isSearching: boolean = false;
  public selectedSuggestionIndex: number = -1;

  public ngOnInit(): void {
    this.initializeSearch();
    this.setupSuggestions();
    this.searchTerm = this.initialValue;
  }

  public ngAfterViewInit(): void {
    if (this.autoFocus) {
      setTimeout(() => {
        this.searchInput?.nativeElement?.focus();
      }, 300);
    }

    // Close suggestions on outside click
    if (typeof document !== 'undefined') {
      document.addEventListener('click', this.handleOutsideClick.bind(this));
    }
  }

  private initializeSearch(): void {
    this.searchSubject
      .pipe(debounceTime(this.debounceTime), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query) => {
        if (query.length >= this.minQueryLength || query.length === 0) {
          this.isSearching = true;
          this.search.emit(query);
          this.searchChange.emit(query);
          this.cdr.detectChanges();

          // Simulate loading for UI feedback
          if (query.length >= this.minQueryLength) {
            setTimeout(() => {
              this.isSearching = false;
              this.cdr.detectChanges();
            }, 500);
          } else {
            this.isSearching = false;
          }
        }
      });
  }

  private setupSuggestions(): void {
    this.searchSubject
      .pipe(debounceTime(200), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query) => {
        if (this.showSuggestions && query.length >= this.minQueryLength) {
          this.filterSuggestions(query);
        } else {
          this.filteredSuggestions = [];
          this.showSuggestionsDropdown = false;
        }
      });
  }

  private filterSuggestions(query: string): void {
    if (!this.suggestions || this.suggestions.length === 0) {
      this.filteredSuggestions = [];
      this.showSuggestionsDropdown = false;
      return;
    }

    const filtered = this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase()),
    );

    this.filteredSuggestions = filtered.slice(0, 8);
    this.showSuggestionsDropdown = this.filteredSuggestions.length > 0 && this.isFocused;
    this.selectedSuggestionIndex = -1;
    this.cdr.detectChanges();
  }

  private handleOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.searchContainer && !this.searchContainer.nativeElement.contains(target)) {
      this.closeSuggestions();
    }
  }

  public onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.searchSubject.next(this.searchTerm);
    this.selectedSuggestionIndex = -1;
  }

  public onFocus(): void {
    this.isFocused = true;
    this.focus.emit();

    if (this.showSuggestions && this.searchTerm.length >= this.minQueryLength) {
      this.filterSuggestions(this.searchTerm);
    }
  }

  public onBlur(): void {
    // Delay closing to allow click on suggestions
    setTimeout(() => {
      this.isFocused = false;
      this.blur.emit();
      // Don't close immediately to allow suggestion clicks
    }, 200);
  }

  public onKeydown(event: KeyboardEvent): void {
    if (!this.showSuggestionsDropdown) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedSuggestionIndex = Math.min(
          this.selectedSuggestionIndex + 1,
          this.filteredSuggestions.length - 1,
        );
        this.scrollToSuggestion();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.selectedSuggestionIndex = Math.max(this.selectedSuggestionIndex - 1, -1);
        this.scrollToSuggestion();
        break;

      case 'Enter':
        event.preventDefault();
        if (
          this.selectedSuggestionIndex >= 0 &&
          this.filteredSuggestions[this.selectedSuggestionIndex]
        ) {
          this.selectSuggestion(this.filteredSuggestions[this.selectedSuggestionIndex]);
        } else {
          this.performSearch();
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.closeSuggestions();
        break;
    }
  }

  public onSuggestionClick(suggestion: string): void {
    this.selectSuggestion(suggestion);
  }

  private selectSuggestion(suggestion: string): void {
    this.searchTerm = suggestion;
    this.searchInput.nativeElement.value = suggestion;
    this.searchSubject.next(suggestion);
    this.suggestionClick.emit(suggestion);
    this.closeSuggestions();
    this.searchInput.nativeElement.focus();
  }

  private performSearch(): void {
    if (
      this.searchTerm.trim().length >= this.minQueryLength ||
      this.searchTerm.trim().length === 0
    ) {
      this.searchSubject.next(this.searchTerm.trim());
      this.closeSuggestions();
    }
  }

  public clearSearch(): void {
    this.searchTerm = '';
    this.searchInput.nativeElement.value = '';
    this.searchSubject.next('');
    this.filteredSuggestions = [];
    this.showSuggestionsDropdown = false;
    this.search.emit('');
    this.searchChange.emit('');
    this.searchInput.nativeElement.focus();
    this.cdr.detectChanges();
  }

  public closeSuggestions(): void {
    this.showSuggestionsDropdown = false;
    this.selectedSuggestionIndex = -1;
    this.cdr.detectChanges();
  }

  private scrollToSuggestion(): void {
    if (typeof document === 'undefined') return;

    const suggestionElements = this.elementRef.nativeElement.querySelectorAll('.suggestion-item');
    if (suggestionElements[this.selectedSuggestionIndex]) {
      suggestionElements[this.selectedSuggestionIndex].scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }

  public getSearchIcon(): string {
    return this.isSearching ? '⏳' : '🔍';
  }

  public getContainerClass(): string {
    return `search-container ${this.size} ${this.variant}`;
  }

  public getInputClass(): string {
    return `search-input ${this.isFocused ? 'focused' : ''} ${this.searchTerm ? 'has-value' : ''}`;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (typeof document !== 'undefined') {
      document.removeEventListener('click', this.handleOutsideClick.bind(this));
    }
  }
}
