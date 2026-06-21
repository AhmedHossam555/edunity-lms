import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IndexedDbService {

  private readonly DB_NAME = 'HowdajTranslationsDB';
  private readonly STORE_NAME = 'translations';
  private readonly VERSION = 1;

  // ✅ Single persistent connection
  private dbPromise: Promise<IDBDatabase> | null = null;

  private openDb(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.VERSION);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          db.createObjectStore(this.STORE_NAME);
        }
      };

      request.onsuccess = () => {
        const db = request.result;

        // ✅ Handle connection loss
        db.onclose = () => { this.dbPromise = null; };
        db.onerror = () => { this.dbPromise = null; };

        resolve(db);
      };

      request.onerror = () => {
        this.dbPromise = null;
        reject(request.error);
      };

      request.onblocked = () => {
        this.dbPromise = null;
        reject(new Error('IndexedDB blocked'));
      };
    });

    return this.dbPromise;
  }

  async set(key: string, value: any): Promise<void> {
    try {
      const db = await this.openDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(this.STORE_NAME, 'readwrite');
        tx.objectStore(this.STORE_NAME).put(value, key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
      });
    } catch (err) {
      console.error('[IndexedDbService] set failed:', err);
      throw err;
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const db = await this.openDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(this.STORE_NAME, 'readonly');
        const request = tx.objectStore(this.STORE_NAME).get(key);
        request.onsuccess = () => resolve(request.result ?? null);
        request.onerror = () => reject(request.error);
      });
    } catch (err) {
      console.error('[IndexedDbService] get failed:', err);
      return null;
    }
  }

  async delete(key: string): Promise<void> {
    try {
      const db = await this.openDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(this.STORE_NAME, 'readwrite');
        tx.objectStore(this.STORE_NAME).delete(key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } catch (err) {
      console.error('[IndexedDbService] delete failed:', err);
      throw err;
    }
  }
  async updateTranslations(
  key: string,
  newData: Record<string, string>
): Promise<void> {
  try {
    const existing = await this.get<{ data: Record<string, string> }>(key);

    const mergedData: Record<string, string> = {
      ...(existing?.data || {})
    };

    // ✅ Update only valid values (no empty override)
    Object.keys(newData).forEach(k => {
      const val = newData[k];
      if (typeof val === 'string' && val.trim() !== '') {
        mergedData[k] = val;
      }
    });

    await this.set(key, { data: mergedData });

  } catch (err) {
    console.error('[IndexedDbService] updateTranslations failed:', err);
    throw err;
  }
}

  async clear(): Promise<void> {
    try {
      const db = await this.openDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(this.STORE_NAME, 'readwrite');
        tx.objectStore(this.STORE_NAME).clear();
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } catch (err) {
      console.error('[IndexedDbService] clear failed:', err);
      throw err;
    }
  }
}