import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

import { MOCK_COURSES } from '../mocks';
import { CoursesRepository } from '../repositories';

@Injectable({
  providedIn: 'root',
})
export class CourseMockApi implements CoursesRepository {
  getCourses() {
    return of(MOCK_COURSES).pipe(delay(500));
  }

  getCourse(id: string) {
    return of(MOCK_COURSES.find((c) => c.id === id)!).pipe(delay(400));
  }
}
