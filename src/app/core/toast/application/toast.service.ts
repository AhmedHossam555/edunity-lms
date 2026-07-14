import { Injectable, signal } from '@angular/core';
import { ToastModel } from '../domain/models/toast.model';
import {
  DEFAULT_TOAST_CLOSABLE,
  DEFAULT_TOAST_DURATION,
  ToastCreateOptions,
} from '../domain/interfaces/toast-config.interface';
import { generateToastId } from '../infrastructure/toast-id.util';

/**
 * Pure state container. No DOM, no timers-as-side-effects beyond bookkeeping
 * the id -> timeout handle map so callers (facade / component) can cancel or
 * pause auto-dismiss (hover-pause support).
 *
 * Components must never inject this directly — go through ToastFacade.
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _toasts = signal<ToastModel[]>([]);
  readonly toasts = this._toasts.asReadonly();

  private readonly timers = new Map<string, ReturnType<typeof setTimeout>>();

  add(options: ToastCreateOptions): string {
    const toast: ToastModel = {
      id: generateToastId(),
      title: options.title,
      message: options.message,
      type: options.type,
      duration: options.duration ?? DEFAULT_TOAST_DURATION,
      closable: options.closable ?? DEFAULT_TOAST_CLOSABLE,
      createdAt: Date.now(),
    };

    this._toasts.update((items) => [...items, toast]);

    if (toast.duration > 0) {
      this.scheduleAutoClose(toast.id, toast.duration);
    }

    return toast.id;
  }

  remove(id: string): void {
    this.clearTimer(id);
    this._toasts.update((items) => items.filter((toast) => toast.id !== id));
  }

  clear(): void {
    this.timers.forEach((handle) => clearTimeout(handle));
    this.timers.clear();
    this._toasts.set([]);
  }

  pause(id: string): void {
    this.clearTimer(id);
  }

  resume(id: string, remaining: number): void {
    if (remaining > 0) {
      this.scheduleAutoClose(id, remaining);
    }
  }

  private scheduleAutoClose(id: string, duration: number): void {
    this.clearTimer(id);
    const handle = setTimeout(() => this.remove(id), duration);
    this.timers.set(id, handle);
  }

  private clearTimer(id: string): void {
    const handle = this.timers.get(id);
    if (handle) {
      clearTimeout(handle);
      this.timers.delete(id);
    }
  }
}