import { Injectable, inject, signal, computed, effect } from "@angular/core";
import { ICourse, ICourseFilter } from "../interfaces";
import { CoursesDataService } from "../services";

@Injectable({
  providedIn: 'root'
})
export class CoursesFacade {

  private readonly service = inject(CoursesDataService);

  readonly courses = signal<ICourse[]>([]);
  readonly loading = signal(false);
  readonly selectedCourse = signal<ICourse | null>(null);

  // Pagination state
  readonly currentPage = signal<number>(1);
  readonly itemsPerPage = signal<number>(6); // Adjust as needed

  readonly filter = signal<ICourseFilter>({
    search: '',
    category: null,
    level: null,
    isFree: null,
    minRating: null,
    sortBy: 'latest'
  });

  // Computed filtered courses
  readonly filteredCourses = computed(() => {
    let items = [...this.courses()];

    const filter = this.filter();

    if (filter.search) {
      items = items.filter(course =>
        course.title
          .toLowerCase()
          .includes(filter.search.toLowerCase())
      );
    }

    if (filter.category) {
      items = items.filter(
        course => course.category === filter.category
      );
    }

    if (filter.level) {
      items = items.filter(
        course => course.level === filter.level
      );
    }

    if (filter.isFree !== null) {
      items = items.filter(
        course => course.isFree === filter.isFree
      );
    }

    if (filter.minRating) {
      items = items.filter(
        course => course.rating >= filter.minRating!
      );
    }

    return items;
  });

  // Paginated courses
  readonly paginatedCourses = computed(() => {
    const allCourses = this.filteredCourses();
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    
    return allCourses.slice(startIndex, endIndex);
  });

  // Pagination info
  readonly totalItems = computed(() => this.filteredCourses().length);
  readonly totalPages = computed(() => Math.ceil(this.totalItems() / this.itemsPerPage()));

  // Reset to first page when filter changes
  private filterEffect = effect(() => {
    // Trigger when filter changes
    this.filter();
    // Reset to first page
    this.currentPage.set(1);
  });

  loadCourses() {
    this.loading.set(true);

    this.service.getCourses().subscribe({
      next: courses => {
        this.courses.set(courses);
        this.loading.set(false);
        // Reset to first page when new data loads
        this.currentPage.set(1);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  loadCourse(id: string) {
    this.loading.set(true);

    this.service.getCourse(id).subscribe({
      next: course => {
        this.selectedCourse.set(course);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  // Pagination methods
  setPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  setItemsPerPage(size: number): void {
    this.itemsPerPage.set(size);
    this.currentPage.set(1); // Reset to first page when changing items per page
  }
}