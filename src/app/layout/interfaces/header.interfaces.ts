import { NavLinkId, SocialPlatform, TopBarIconId } from "../enums";

// ─────────────────────────────────────────────────────────────
//  Top Bar Interfaces
// ─────────────────────────────────────────────────────────────

export interface ITopBarInfoItem {
  id: TopBarIconId;
  iconKey: TopBarIconId;
  label: string;
  /** Optional URL for location links or other clickable items */
  href?: string;
  /** Optional click handler type */
  clickType?: 'location' | 'none';
}

export interface ILoginLink {
  label: string;
  href: string;

  /** Optional external reference link embedded in the original markup (e.g. Figma) */
  externalRef?: string;
}

export interface IRegisterLink {
  label: string;
  href: string;
}

export interface ISocialLink {
  platform: SocialPlatform;
  href: string;
  ariaLabel: string;
  externalRef?: string;
}

// ─────────────────────────────────────────────────────────────
//  Navigation Interfaces
// ─────────────────────────────────────────────────────────────

export interface INavLink {
  id: NavLinkId;
  label: string;
  href: string;
  active?: boolean;
}

export interface IContactButton {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────────────────────
//  Header Configuration Interface
// ─────────────────────────────────────────────────────────────

export interface IHeaderConfig {

  // ─────────────────────────────────────────────────────────────
  //  Logo
  // ─────────────────────────────────────────────────────────────
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
  };

  // ─────────────────────────────────────────────────────────────
  //  Top Bar
  // ─────────────────────────────────────────────────────────────
  topBar: {
    infoItems: ITopBarInfoItem[];
    loginLink: ILoginLink;
    registerLink: IRegisterLink; // Added register link
    socials: ISocialLink[];
  };

  // ─────────────────────────────────────────────────────────────
  //  Navigation Bar
  // ─────────────────────────────────────────────────────────────
  navbar: {
    links: INavLink[];
    contactButton: IContactButton;
  };
}