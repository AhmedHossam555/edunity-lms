import { inject, Injectable } from '@angular/core';
import { BlogApi, BlogMockApi } from '../api';

@Injectable({
  providedIn: 'root',
})
export class BlogsDataService {
  private readonly repository = true ? inject(BlogMockApi) : inject(BlogApi);

  getBlogs() {
    return this.repository.getBlogs();
  }

  getBlog(id: string) {
    return this.repository.getBlog(id);
  }
}