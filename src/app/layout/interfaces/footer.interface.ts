import { SocialPlatform } from '../enums';

// ─────────────────────────────────────────────────────────────
// Footer Links
// ─────────────────────────────────────────────────────────────
export interface IFooterLink {
  readonly label: string;
  readonly url: string;
}

// ─────────────────────────────────────────────────────────────
// Footer Gallery
// ─────────────────────────────────────────────────────────────
export interface IFooterGalleryItem {
  readonly image: string;
  readonly alt: string;
}

// ─────────────────────────────────────────────────────────────
// Footer Contact
// ─────────────────────────────────────────────────────────────
export interface IFooterContactItem {
  readonly label: string;
  readonly value: string;
  readonly type: 'address' | 'phone' | 'email';
}

export interface IFooterContact {
  readonly items: readonly IFooterContactItem[];
}

// ─────────────────────────────────────────────────────────────
// Footer Social Links
// ─────────────────────────────────────────────────────────────
export interface IFooterSocialLink {
  readonly platform: SocialPlatform;
  readonly url: string;
  readonly ariaLabel: string;
  readonly svg: string;
}

// ─────────────────────────────────────────────────────────────
// Footer Internationalization
// ─────────────────────────────────────────────────────────────
export interface IFooterI18n {
  readonly servicesTitle: string;
  readonly galleryTitle: string;
  readonly subscribeTitle: string;
  readonly subscribePlaceholder: string;
  readonly subscribeButton: string;
  readonly copyright: string;
  readonly addressLabel: string;
  readonly phoneLabel: string;
  readonly emailLabel: string;
  readonly brandName: string;
}

// ─────────────────────────────────────────────────────────────
// Footer Configuration
// ─────────────────────────────────────────────────────────────
export interface IFooterConfig {
  readonly contact: IFooterContact;
  readonly description: string;
  readonly services: readonly IFooterLink[];
  readonly socials: readonly IFooterSocialLink[];
  readonly gallery: readonly IFooterGalleryItem[];
  readonly logo: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
  readonly copyrightYear: number;
}
