import { inject, Injectable } from '@angular/core';
import { CoursesRepository } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../interfaces';

@Injectable()
export class CoursesApiService implements CoursesRepository {
  private readonly http = inject(HttpClient);

  getCourses() {
    return this.http.get<ICourse[]>('/api/courses');
  }

  getCourse(id: string) {
    return this.http.get<ICourse>(`/api/courses/${id}`);
  }
}
