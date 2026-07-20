import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesFacade } from '../../facades';

@Component({
  selector: 'app-course-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-search.html',
  styleUrl: './course-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSearch {
  private readonly facade = inject(CoursesFacade);
  
  // Local search input value
  searchTerm = signal('');

  // Update search when user types (with debounce)
  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
    this.applySearch();
  }

  // Apply search to facade
  private applySearch(): void {
    const currentFilter = this.facade.filter();
    this.facade.filter.set({
      ...currentFilter,
      search: this.searchTerm().trim()
    });
  }

  // Clear search
  clearSearch(): void {
    this.searchTerm.set('');
    const currentFilter = this.facade.filter();
    this.facade.filter.set({
      ...currentFilter,
      search: ''
    });
  }
}