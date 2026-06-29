import { AboutImageKey } from '../enums';

// ─────────────────────────────────────────────────────────────
// Gallery
// ─────────────────────────────────────────────────────────────

/** A single image asset used in the About section gallery. */
export interface IAboutImage {
  key: AboutImageKey;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// ─────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────

/** A single feature block (e.g. Mission or Vision). */
export interface IAboutFeature {
  title: string;
  text: string;
}

/** Call-to-action button configuration. */
export interface IAboutCta {
  text: string;
}

// ─────────────────────────────────────────────────────────────
// Section Configuration
// ─────────────────────────────────────────────────────────────

/** Complete configuration contract for the About section. */
export interface IAboutConfig {
  tagText: string;
  title: string;
  titleHighlight: string;
  description: string;
  images: Record<AboutImageKey, IAboutImage>;
  features: IAboutFeature[];
  cta: IAboutCta;
}