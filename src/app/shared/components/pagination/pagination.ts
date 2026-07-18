import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = new Subject<void>();

  @Input() public currentPage: number = 1;
  @Input() public totalPages: number = 1;
  @Input() public totalItems: number = 0;
  @Input() public itemsPerPage: number = 10;
  @Input() public maxVisiblePages: number = 7;
  @Input() public showFirstLast: boolean = true;
  @Input() public showPrevNext: boolean = true;
  @Input() public showPageSize: boolean = true;
  @Input() public showSummary: boolean = true;
  @Input() public pageSizeOptions: number[] = [5, 10, 20, 50, 100];
  @Input() public disabled: boolean = false;
  @Input() public size: 'small' | 'medium' | 'large' = 'medium';

  @Output() public pageChange = new EventEmitter<number>();
  @Output() public pageSizeChange = new EventEmitter<number>();

  public pages: (number | string)[] = [];
  public startItem: number = 0;
  public endItem: number = 0;
  public pageSize: number = 10;

  public ngOnInit(): void {
    this.pageSize = this.itemsPerPage;
    this.updatePagination();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage'] || changes['totalPages'] || changes['itemsPerPage']) {
      this.updatePagination();
    }
    if (changes['itemsPerPage']) {
      this.pageSize = changes['itemsPerPage'].currentValue;
    }
  }

  private updatePagination(): void {
    this.updatePageNumbers();
    this.updateItemRange();
    this.cdr.detectChanges();
  }

  private updatePageNumbers(): void {
    if (!this.totalPages || this.totalPages <= 1) {
      this.pages = [1];
      return;
    }

    const current = this.currentPage;
    const total = this.totalPages;
    const maxVisible = this.maxVisiblePages;

    if (total <= maxVisible) {
      this.pages = Array.from({ length: total }, (_, i) => i + 1);
      return;
    }

    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisible / 2);

    let start = Math.max(1, current - halfVisible);
    let end = Math.min(total, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push('...');
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < total) {
      if (end < total - 1) {
        pages.push('...');
      }
      pages.push(total);
    }

    this.pages = pages;
  }

  private updateItemRange(): void {
    if (!this.totalItems) return;

    const start = (this.currentPage - 1) * this.pageSize;
    const end = Math.min(this.currentPage * this.pageSize, this.totalItems);

    this.startItem = start + 1;
    this.endItem = end;
  }

  public goToPage(page: number | string): void {
    if (typeof page === 'string') return;
    if (this.disabled || page === this.currentPage) return;
    if (page < 1 || page > this.totalPages) return;

    this.pageChange.emit(page);
  }

  public goToFirstPage(): void {
    if (this.disabled || this.currentPage === 1) return;
    this.pageChange.emit(1);
  }

  public goToLastPage(): void {
    if (this.disabled || this.currentPage === this.totalPages) return;
    this.pageChange.emit(this.totalPages);
  }

  public goToPreviousPage(): void {
    if (this.disabled || this.currentPage <= 1) return;
    this.pageChange.emit(this.currentPage - 1);
  }

  public goToNextPage(): void {
    if (this.disabled || this.currentPage >= this.totalPages) return;
    this.pageChange.emit(this.currentPage + 1);
  }

  public onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const size = parseInt(select.value, 10);
    if (size !== this.pageSize) {
      this.pageSize = size;
      this.pageSizeChange.emit(size);
    }
  }

  public isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  public isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize) || 1;
  }

  public getPageSizeOptions(): number[] {
    return this.pageSizeOptions;
  }

  public getPageSizeLabel(): string {
    return `Items per page: ${this.pageSize}`;
  }

  public getPageSummary(): string {
    if (!this.totalItems) return 'No items';
    return `Showing ${this.startItem}-${this.endItem} of ${this.totalItems} items`;
  }

  public getContainerClass(): string {
    return `pagination-container ${this.size}`;
  }

  public getButtonClass(page: number | string): string {
    const isActive = page === this.currentPage;
    const isDisabled = page === '...' || this.disabled;
    return `page-btn ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`;
  }

  public getNavigationClass(direction: 'prev' | 'next'): string {
    const isDisabled = direction === 'prev' ? this.isFirstPage() : this.isLastPage();
    return `nav-btn ${direction} ${isDisabled || this.disabled ? 'disabled' : ''}`;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
