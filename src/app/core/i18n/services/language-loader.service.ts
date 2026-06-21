// core/i18n/services/language-loader.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageLoaderService {
  private readonly _isLoading = signal(false);
  readonly isLoading = this._isLoading.asReadonly();

  show(): void  { this._isLoading.set(true);  }
  hide(): void  { this._isLoading.set(false); }
}