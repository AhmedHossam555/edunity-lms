// ─────────────────────────────────────────────────────────────
// Footer SVG Icons Constants
// ─────────────────────────────────────────────────────────────

import { ADDRESS_ICON, EMAIL_ICON, FACEBOOK_SVG, INSTAGRAM_SVG, PHONE_ICON, PINTEREST_SVG, TWITTER_SVG } from "@app/shared";

export const FOOTER_SVGS = {
  // ── Contact Icons ──────────────────────────────────────────

  /** Location/Address icon */
  address:ADDRESS_ICON,

  /** Phone icon */
  phone: PHONE_ICON,

  /** Email icon */
  email: EMAIL_ICON,

  // ── Service List Arrow Icon ───────────────────────────────

  /** Right arrow for service list items */
  serviceArrow: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="16"
      viewBox="0 0 12 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h12v24H0z" fill="none" />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
      />
    </svg>
  `,

  // ── Social Media Icons ─────────────────────────────────────

  /** Facebook icon */
  facebook: FACEBOOK_SVG,

  /** Instagram icon */
  instagram: INSTAGRAM_SVG,

  /** Pinterest icon */
  pinterest: PINTEREST_SVG,

  /** Twitter/X icon */
  twitter: TWITTER_SVG,
} as const;

// ─────────────────────────────────────────────────────────────
// Type Definitions
// ─────────────────────────────────────────────────────────────

export type FooterSvgKey = keyof typeof FOOTER_SVGS;