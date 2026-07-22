import { inject, Injectable } from '@angular/core';
import { CourseApi, CourseMockApi } from '../api';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  private readonly repository = true ? inject(CourseMockApi) : inject(CourseApi);

  getCourses() {
    return this.repository.getCourses();
  }

  getCourse(id: string) {
    return this.repository.getCourse(id);
  }
}
