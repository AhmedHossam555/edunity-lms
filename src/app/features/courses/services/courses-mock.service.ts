import { Injectable } from '@angular/core';
import { MOCK_COURSES } from '../mocks';
import { CoursesRepository } from '../repositories';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesMockService implements CoursesRepository {
  getCourses() {
    return of(MOCK_COURSES).pipe(delay(500));
  }

  getCourse(id: string) {
    return of(MOCK_COURSES.find((c) => c.id === id)!).pipe(delay(300));
  }
}
