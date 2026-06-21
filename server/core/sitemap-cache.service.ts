interface CacheEntry<T> {
  data: T;
  expires: number;
}

export class SitemapCacheService {
  private cache = new Map<string, CacheEntry<any>>();
  private defaultTtl = 3600_000; // 1 hour

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expires) {
      this.cache.delete(key);
      return null;
    }
    return entry.data as T;
  }

  set<T>(key: string, data: T, ttlMs: number = this.defaultTtl): void {
    this.cache.set(key, {
      data,
      expires: Date.now() + ttlMs,
    });
  }

  clear(): void {
    this.cache.clear();
  }
}
