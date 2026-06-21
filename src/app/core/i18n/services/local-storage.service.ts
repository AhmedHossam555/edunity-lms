// ─────────────────────────────────────────
// LocalStorageService – fully SSR‑safe

import { Injectable, inject } from "@angular/core";
import { PlatformService } from "@app/core/platform/platform.service";

// ─────────────────────────────────────────
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly platformService = inject(PlatformService);

  set(key: string, data: any, expiresInMs: number): void {
    if (this.platformService.isServer) return;
    const record = {
      data,
      expiresAt: expiresInMs > 0 ? Date.now() + expiresInMs : Date.now(), 
    };
    localStorage.setItem(key, JSON.stringify(record));
  }

  update(key: string, newData: Record<string, any>, expiresInMs: number): void {
    if (this.platformService.isServer) return;
    const existing = this.get<Record<string, any>>(key) || {};
    const merged = { ...existing, ...newData };
    this.set(key, merged, expiresInMs);
  }



  get<T>(key: string): T | null {
    if (this.platformService.isServer) return null;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw) as { data: T; expiresAt: number | null };
      if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
        localStorage.removeItem(key);
        return null;
      }
      return parsed.data;
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }
  delete(key: string): void {
    if (this.platformService.isServer) return;
    localStorage.removeItem(key);
  }

  clear(): void {
    if (this.platformService.isServer) return;
    localStorage.clear();
  }
}
