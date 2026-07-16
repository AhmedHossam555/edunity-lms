import { SocialPlatform, TopBarIconId } from '../enums';
import { IHeaderConfig } from '../interfaces';
import { NAVBAR } from './navbar.config';

// ─────────────────────────────────────────────────────────────
//  Header Configuration
// ─────────────────────────────────────────────────────────────

export const HEADER_CONFIG: IHeaderConfig = {
  // ─────────────────────────────────────────────────────────────
  //  Logo
  // ─────────────────────────────────────────────────────────────
  logo: {
    src: '/assets/images/logos/white/edunity-logo/edunity-logo.svg',
    alt: 'Edunity',
    width: 237,
    height: 54,
    href: '#',
  },

  // ─────────────────────────────────────────────────────────────
  //  Top Bar
  // ─────────────────────────────────────────────────────────────
  topBar: {
    // ─────────────────────────────────────────────────────────────
    //  Contact / Information Items
    // ─────────────────────────────────────────────────────────────
    infoItems: [
      {
        id: TopBarIconId.Clock,
        iconKey: TopBarIconId.Clock,
        label: 'Working : Monday - Friday, 9:00 AM - 5:00 PM',
        clickType: 'none', // Not clickable
      },
      {
        id: TopBarIconId.Location,
        iconKey: TopBarIconId.Location,
        label: 'Hudson, Wisconsin(WI), 54016',
        href: 'https://www.google.com/maps/search/?api=1&query=Hudson+Wisconsin+54016', // Google Maps link
        clickType: 'location', // Clickable
      },
    ],

    // ─────────────────────────────────────────────────────────────
    //  Authentication Link
    // ─────────────────────────────────────────────────────────────
    loginLink: {
      label: 'Login / Register',
      href: '#',
      externalRef:
        'https://www.figma.com/design/5NFuduWyIWOjRg87SYmccq/CourseHub---University--Online-Courses--School---Education-Figma-Template--Community-?node-id=6-1519',
    },

    // ─────────────────────────────────────────────────────────────
    //  Social Media Links
    // ─────────────────────────────────────────────────────────────
    socials: [
      {
        platform: SocialPlatform.Facebook,
        href: '#',
        ariaLabel: 'Facebook',
      },
      {
        platform: SocialPlatform.Twitter,
        href: '#',
        ariaLabel: 'Twitter',
      },
      {
        platform: SocialPlatform.Instagram,
        href: '#',
        ariaLabel: 'Instagram',
      },
      {
        platform: SocialPlatform.LinkedIn,
        href: '#',
        ariaLabel: 'LinkedIn',
        externalRef: 'https://www.figma.com/design/Nx4sNsAeWJfmVVOXuDSmxJ?node-id=2-828',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  Navigation Bar
  // ─────────────────────────────────────────────────────────────
  navbar: NAVBAR,
};
