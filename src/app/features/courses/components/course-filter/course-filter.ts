import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesFacade } from '../../facades';
import { ICourseFilter } from '../../interfaces';
import { CourseCategory, CourseLevel } from '../../enums';

@Component({
  selector: 'app-course-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-filter.html',
  styleUrl: './course-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFilter {
  private readonly facade = inject(CoursesFacade);

  // Local filter state - use the enum types
  readonly filter = this.facade.filter;

  readonly category = computed(() => this.filter().category);
  readonly level = computed(() => this.filter().level);
  readonly isFree = computed(() => this.filter().isFree);
  readonly minRating = computed(() => this.filter().minRating);
  readonly sortBy = computed(() => this.filter().sortBy);
  // Filter options with proper enum values
  categories: { value: CourseCategory | null; label: string }[] = [
    { value: null, label: 'All Categories' },
    { value: CourseCategory.PROGRAMMING, label: 'Programming' },
    { value: CourseCategory.DESIGN, label: 'Design' },
    { value: CourseCategory.BUSINESS, label: 'Business' },
    { value: CourseCategory.MARKETING, label: 'Marketing' },
    { value: CourseCategory.DATA_SCIENCE, label: 'Data Science' },
  ];

  levels: { value: CourseLevel | null; label: string }[] = [
    { value: null, label: 'All Levels' },
    { value: CourseLevel.BEGINNER, label: 'Beginner' },
    { value: CourseLevel.INTERMEDIATE, label: 'Intermediate' },
    { value: CourseLevel.ADVANCED, label: 'Advanced' },
  ];

  priceOptions = [
    { value: null, label: 'All' },
    { value: true, label: 'Free' },
    { value: false, label: 'Paid' },
  ];

  ratingOptions = [
    { value: null, label: 'All Ratings' },
    { value: 4, label: '4+ Stars' },
    { value: 3.5, label: '3.5+ Stars' },
    { value: 3, label: '3+ Stars' },
  ];

  sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  // Helper methods for labels
  getCategoryLabel(value: CourseCategory | null): string {
    if (!value) return 'All Categories';
    const option = this.categories.find((c) => c.value === value);
    return option ? option.label : 'Unknown';
  }

  getLevelLabel(value: CourseLevel | null): string {
    if (!value) return 'All Levels';
    const option = this.levels.find((l) => l.value === value);
    return option ? option.label : 'Unknown';
  }

onCategoryChange(value: CourseCategory | null): void {
  this.facade.updateFilter({
    category: value,
  });
}

onLevelChange(value: CourseLevel | null): void {
  this.facade.updateFilter({
    level: value,
  });
}

onPriceChange(value: boolean | null): void {
  this.facade.updateFilter({
    isFree: value,
  });
}

onRatingChange(value: number | null): void {
  this.facade.updateFilter({
    minRating: value,
  });
}

onSortChange(value: ICourseFilter['sortBy']): void {
  this.facade.updateFilter({
    sortBy: value,
  });
}

  // Apply all filters to facade
  private applyFilters(): void {
    const filter: ICourseFilter = {
      search: this.facade.filter().search, // Preserve search
      category: this.category(),
      level: this.level(),
      isFree: this.isFree(),
      minRating: this.minRating(),
      sortBy: this.sortBy(),
    };

    this.facade.filter.set(filter);
  }

  // Clear all filters
clearFilters(): void {
  this.facade.updateFilter({
    category: null,
    level: null,
    isFree: null,
    minRating: null,
    sortBy: 'latest',
  });
}

  // Check if any filters are active (except search)
  hasActiveFilters(): boolean {
    return !!(
      this.category() ||
      this.level() ||
      this.isFree() !== null ||
      this.minRating() !== null
    );
  }
}
