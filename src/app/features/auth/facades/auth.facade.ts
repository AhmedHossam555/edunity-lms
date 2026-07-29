import { Injectable, inject, signal } from '@angular/core';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs'; // Add catchError and throwError
import { AuthUser, LoginRequest, RegisterRequest } from '../models';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly authService = inject(AuthService);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly user = signal<AuthUser | null>(null);

  register(request: RegisterRequest): Observable<any> {
    this.loading.set(true);
    this.error.set(null);

    return this.authService.register(request).pipe(
      catchError((error) => {
        // Extract error message from the response
        const errorMessage =
          error.error?.message || error.message || 'Registration failed. Please try again.';
        this.error.set(errorMessage);
        return throwError(() => error);
      }),
      finalize(() => {
        this.loading.set(false);
      }),
    );
  }

  login(request: LoginRequest): Observable<any> {
    this.loading.set(true);
    this.error.set(null);

    return this.authService.login(request).pipe(
      tap((response) => {
        if (response.user) {
          this.user.set(response.user);
        }
      }),
      catchError((error) => {
        const errorMessage =
          error.error?.message || error.message || 'Login failed. Please try again.';
        this.error.set(errorMessage);
        return throwError(() => error);
      }),
      finalize(() => {
        this.loading.set(false);
      }),
    );
  }
}
