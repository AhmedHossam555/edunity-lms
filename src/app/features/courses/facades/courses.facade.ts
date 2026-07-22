import { Injectable, computed, inject, signal } from '@angular/core';
import { CoursesDataService } from '../services';
import { ICourse, ICourseFilter } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoursesFacade {
  private readonly service = inject(CoursesDataService);

  readonly courses = signal<ICourse[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly selectedCourse = signal<ICourse | null>(null);

  // Pagination
  readonly currentPage = signal(1);
  readonly itemsPerPage = signal(6);

  readonly filter = signal<ICourseFilter>({
    search: '',
    category: null,
    level: null,
    isFree: null,
    minRating: null,
    sortBy: 'latest',
  });

  // ----------------------------
  // Filter helpers
  // ----------------------------

  updateSearch(search: string): void {
    this.filter.update((filter) => ({
      ...filter,
      search: search.trim(),
    }));

    this.currentPage.set(1);
  }

  updateFilter(partial: Partial<ICourseFilter>): void {
    this.filter.update((filter) => ({
      ...filter,
      ...partial,
    }));

    this.currentPage.set(1);
  }

  // ----------------------------
  // Filtered Courses
  // ----------------------------

  readonly filteredCourses = computed(() => {
    let items = this.courses();

    const { search, category, level, isFree, minRating } = this.filter();

    const normalizedSearch = search.trim().toLowerCase();

    if (normalizedSearch) {
      items = items.filter((course) => course.title.toLowerCase().includes(normalizedSearch));
    }

    if (category) {
      items = items.filter((course) => course.category === category);
    }

    if (level) {
      items = items.filter((course) => course.level === level);
    }

    if (isFree !== null) {
      items = items.filter((course) => course.isFree === isFree);
    }

    if (minRating !== null) {
      items = items.filter((course) => course.rating >= minRating);
    }

    return items;
  });

  // ----------------------------
  // Pagination
  // ----------------------------

  readonly paginatedCourses = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();

    return this.filteredCourses().slice(start, start + this.itemsPerPage());
  });

  readonly totalItems = computed(() => this.filteredCourses().length);

  readonly totalPages = computed(() => Math.ceil(this.totalItems() / this.itemsPerPage()));

  // ----------------------------
  // Data
  // ----------------------------

  loadCourses(): void {
    this.loading.set(true);
    this.error.set(null);

    this.service.getCourses().subscribe({
      next: (courses) => {
        this.courses.set(courses);
        this.currentPage.set(1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Unable to load courses.');
      },
    });
  }

  loadCourse(id: string): void {
    this.loading.set(true);
    this.error.set(null);
    this.selectedCourse.set(null);

    this.service.getCourse(id).subscribe({
      next: (course) => {
        this.selectedCourse.set(course);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Unable to load the course.');
      },
    });
  }

  // ----------------------------
  // Pagination Actions
  // ----------------------------

  setPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;

    this.currentPage.set(page);
  }

  nextPage(): void {
    this.setPage(this.currentPage() + 1);
  }

  previousPage(): void {
    this.setPage(this.currentPage() - 1);
  }

  setItemsPerPage(size: number): void {
    this.itemsPerPage.set(size);
    this.currentPage.set(1);
  }
}
