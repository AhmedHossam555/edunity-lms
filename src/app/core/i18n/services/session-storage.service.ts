import {
  Injectable,
  TransferState,
  makeStateKey,
  inject,
} from '@angular/core';

import { PlatformService } from '@app/core/platform/platform.service';

interface StorageEntry<T> {
  value: T;
  expiresAt: number;
}

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  private readonly platformService = inject(PlatformService);
  private transferState = inject(TransferState);

  // SSR-only in-memory store
  private serverStore = new Map<string, StorageEntry<any>>();


  set<T>(key: string, value: T, ttlMs: number): void {
    const entry: StorageEntry<T> = {
      value,
      expiresAt: Date.now() + ttlMs,
    };

    if (this.platformService.isBrowser) {
      try {
        sessionStorage.setItem(key, JSON.stringify(entry));
      } catch (error) {
        console.warn('SessionStorage set error:', error);
      }
    } else {
      // SSR: store in server memory + TransferState for client hydration
      this.serverStore.set(key, entry);
      const tsKey = makeStateKey<StorageEntry<T>>(key);
      this.transferState.set(tsKey, entry);
    }
  }

  get<T>(key: string): T | null {
    if (this.platformService.isBrowser) {
      try {
        const raw = sessionStorage.getItem(key);
        if (!raw) return null;

        const entry: StorageEntry<T> = JSON.parse(raw);
        if (!entry.expiresAt || Date.now() > entry.expiresAt) {
          sessionStorage.removeItem(key);
          return null;
        }
        return entry.value;
      } catch (error) {
        sessionStorage.removeItem(key);
        return null;
      }
    } else {
      // SSR: check server memory first
      const entry = this.serverStore.get(key);
      if (!entry) return null;
      if (!entry.expiresAt || Date.now() > entry.expiresAt) {
        this.serverStore.delete(key);
        return null;
      }
      return entry.value;
    }
  }

  remove(key: string): void {
    if (this.platformService.isBrowser) {
      sessionStorage.removeItem(key);
    } else {
      this.serverStore.delete(key);
      const tsKey = makeStateKey<any>(key);
      if (this.transferState.hasKey(tsKey)) this.transferState.remove(tsKey);
    }
  }

  clear(): void {
    if (this.platformService.isBrowser) {
      sessionStorage.clear();
    } else {
      this.serverStore.clear();
      // TransferState: cannot clear all keys easily; optional
    }
  }
}