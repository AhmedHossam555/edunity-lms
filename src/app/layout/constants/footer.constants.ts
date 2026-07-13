// ─────────────────────────────────────────────────────────────
// Footer SVG Icons Constants
// ─────────────────────────────────────────────────────────────

import { FACEBOOK_SVG, INSTAGRAM_SVG, PINTEREST_SVG, TWITTER_SVG } from "@app/shared";

export const FOOTER_SVGS = {
  // ── Contact Icons ──────────────────────────────────────────

  /** Location/Address icon */
  address: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.5"
      height="25"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
      />
    </svg>
  `,

  /** Phone icon */
  phone: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
      />
    </svg>
  `,

  /** Email icon */
  email: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 16 14"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h16v14H0z" fill="none" />
      <path
        fill="currentColor"
        d="M14.5 13h-13C.67 13 0 12.33 0 11.5v-9C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5z"
      />
      <path
        fill="currentColor"
        d="M8 8.96c-.7 0-1.34-.28-1.82-.79L.93 2.59c-.19-.2-.18-.52.02-.71s.52-.18.71.02l5.25 5.58c.57.61 1.61.61 2.18 0l5.25-5.57c.19-.2.51-.21.71-.02s.21.51.02.71L9.82 8.18c-.48.51-1.12.79-1.82.79Z"
      />
    </svg>
  `,

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