import { Injectable, inject } from '@angular/core';
import { ToastService } from './toast.service';
import { ToastType } from '../domain/enums/toast-type.enum';
import { ToastConfig } from '../domain/interfaces/toast-config.interface';

/**
 * Public API for the toast module. Components depend on this, never on
 * ToastService directly — keeps the domain/application boundary intact
 * and gives us one seam to evolve without touching presentation code.
 */
@Injectable({ providedIn: 'root' })
export class ToastFacade {
  private readonly toastService = inject(ToastService);

  readonly toasts = this.toastService.toasts;

  success(config: ToastConfig): string {
    return this.toastService.add({ ...config, type: ToastType.Success });
  }

  error(config: ToastConfig): string {
    return this.toastService.add({ ...config, type: ToastType.Error });
  }

  warning(config: ToastConfig): string {
    return this.toastService.add({ ...config, type: ToastType.Warning });
  }

  info(config: ToastConfig): string {
    return this.toastService.add({ ...config, type: ToastType.Info });
  }

  dismiss(id: string): void {
    this.toastService.remove(id);
  }

  dismissAll(): void {
    this.toastService.clear();
  }

  pause(id: string): void {
    this.toastService.pause(id);
  }

  resume(id: string, remainingMs: number): void {
    this.toastService.resume(id, remainingMs);
  }
}