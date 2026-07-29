import { Injectable, inject, signal } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { AuthUser, RegisterRequest } from "../models";
import { AuthService } from "../services";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  private readonly authService = inject(AuthService);

  readonly loading = signal(false);

  readonly error = signal<string | null>(null);

  readonly user = signal<AuthUser | null>(null);

  register(request: RegisterRequest): Observable<any> {
    this.loading.set(true);
    this.error.set(null);

    return this.authService
      .register(request)
      .pipe(
        finalize(() => {
          this.loading.set(false);
        })
      );
  }
}