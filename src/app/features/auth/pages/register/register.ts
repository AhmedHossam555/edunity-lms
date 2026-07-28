import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PageBanner, Button, safeSvg } from '@app/shared';
import { SVG_AUTH_ICONS } from '../../constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PageBanner, Button, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private readonly fb = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);

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
  }
}
