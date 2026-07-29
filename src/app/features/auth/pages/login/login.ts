import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { PageBanner, Button, safeSvg } from '@app/shared';
import { SVG_AUTH_ICONS } from '../../constants';
import { AuthFacade } from '../../facades';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PageBanner, Button, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login implements OnDestroy {
  private readonly authFacade = inject(AuthFacade);
  private readonly fb = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);
  private readonly subscription = new Subscription();

  protected readonly loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  protected showPassword = false;

  protected get f() {
    return this.loginForm.controls;
  }

  protected get isLoading(): boolean {
    return this.authFacade.loading();
  }

  protected get error(): string | null {
    return this.authFacade.error();
  }

  protected togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  protected get eyeClosedIcon(): SafeHtml {
    return safeSvg(this.sanitizer, SVG_AUTH_ICONS.eyeClosed);
  }

  protected get eyeOpenIcon(): SafeHtml {
    return safeSvg(this.sanitizer, SVG_AUTH_ICONS.eyeOpen);
  }

  protected get appleIcon(): SafeHtml {
    return safeSvg(this.sanitizer, SVG_AUTH_ICONS.apple);
  }

  protected get googleIcon(): SafeHtml {
    return safeSvg(this.sanitizer, SVG_AUTH_ICONS.google);
  }

  protected get facebookIcon(): SafeHtml {
    return safeSvg(this.sanitizer, SVG_AUTH_ICONS.facebook);
  }

  protected onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.subscription.add(
      this.authFacade.login(this.loginForm.getRawValue()).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.authFacade.clearError();
  }
}
