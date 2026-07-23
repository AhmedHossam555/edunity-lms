import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { BlogsRepository } from '../repositories';
import { MOCK_BLOGS } from '../mocks';

@Injectable({
  providedIn: 'root',
})
export class BlogMockApi implements BlogsRepository {
  getBlogs() {
    return of(MOCK_BLOGS).pipe(delay(500));
  }

  getBlog(id: string) {
    return of(MOCK_BLOGS.find((blog) => blog.id === id)!).pipe(delay(400));
  }
}
