import { Injectable, inject } from '@angular/core';
import { LanguageManagerService } from './language-manager.service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly languageManagerService = inject(LanguageManagerService);
  getCurrentLanguage(): string {
    return this.languageManagerService.currentLanguage();
  }
}
