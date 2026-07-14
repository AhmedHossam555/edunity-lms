import { ToastType } from '../enums/toast-type.enum';

/**
 * Shape accepted from consumers (facade callers).
 * `type`, `id`, and `createdAt` are supplied internally by the domain/service layer.
 */
export interface ToastConfig {
  readonly title: string;
  readonly message: string;
  readonly duration?: number;
  readonly closable?: boolean;
}

export interface ToastCreateOptions extends ToastConfig {
  readonly type: ToastType;
}

export const DEFAULT_TOAST_DURATION = 5000;
export const DEFAULT_TOAST_CLOSABLE = true;