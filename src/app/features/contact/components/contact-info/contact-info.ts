import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { CONTACT_CONFIG, SOCIAL_LINKS } from '../../configs/contact.config';
import { IContactInfo, ISocialLink } from '../../interfaces';

import {
  ADDRESS_ICON,
  EMAIL_ICON,
  PHONE_ICON,
  SOCIAL_SVG_MAP,
} from '@app/shared';

import { safeSvg } from '@shared/utils/svg.util';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.html',
  styleUrls: ['./contact-info.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfo {
  // ─────────────────────────────────────────────────────────────
  // Signals
  // ─────────────────────────────────────────────────────────────

  protected readonly config = signal<IContactInfo>(CONTACT_CONFIG);
  protected readonly socials = signal<ISocialLink[]>(SOCIAL_LINKS);

  // ─────────────────────────────────────────────────────────────
  // Contact Icons
  // ─────────────────────────────────────────────────────────────

  protected readonly addressIconSafe: SafeHtml;
  protected readonly phoneIconSafe: SafeHtml;
  protected readonly emailIconSafe: SafeHtml;

  // ─────────────────────────────────────────────────────────────
  // Private Properties
  // ─────────────────────────────────────────────────────────────

  private readonly socialSvgs: Readonly<Record<string, string>> = SOCIAL_SVG_MAP;

  // ─────────────────────────────────────────────────────────────
  // Constructor
  // ─────────────────────────────────────────────────────────────

   constructor(private readonly sanitizer: DomSanitizer) {
    this.addressIconSafe = safeSvg(this.sanitizer, ADDRESS_ICON);
    this.phoneIconSafe = safeSvg(this.sanitizer, PHONE_ICON);
    this.emailIconSafe = safeSvg(this.sanitizer, EMAIL_ICON);
  }

  // ─────────────────────────────────────────────────────────────
  // protected Methods
  // ─────────────────────────────────────────────────────────────

  protected getSocialSvg(platform: string): string {
    return this.socialSvgs[platform] ?? '';
  }

  protected getSocialSvgSafe(platform: string): SafeHtml {
    return safeSvg(this.sanitizer, this.getSocialSvg(platform));
  }
}