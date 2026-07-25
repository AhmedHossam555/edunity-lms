import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { Logger } from '@app/core/logging/logger';

import { BlogComment } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogCommentsApi {
  // ─────────────────────────────────────────────────────────────
  // API Methods
  // ─────────────────────────────────────────────────────────────
  submitComment(comment: BlogComment): Observable<void> {
    Logger.log('Fake API Request:', comment);

    return of(void 0).pipe(delay(2000));
  }
}
