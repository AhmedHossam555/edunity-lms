import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, finalize, tap, throwError } from 'rxjs';

import { ToastFacade } from '@app/core/toast';

import { BlogComment } from '../interfaces';
import { BlogCommentsService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class BlogCommentsFacade {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly blogCommentsService = inject(BlogCommentsService);
  private readonly toast = inject(ToastFacade);

  // ─────────────────────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────────────────────

  private readonly loadingSignal = signal(false);

  // ─────────────────────────────────────────────────────────────
  // Selectors
  // ─────────────────────────────────────────────────────────────

  readonly loading = computed(() => this.loadingSignal());

  // ─────────────────────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────────────────────

  submitComment(comment: BlogComment) {
    this.loadingSignal.set(true);

    return this.blogCommentsService.submitComment(comment).pipe(
      tap(() => {
        this.toast.success({
          title: 'Comment Submitted',
          message: 'Your comment has been submitted successfully.',
        });
      }),

      catchError((error) => {
        this.toast.error({
          title: 'Submission Failed',
          message: 'Unable to submit your comment. Please try again.',
          duration: 0,
        });

        return throwError(() => error);
      }),

      finalize(() => {
        this.loadingSignal.set(false);
      }),
    );
  }
}