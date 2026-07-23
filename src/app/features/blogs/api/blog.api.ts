import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IBlog } from '../interfaces';
import { BlogsRepository } from '../repositories';

@Injectable({
  providedIn: 'root',
})
export class BlogApi implements BlogsRepository {
  private readonly http = inject(HttpClient);

  getBlogs() {
    return this.http.get<IBlog[]>('/api/blogs');
  }

  getBlog(id: string) {
    return this.http.get<IBlog>(`/api/blogs/${id}`);
  }
}