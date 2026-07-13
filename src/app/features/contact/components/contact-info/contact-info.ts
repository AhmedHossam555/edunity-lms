import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CONTACT_CONFIG, SOCIAL_LINKS } from '../../configs';
import { safeSvg } from '@shared/utils/svg.util';
import {
  FACEBOOK_SVG,
  INSTAGRAM_SVG,
  PINTEREST_SVG,
  TWITTER_SVG,
} from '@shared/constants/social-icons.constants';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss',
})
export class ContactInfo {
  config = CONTACT_CONFIG;
  socials = SOCIAL_LINKS;

  // Map social platform names to their SVG constants
  private socialSvgs: { [key: string]: string } = {
    facebook: FACEBOOK_SVG,
    instagram: INSTAGRAM_SVG,
    pinterest: PINTEREST_SVG,
    twitter: TWITTER_SVG,
  };

  constructor(public sanitizer: DomSanitizer) {}

  getSocialSvg(platform: string): string {
    return this.socialSvgs[platform] || '';
  }

  getSocialSvgSafe(platform: string): SafeHtml {
    return safeSvg(this.sanitizer, this.getSocialSvg(platform));
  }
}
