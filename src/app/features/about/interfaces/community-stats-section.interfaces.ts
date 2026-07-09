import { StatIconKey } from '../enums';

// ─────────────────────────────────────────────────────────────
// Statistics
// ─────────────────────────────────────────────────────────────

/** A single stat displayed in the orange statistics banner. */
export interface IStatItem {
  readonly id: StatIconKey;
  readonly value: string;
  readonly label: string;
}

// ─────────────────────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────────────────────

/** Author information displayed below a testimonial quote. */
export interface ITestimonialAuthor {
  readonly name: string;
  readonly role: string;
}

/** A single testimonial card. */
export interface ITestimonial {
  readonly id: string;
  readonly reviewText: string;
  readonly author: ITestimonialAuthor;
}

// ─────────────────────────────────────────────────────────────
// Section Header
// ─────────────────────────────────────────────────────────────

/** Header displayed above the testimonials grid. */
export interface ISectionHeader {
  readonly tag: string;

  /** Each entry renders on its own line (mirrors the original <br />). */
  readonly titleLines: readonly string[];
}

// ─────────────────────────────────────────────────────────────
// Community Stats Section Configuration
// ─────────────────────────────────────────────────────────────

/** Root configuration for the Community Stats and Testimonials section. */
export interface ICommunityStatsConfig {
  readonly stats: readonly IStatItem[];
  readonly testimonialsHeader: ISectionHeader;
  readonly testimonials: readonly ITestimonial[];
}