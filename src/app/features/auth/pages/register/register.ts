import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { PageBanner, Button, safeSvg } from '@app/shared';
import { SVG_AUTH_ICONS } from '../../constants';
import { AuthFacade } from '../../facades';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PageBanner, Button, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register implements OnDestroy {
  private readonly authFacade = inject(AuthFacade);
  private readonly fb = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);
  private readonly subscription = new Subscription();

  protected readonly registerForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  protected showPassword = false;

  protected get f() {
    return this.registerForm.controls;
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

  // Define SVG icons as safe HTML
  protected get eyeClosedIcon(): SafeHtml {
    return safeSvg(this.sanitizer, SVG_AUTH_ICONS.eyeClosed);
  }

  protected get eyeOpenIcon(): SafeHtml {
    return safeSvg(this.sanitizer, SVG_AUTH_ICONS.eyeOpen);
  }

  // Social media icons
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
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    // Subscribe to the registration result to handle success
    this.subscription.add(
      this.authFacade.register(this.registerForm.getRawValue()).subscribe({
        next: (response) => {
          // Handle successful registration
          console.log('Registration successful:', response);

          // Navigate to login page after successful registration
          this.router.navigateByUrl('/auth/login');
          // Optionally reset form
          // this.registerForm.reset();
        },
        error: (error) => {
          // Error is already handled in facade
          // but you can add additional error handling here
          console.error('Registration failed:', error);
        },
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
