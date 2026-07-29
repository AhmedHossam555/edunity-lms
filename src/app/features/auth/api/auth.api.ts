import { Injectable } from '@angular/core';
import { Observable, throwError, of, delay } from 'rxjs';
import { AUTH_STORAGE_KEY } from '../constants';
import { RegisterRequest, AuthResponse, AuthUser, LoginRequest } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  register(request: RegisterRequest): Observable<AuthResponse> {
    const users = this.getUsers();

    const exists = users.some((user) => user.email.toLowerCase() === request.email.toLowerCase());

    if (exists) {
      return throwError(() => new Error('Email already exists.'));
    }

    const user: AuthUser = {
      id: crypto.randomUUID(),
      ...request,
      createdAt: new Date().toISOString(),
    };

    users.push(user);

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));

    return of({
      success: true,
      message: 'Registration successful.',
      user,
    }).pipe(delay(1200));
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    const users = this.getUsers();

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === request.email.toLowerCase() && u.password === request.password,
    );

    if (!user) {
      return throwError(() => new Error('Invalid email or password.'));
    }

    return of({
      success: true,
      message: 'Login successful.',
      user,
    }).pipe(delay(1200));
  }

  private getUsers(): AuthUser[] {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) ?? '[]');
  }
}
