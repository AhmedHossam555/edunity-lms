import { inject, Injectable } from '@angular/core';
import { CoursesApiService } from './courses-api.service';
import { CoursesMockService } from './courses-mock.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  private readonly repository = true ? inject(CoursesMockService) : inject(CoursesApiService);

  getCourses() {
    return this.repository.getCourses();
  }

  getCourse(id: string) {
    return this.repository.getCourse(id);
  }
}
