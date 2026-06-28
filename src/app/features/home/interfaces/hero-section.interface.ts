import { HeroCardPosition, HeroDotPosition, HeroStudentSize } from '../enums';

// ─────────────────────────────────────────────────────────────
// Hero Student Image
// ─────────────────────────────────────────────────────────────

export interface IHeroStudentImage {
  size: HeroStudentSize;
  src: string;
  alt: string;
}

// ─────────────────────────────────────────────────────────────
// Hero Statistic Card
// ─────────────────────────────────────────────────────────────

export interface IHeroStatCard {
  position: HeroCardPosition;
  title: string;
  subtitle: string;
}

// ─────────────────────────────────────────────────────────────
// Hero Decorative Dot
// ─────────────────────────────────────────────────────────────

export interface IHeroDot {
  position: HeroDotPosition;
}

// ─────────────────────────────────────────────────────────────
// Hero Search Configuration
// ─────────────────────────────────────────────────────────────

export interface IHeroSearchConfig {
  placeholder: string;
  ariaLabel: string;
}

// ─────────────────────────────────────────────────────────────
// Hero Content
// ─────────────────────────────────────────────────────────────

export interface IHeroContent {
  badgeText: string;
  title: string;
  subtitle: string;
  search: IHeroSearchConfig;
}

// ─────────────────────────────────────────────────────────────
// Hero Visual Configuration
// ─────────────────────────────────────────────────────────────

export interface IHeroVisualConfig {
  students: IHeroStudentImage[];
  cards: IHeroStatCard[];
  dots: IHeroDot[];
}

// ─────────────────────────────────────────────────────────────
// Hero Section Configuration
// ─────────────────────────────────────────────────────────────

export interface IHeroSectionConfig {
  content: IHeroContent;
  visual: IHeroVisualConfig;
}