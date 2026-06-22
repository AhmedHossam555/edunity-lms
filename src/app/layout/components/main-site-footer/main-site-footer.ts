import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {
  FOOTER_CONFIG,
  FOOTER_I18N,
} from '@app/layout/configs';
import { IFooterContactItem } from '@app/layout/interfaces';

@Component({
  selector: 'app-main-site-footer',
  imports: [],
  templateUrl: './main-site-footer.html',
  styleUrl: './main-site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSiteFooter {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────────────────────

  protected readonly config = signal(FOOTER_CONFIG).asReadonly();

  protected readonly i18n = signal(FOOTER_I18N).asReadonly();

  protected readonly socials = signal(
    FOOTER_CONFIG.socials.map((item) => ({
      ...item,
      svg: this.sanitizer.bypassSecurityTrustHtml(item.svg),
    })),
  ).asReadonly();

  protected readonly currentYear = signal(
    FOOTER_CONFIG.copyrightYear,
  ).asReadonly();

  // ─────────────────────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────────────────────

  protected getContactLink(item: IFooterContactItem): string {
    switch (item.type) {
      case 'phone':
        return `tel:${item.value.replace(/\s/g, '')}`;

      case 'email':
        return `mailto:${item.value}`;

      case 'address':
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          item.value,
        )}`;

      default:
        return '#';
    }
  }
}