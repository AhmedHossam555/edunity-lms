import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogCommentsFacade } from '../../facades';
import { COMMENT_FORM_CONFIG, COMMENT_FORM_ERROR_MESSAGES, getFieldConfig } from '../../configs';
import { FormFieldId } from '../../enums';
import { ICommentFormValue } from '../../interfaces';


@Component({
  selector: 'app-blog-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog-comment-form.html',
  styleUrl: './blog-comment-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCommentForm {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────
  private readonly fb = inject(FormBuilder);
  protected readonly facade = inject(BlogCommentsFacade);

  // ─────────────────────────────────────────────────────────────
  // Static content / config (previously hardcoded in the template)
  // ─────────────────────────────────────────────────────────────
  protected readonly config = COMMENT_FORM_CONFIG;
  protected readonly errorMessages = COMMENT_FORM_ERROR_MESSAGES;
  protected readonly FormFieldId = FormFieldId;

  protected readonly maxMessageLength = COMMENT_FORM_CONFIG.maxMessageLength;

  protected readonly nameField = getFieldConfig(FormFieldId.Name);
  protected readonly emailField = getFieldConfig(FormFieldId.Email);
  protected readonly websiteField = getFieldConfig(FormFieldId.Website);
  protected readonly messageField = getFieldConfig(FormFieldId.Message);

  // ─────────────────────────────────────────────────────────────
  // Form
  // ─────────────────────────────────────────────────────────────
  protected readonly commentForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    website: [''],
    message: [
      '',
      [Validators.required, Validators.minLength(20), Validators.maxLength(this.maxMessageLength)],
    ],
  });

  // ─────────────────────────────────────────────────────────────
  // Signals
  // ─────────────────────────────────────────────────────────────
  // The original template read `commentForm.controls.message.value.length`
  // directly on every CD run. Under OnPush that only redraws when Angular
  // has another reason to check the view. Wiring valueChanges into a
  // signal makes the counter/warning state reactive on its own.
  private readonly messageValue = toSignal(this.commentForm.controls.message.valueChanges, {
    initialValue: this.commentForm.controls.message.value,
  });

  protected readonly messageLength = computed(() => this.messageValue().length);

  protected readonly isMessageNearLimit = computed(
    () => this.messageLength() >= this.maxMessageLength * 0.9,
  );

  // ─────────────────────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────────────────────
  protected submitComment(): void {
    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();
      return;
    }

    this.facade
      .submitComment(this.commentForm.getRawValue() as ICommentFormValue)
      .subscribe(() => {
        console.log('Comment submitted successfully.');

        this.commentForm.reset({
          name: '',
          email: '',
          website: '',
          message: '',
        });
      });
  }
}