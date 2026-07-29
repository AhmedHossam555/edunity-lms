import { Injectable, inject, signal } from '@angular/core';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { AuthResponse, AuthUser, LoginRequest, RegisterRequest } from '../models';
import { AuthService, AuthState } from '../services';
import { ToastFacade } from '@app/core/toast';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthState);
  private readonly toast = inject(ToastFacade);

  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  // Expose AuthState's signals through the facade so components
  // only need one injection point, but there's still only ONE writer.
  readonly user = this.authState.user;
  readonly isAuthenticated = this.authState.isAuthenticated;

  login(request: LoginRequest): Observable<AuthResponse> {
    this.loading.set(true);
    this.error.set(null);

    return this.authService.login(request).pipe(
      tap((response) => {
        if (response?.user) {
          this.authState.login(response.user); // <-- the missing wire-up
          this.toast.success({
            title: 'Welcome Back!',
            message: `Successfully logged in as ${response.user.fullName ?? 'User'}`,
          });
        }
      }),
      catchError((error) => {
        const message = this.extractErrorMessage(error, 'Login failed. Please try again.');
        this.error.set(message);
        this.toast.error({ title: 'Login Failed', message, duration: 5000 });
        return throwError(() => error);
      }),
      finalize(() => this.loading.set(false)),
    );
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    this.loading.set(true);
    this.error.set(null);

    return this.authService.register(request).pipe(
      tap((response) => {
        if (response?.user) {
          this.toast.success({
            title: 'Registration Successful',
            message: 'Your account has been created successfully!',
          });
          // Optional: auto-login after register
          // this.authState.login(response.user);
        }
      }),
      catchError((error) => {
        const message = this.extractErrorMessage(error, 'Registration failed. Please try again.');
        this.error.set(message);
        this.toast.error({ title: 'Registration Failed', message, duration: 5000 });
        return throwError(() => error);
      }),
      finalize(() => this.loading.set(false)),
    );
  }

  logout(): void {
    this.authState.logout();
    this.error.set(null);
    this.loading.set(false);
    this.toast.info({
      title: 'Logged Out',
      message: 'You have been successfully logged out.',
      duration: 3000,
    });
  }

  clearError(): void {
    this.error.set(null);
  }

  private extractErrorMessage(error: any, defaultMessage: string): string {
    return (
      error?.error?.message ??
      error?.message ??
      (typeof error === 'string' ? error : defaultMessage)
    );
  }
}
