import { SafeHtml } from '@angular/platform-browser';

// ─────────────────────────────────────────────────────────────
// Feature Card Interfaces
// ─────────────────────────────────────────────────────────────

/**
 * Raw configuration model representing a single feature card.
 * Interface name starts with `I` per project convention.
 */
export interface IFeatureCardItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}

/**
 * View model representing a feature card with sanitized SVG icons.
 */
export interface IFeatureCardItemViewModel {
  id: number;
  icon: SafeHtml;
  title: string;
  description: string;
  buttonText: string;
}

// ─────────────────────────────────────────────────────────────
// Feature Section Interface
// ─────────────────────────────────────────────────────────────

/**
 * Static configuration model for the Feature Section,
 * including the heading content and feature cards.
 */
export interface IFeatureSectionConfig {
  subtitleIcon: string;
  subtitleText: string;
  titleLine1: string;
  titleLine2: string;
  cards: IFeatureCardItem[];
}