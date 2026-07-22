import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-error-state',
  standalone: true,
  templateUrl: './error-state.html',
  styleUrl: './error-state.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorState {
  readonly title = input('Something went wrong');
  readonly description = input(
    'An unexpected error occurred. Please try again.'
  );
  readonly buttonText = input('Retry');

  readonly retry = output<void>();

  protected onRetry(): void {
    this.retry.emit();
  }
}