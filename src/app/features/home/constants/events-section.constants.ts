import { SECTION_TITLE_ICON_SVG } from '@app/shared';

/**
 * Raw SVG markup extracted from `events-section.html`.
 * Kept as plain strings; the component trusts them via `DomSanitizer`
 * before binding with `[innerHTML]`.
 */
export const EVENTS_SECTION_ICONS = {
  subtitleIcon: SECTION_TITLE_ICON_SVG,

  imageDecoration: `<svg class="events__image-decoration-svg" viewBox="0 0 266 266" xmlns="http://www.w3.org/2000/svg"><path d="M8 258V8H170V90H258V258H8Z" fill="none" stroke="#ff5a45" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
} as const;
