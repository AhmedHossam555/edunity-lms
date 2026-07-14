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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IContactFormData } from '../../interfaces';
import { safeSvg } from '@shared/utils/svg.util';
import { EMAIL_ICON } from '@app/shared';
import { CONTACT_FORM_FIELDS, MESSAGE_FIELD_CONFIG, CONTACT_FORM_COUNTER_NEAR_LIMIT, CONTACT_FORM_MESSAGE_MAX_LENGTH, CONTACT_FORM_VALIDATION_RULES, CONTACT_FORM_NAME_PATTERN, CONTACT_FORM_STORAGE_KEY, CONTACT_FORM_SUBMIT_DELAY_MS, VALIDATION_ERROR_MESSAGES } from '../../configs';
import { NAME_ICON, SUBJECT_ICON } from '../../constants';


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
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly isSubmitting = signal(false);
  protected readonly formSubmitted = signal(false);
  private readonly messageValue = signal('');

  // Config-driven metadata, exposed read-only to the template
  readonly fields = CONTACT_FORM_FIELDS;
  readonly messageField = MESSAGE_FIELD_CONFIG;
  readonly counterNearLimit = CONTACT_FORM_COUNTER_NEAR_LIMIT;
  readonly messageMaxLength = CONTACT_FORM_MESSAGE_MAX_LENGTH;

  // Icons, sanitized once — same pattern as ContactInfo
  readonly nameIconSafe: SafeHtml;
  readonly emailIconSafe: SafeHtml;
  readonly subjectIconSafe: SafeHtml;

  protected readonly form = this.fb.group({
    name: this.fb.control('', [
      Validators.required,
      Validators.minLength(CONTACT_FORM_VALIDATION_RULES.name.minLength!),
      Validators.maxLength(CONTACT_FORM_VALIDATION_RULES.name.maxLength),
      Validators.pattern(CONTACT_FORM_NAME_PATTERN),
    ]),
    email: this.fb.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(CONTACT_FORM_VALIDATION_RULES.email.maxLength),
    ]),
    subject: this.fb.control('', [
      Validators.required,
      Validators.minLength(CONTACT_FORM_VALIDATION_RULES.subject.minLength!),
      Validators.maxLength(CONTACT_FORM_VALIDATION_RULES.subject.maxLength),
    ]),
    message: this.fb.control('', [
      Validators.required,
      Validators.minLength(CONTACT_FORM_VALIDATION_RULES.message.minLength!),
      Validators.maxLength(CONTACT_FORM_VALIDATION_RULES.message.maxLength),
    ]),
  });

  protected readonly messageLength = computed(() => this.messageValue().length);

  protected readonly canSubmit = computed(() => {
    // Keep original rules (valid + not submitting + not already submitted)
    // but avoid SSR hydration edge-cases where the form can briefly not settle.
    const valid = this.form.valid;
    return valid && !this.isSubmitting() && !this.formSubmitted();
  });

  constructor() {
    this.nameIconSafe = safeSvg(this.sanitizer, NAME_ICON);
    this.emailIconSafe = safeSvg(this.sanitizer, EMAIL_ICON);
    this.subjectIconSafe = safeSvg(this.sanitizer, SUBJECT_ICON);

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
            localStorage.setItem(CONTACT_FORM_STORAGE_KEY, JSON.stringify(value));
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
      const saved = localStorage.getItem(CONTACT_FORM_STORAGE_KEY);
      if (saved && !this.formSubmitted()) {
        const parsed = JSON.parse(saved) as Partial<IContactFormData>;
        this.form.patchValue(parsed);
        this.messageValue.set(parsed.message || '');
      }
    } catch {
      // Ignore parse errors
    }
  }

  protected submit(): void {
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
        localStorage.removeItem(CONTACT_FORM_STORAGE_KEY);
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
    }, CONTACT_FORM_SUBMIT_DELAY_MS);
  }

  protected resetForm(): void {
    this.formSubmitted.set(false);
    this.form.reset({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    this.messageValue.set('');
    try {
      localStorage.removeItem(CONTACT_FORM_STORAGE_KEY);
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

  protected hasError(control: keyof ContactForm['form']['controls']): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || this.formSubmitted());
  }

  protected getErrorMessage(control: keyof ContactForm['form']['controls']): string {
    const field = this.form.controls[control];
    const errors = field.errors;

    if (!errors) return '';

    const m = VALIDATION_ERROR_MESSAGES;
    const errorMessages: Record<string, string> = {
      required: m.required,
      minlength: `${m.minlengthPrefix}${errors['minlength']?.requiredLength || 3}${m.minlengthSuffix}`,
      maxlength: `${m.maxlengthPrefix}${errors['maxlength']?.requiredLength || 100}${m.maxlengthSuffix}`,
      email: m.email,
      pattern: m.pattern,
    };

    const errorKey = Object.keys(errors)[0];
    return errorMessages[errorKey] || 'Invalid input';
  }

  protected trackByField(_index: number, field: string): string {
    return field;
  }
}