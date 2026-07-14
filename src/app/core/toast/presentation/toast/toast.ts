import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastItem } from '../toast-item/toast-item';
import { ToastFacade } from '../../application';

@Component({
  selector: 'app-toast',
  imports: [ToastItem],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'toast-host',
  },
})
export class Toast {
  protected readonly facade = inject(ToastFacade);
}