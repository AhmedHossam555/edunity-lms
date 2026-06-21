// ─────────────────────────────────────────────────────────────
// Footer Types
// ─────────────────────────────────────────────────────────────

export interface FooterLink {
  readonly label: string;
  readonly url: string;
}

export interface FooterGalleryItem {
  readonly image: string;
  readonly alt: string;
}

export interface FooterContact {
  readonly address: string;
  readonly phone: string;
  readonly email: string;
}

export interface FooterSocialLink {
  readonly platform: SocialPlatform;
  readonly url: string;
  readonly ariaLabel: string;
}

export enum SocialPlatform {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Pinterest = 'pinterest',
  Twitter = 'twitter',
  Linkedin = 'linkedin',
  Youtube = 'youtube'
}

export interface FooterI18n {
  readonly servicesTitle: string;
  readonly galleryTitle: string;
  readonly subscribeTitle: string;
  readonly subscribePlaceholder: string;
  readonly subscribeButton: string;
  readonly copyright: string;
}

export interface FooterConfig {
  readonly contact: FooterContact;
  readonly description: string;
  readonly services: readonly FooterLink[];
  readonly socials: readonly FooterSocialLink[];
  readonly gallery: readonly FooterGalleryItem[];
}

// ─────────────────────────────────────────────────────────────
// Footer Content
// ─────────────────────────────────────────────────────────────

export const FOOTER_CONFIG: FooterConfig = {
  contact: {
    address: '1925 Boggess Street',
    phone: '(00) 875 784 568',
    email: 'info@gmail.com'
  },

  description:
    'Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.',

  services: [
    {
      label: 'Web Development',
      url: '/services/web-development'
    },
    {
      label: 'UI/UX Design',
      url: '/services/ui-ux-design'
    },
    {
      label: 'Management',
      url: '/services/management'
    },
    {
      label: 'Digital Marketing',
      url: '/services/digital-marketing'
    },
    {
      label: 'Blog News',
      url: '/blog'
    }
  ],

  socials: [
    {
      platform: SocialPlatform.Facebook,
      url: '#',
      ariaLabel: 'Facebook'
    },
    {
      platform: SocialPlatform.Instagram,
      url: '#',
      ariaLabel: 'Instagram'
    },
    {
      platform: SocialPlatform.Pinterest,
      url: '#',
      ariaLabel: 'Pinterest'
    },
    {
      platform: SocialPlatform.Twitter,
      url: '#',
      ariaLabel: 'Twitter'
    }
  ],

  gallery: [
    {
      image: 'gallery-academic-consultation',
      alt: 'Academic consultation'
    },
    {
      image: 'gallery-campus-life',
      alt: 'Campus life'
    },
    {
      image: 'gallery-group-study-session',
      alt: 'Study session'
    },
    {
      image: 'gallery-independent-research',
      alt: 'Research'
    },
    {
      image: 'gallery-online-learning',
      alt: 'Online learning'
    },
    {
      image: 'gallery-student-collaboration',
      alt: 'Student collaboration'
    }
  ]
};

export const FOOTER_I18N: FooterI18n = {
  servicesTitle: 'Our Services',
  galleryTitle: 'Gallery',
  subscribeTitle: 'Subscribe',
  subscribePlaceholder: 'Enter your email',
  subscribeButton: 'SUBSCRIBE NOW',
  copyright: 'All Rights Reserved'
};