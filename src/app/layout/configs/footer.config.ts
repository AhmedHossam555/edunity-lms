// ─────────────────────────────────────────────────────────────
// Footer Content
// ─────────────────────────────────────────────────────────────

import { FOOTER_SVGS } from '../constants';
import { SocialPlatform } from '../enums';
import { IFooterConfig, IFooterI18n } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Footer Configuration
// ─────────────────────────────────────────────────────────────

export const FOOTER_CONFIG: IFooterConfig = {
  // ─────────────────────────────────────────────────────────────
  // Contact Information
  // ─────────────────────────────────────────────────────────────

  contact: {
    items: [
      {
        label: 'Address',
        value: '1925 Boggess Street',
        type: 'address',
      },
      {
        label: 'Phone',
        value: '(00) 875 784 568',
        type: 'phone',
      },
      {
        label: 'Email',
        value: 'info@gmail.com',
        type: 'email',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Description
  // ─────────────────────────────────────────────────────────────

  description:
    'Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.',

  // ─────────────────────────────────────────────────────────────
  // Services
  // ─────────────────────────────────────────────────────────────

  services: [
    {
      label: 'Web Development',
      url: '/services/web-development',
    },
    {
      label: 'UI/UX Design',
      url: '/services/ui-ux-design',
    },
    {
      label: 'Management',
      url: '/services/management',
    },
    {
      label: 'Digital Marketing',
      url: '/services/digital-marketing',
    },
    {
      label: 'Blog News',
      url: '/blog',
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // Social Links
  // ─────────────────────────────────────────────────────────────

  socials: [
    {
      platform: SocialPlatform.Facebook,
      url: '#',
      ariaLabel: 'Facebook',
      svg: FOOTER_SVGS.facebook,
    },
    {
      platform: SocialPlatform.Instagram,
      url: '#',
      ariaLabel: 'Instagram',
      svg: FOOTER_SVGS.instagram,
    },
    {
      platform: SocialPlatform.Pinterest,
      url: '#',
      ariaLabel: 'Pinterest',
      svg: FOOTER_SVGS.pinterest,
    },
    {
      platform: SocialPlatform.Twitter,
      url: '#',
      ariaLabel: 'Twitter',
      svg: FOOTER_SVGS.twitter,
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // Gallery
  // ─────────────────────────────────────────────────────────────

  gallery: [
    {
      image: 'gallery-academic-consultation',
      alt: 'Academic consultation',
    },
    {
      image: 'gallery-campus-life',
      alt: 'Campus life',
    },
    {
      image: 'gallery-group-study-session',
      alt: 'Study session',
    },
    {
      image: 'gallery-independent-research',
      alt: 'Research',
    },
    {
      image: 'gallery-online-learning',
      alt: 'Online learning',
    },
    {
      image: 'gallery-student-collaboration',
      alt: 'Student collaboration',
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // Logo
  // ─────────────────────────────────────────────────────────────

  logo: {
    src: '/assets/images/logos/white/edunity-logo-orange/edunity-logo-orange.svg',
    alt: 'Edunity',
    width: 237,
    height: 54,
  },

  // ─────────────────────────────────────────────────────────────
  // Copyright
  // ─────────────────────────────────────────────────────────────

  copyrightYear: new Date().getFullYear(),
};

// ─────────────────────────────────────────────────────────────
// Footer Localization
// ─────────────────────────────────────────────────────────────

export const FOOTER_I18N: IFooterI18n = {
  servicesTitle: 'Our Services',
  galleryTitle: 'Gallery',
  subscribeTitle: 'Subscribe',
  subscribePlaceholder: 'Enter your email',
  subscribeButton: 'SUBSCRIBE NOW',
  copyright: 'All Rights Reserved',
  addressLabel: 'Address',
  phoneLabel: 'Phone',
  emailLabel: 'Email',
  brandName: 'Edunity',
};