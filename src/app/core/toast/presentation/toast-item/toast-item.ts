import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastFacade } from '../../application';
import { TOAST_CLOSE_ICON, TOAST_ICONS, ToastModel, ToastType } from '../../domain';


@Component({
  selector: 'app-toast-item',
  imports: [],
  templateUrl: './toast-item.html',
  styleUrl: './toast-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'toast__item-host',
  },
})
export class ToastItem {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly facade = inject(ToastFacade);

  readonly toast = input.required<ToastModel>();

  private elapsedBeforePause = 0;
  private pausedAt: number | null = null;

  protected readonly modifierClass = computed(() => `toast__item--${this.toast().type}`);

  protected readonly role = computed(() =>
    this.toast().type === ToastType.Error ? 'alert' : 'status',
  );

  protected readonly ariaLive = computed(() =>
    this.toast().type === ToastType.Error ? 'assertive' : 'polite',
  );

  protected readonly iconHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(TOAST_ICONS[this.toast().type]),
  );

  protected readonly closeIconHtml = this.sanitizer.bypassSecurityTrustHtml(TOAST_CLOSE_ICON);

  protected readonly progressDurationMs = computed(() => this.toast().duration);

  protected close(): void {
    this.facade.dismiss(this.toast().id);
  }

  protected onMouseEnter(): void {
    if (this.toast().duration <= 0) {
      return;
    }
    this.pausedAt = Date.now();
    this.facade.pause(this.toast().id);
  }

  protected onMouseLeave(): void {
    const current = this.toast();
    if (current.duration <= 0 || this.pausedAt === null) {
      return;
    }

    this.elapsedBeforePause += this.pausedAt - current.createdAt;
    this.pausedAt = null;

    const remaining = Math.max(current.duration - this.elapsedBeforePause, 0);
    this.facade.resume(current.id, remaining);
  }
}
