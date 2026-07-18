import { Injectable, inject, signal, computed } from "@angular/core";
import { ICourse, ICourseFilter } from "../interfaces";
import { CoursesDataService } from "../services";

@Injectable({
  providedIn: 'root'
})
export class CoursesFacade {

  private readonly service = inject(CoursesDataService);

  readonly courses = signal<ICourse[]>([]);

  readonly loading = signal(false);

  readonly filter = signal<ICourseFilter>({
    search: '',
    category: null,
    level: null,
    isFree: null,
    minRating: null,
    sortBy: 'latest'
  });

  readonly selectedCourse = signal<ICourse | null>(null);

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

  loadCourses() {

    this.loading.set(true);

    this.service.getCourses().subscribe({
      next: courses => {

        this.courses.set(courses);

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

      }
    });

  }

}