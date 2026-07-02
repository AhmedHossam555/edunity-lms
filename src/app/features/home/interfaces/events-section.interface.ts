import { EventsSectionAsset } from '../enums';

// ─────────────────────────────────────────────────────────────
// Events Section Interfaces
// ─────────────────────────────────────────────────────────────

/**
 * Enums and interfaces extracted from `events-section.html`.
 * Interface names follow the `Ixxxx` convention.
 */

// ─────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────

/** Subtitle block displayed above the section title. */
export interface IEventsSectionSubtitle {
  icon: string;
  text: string;
}

/** Text content rendered within the `events__content` block. */
export interface IEventsSectionContent {
  subtitle: IEventsSectionSubtitle;
  title: string;
  intro: string;
  description: string;
  buttonText: string;
}

// ─────────────────────────────────────────────────────────────
// Media
// ─────────────────────────────────────────────────────────────

/** Media content rendered within the `events__media` block. */
export interface IEventsSectionMedia {
  imageSrc: EventsSectionAsset | string;
  imageAlt: string;
}

// ─────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────

/** Complete configuration consumed by the `EventsSection` component. */
export interface IEventsSectionConfig {
  content: IEventsSectionContent;
  media: IEventsSectionMedia;
}