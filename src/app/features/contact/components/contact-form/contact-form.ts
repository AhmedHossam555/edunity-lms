import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IContactFormData } from '../../interfaces';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactForm {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  readonly isSubmitting = signal(false);
  readonly formSubmitted = signal(false);
  private readonly messageValue = signal('');

  readonly form = this.fb.group({
    name: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
      Validators.pattern(/^[a-zA-Z\s'-]+$/),
    ]),
    email: this.fb.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(254),
    ]),
    subject: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(150),
    ]),
    message: this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1000),
    ]),
  });

  readonly messageLength = computed(() => this.messageValue().length);

  readonly canSubmit = computed(() => {
    // Keep original rules (valid + not submitting + not already submitted)
    // but avoid SSR hydration edge-cases where the form can briefly not settle.
    const valid = this.form.valid;
    return valid && !this.isSubmitting() && !this.formSubmitted();
  });


  constructor() {
    const platformId = inject(PLATFORM_ID);
    const canUseStorage = isPlatformBrowser(platformId);

    // Track message value changes for counter

    this.form.controls.message.valueChanges
      .pipe(
        debounceTime(50),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((value) => {
        this.messageValue.set(value || '');
      });

    // Initialize message value
    this.messageValue.set(this.form.controls.message.value || '');

    // Auto-save draft
    this.form.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((value) => {
        if (canUseStorage && this.form.valid && !this.formSubmitted()) {
          try {
            localStorage.setItem('contactFormDraft', JSON.stringify(value));
          } catch {
            // Ignore storage errors
          }
        }

      });

    // Restore draft
    this.restoreDraft(canUseStorage);


    // Effect to handle form enabled/disabled state based on submission
    effect(() => {
      if (this.formSubmitted()) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }

  private restoreDraft(canUseStorage: boolean): void {
    if (!canUseStorage) return;

    try {
      const saved = localStorage.getItem('contactFormDraft');
      if (saved && !this.formSubmitted()) {
        const parsed = JSON.parse(saved) as Partial<IContactFormData>;
        this.form.patchValue(parsed);
        this.messageValue.set(parsed.message || '');
      }
    } catch {
      // Ignore parse errors
    }
  }


  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.focusFirstInvalid();
      return;
    }

    if (this.isSubmitting() || this.formSubmitted()) {
      return;
    }

    this.isSubmitting.set(true);
    const formData = this.form.getRawValue();
    this.submitToApi(formData);
  }

  private submitToApi(data: IContactFormData): void {

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);

      this.isSubmitting.set(false);
      this.formSubmitted.set(true);

      // Clear draft
      try {
        localStorage.removeItem('contactFormDraft');
      } catch {
        // Ignore storage errors
      }

      // Reset form
      this.form.reset({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      this.messageValue.set('');

      this.announceSuccess();
    }, 1500);
  }

  resetForm(): void {
    this.formSubmitted.set(false);
    this.form.reset({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    this.messageValue.set('');
    try {
      localStorage.removeItem('contactFormDraft');
    } catch {
      // Ignore storage errors
    }
  }

  private focusFirstInvalid(): void {
    const firstInvalid = document.querySelector(
      'input.ng-invalid, textarea.ng-invalid',
    ) as HTMLElement;
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.setAttribute('aria-invalid', 'true');
    }
  }

  private announceSuccess(): void {
    const announcer = document.createElement('div');
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.className = 'sr-only';
    announcer.textContent = 'Form submitted successfully';
    document.body.appendChild(announcer);
    setTimeout(() => announcer.remove(), 1000);
  }

  hasError(control: keyof ContactForm['form']['controls']): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || this.formSubmitted());
  }

  getErrorMessage(control: keyof ContactForm['form']['controls']): string {
    const field = this.form.controls[control];
    const errors = field.errors;

    if (!errors) return '';

    const errorMessages: Record<string, string> = {
      required: 'This field is required',
      minlength: `Minimum ${errors['minlength']?.requiredLength || 3} characters required`,
      maxlength: `Maximum ${errors['maxlength']?.requiredLength || 100} characters allowed`,
      email: 'Please enter a valid email address',
      pattern: 'Please enter a valid value',
    };

    const errorKey = Object.keys(errors)[0];
    return errorMessages[errorKey] || 'Invalid input';
  }

  trackByField(_index: number, field: string): string {
    return field;
  }
}