import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogCommentsApi } from '../api';
import { BlogComment } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogCommentsService {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────
  private readonly api = inject(BlogCommentsApi);

  // ─────────────────────────────────────────────────────────────
  // API Methods
  // ─────────────────────────────────────────────────────────────
  submitComment(comment: BlogComment): Observable<void> {
    return this.api.submitComment(comment);
  }
}