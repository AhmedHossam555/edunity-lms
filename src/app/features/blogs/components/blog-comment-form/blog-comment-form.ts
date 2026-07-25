import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog-comment-form.html',
  styleUrl: './blog-comment-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCommentForm {
  private readonly fb = inject(FormBuilder);

  protected readonly commentForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    website: [''],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  protected submitComment(): void {
    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();
      return;
    }

    const comment = this.commentForm.getRawValue();

    console.log(comment);

    this.commentForm.reset({
      name: '',
      email: '',
      website: '',
      message: '',
    });
  }
}