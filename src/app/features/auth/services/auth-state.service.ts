import { Injectable, inject, PLATFORM_ID, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CURRENT_USER_KEY } from '../constants';
import { AuthUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthState {
private readonly platformId = inject(PLATFORM_ID);
  private readonly _user = signal<AuthUser | null>(null);

  readonly user = this._user.asReadonly();
  readonly isAuthenticated = computed(() => this._user() !== null);

  constructor() {
    this.loadUser();
  }

  private loadUser(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    this._user.set(raw ? JSON.parse(raw) : null);
  }

  login(user: AuthUser): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    }
    this._user.set(user);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
    this._user.set(null);
  }
}