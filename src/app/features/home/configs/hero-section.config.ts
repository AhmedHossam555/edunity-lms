import { HeroCardPosition, HeroDotPosition, HeroStudentSize } from '../enums';
import { IHeroSectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Hero Section Configuration
// ─────────────────────────────────────────────────────────────

/**
 * Single source of truth for all Hero section copy & assets.
 * Update this file to change content without touching the template.
 */
export const HERO_CONFIG: IHeroSectionConfig = {
  // ─────────────────────────────────────────────────────────────
  // Content
  // ─────────────────────────────────────────────────────────────

  content: {
    badgeText: 'Learn & Get Certificates',
    title: 'Free Online Courses With Certificates & Diplomas',
    subtitle: '25 Million Learners. 15 Years. 100% Online.',

    search: {
      placeholder: 'What do you want to learn today?',
      ariaLabel: 'Search courses',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Visual Assets
  // ─────────────────────────────────────────────────────────────

  visual: {
    // ─────────────────────────────────────────────────────────────
    // Student Images
    // ─────────────────────────────────────────────────────────────

    students: [
      {
        size: HeroStudentSize.Small,
        src: '/assets/images/home/hero-section/images/happy-student-with-notebooks.webp',
        alt: 'Student',
      },
      {
        size: HeroStudentSize.Large,
        src: '/assets/images/home/hero-section/images/student-success-character.webp',
        alt: 'Student',
      },
    ],

    // ─────────────────────────────────────────────────────────────
    // Statistic Cards
    // ─────────────────────────────────────────────────────────────

    cards: [
      {
        position: HeroCardPosition.Top,
        title: '2k+',
        subtitle: 'Student',
      },
      {
        position: HeroCardPosition.Bottom,
        title: '5.8k',
        subtitle: 'Success Courses',
      },
    ],

    // ─────────────────────────────────────────────────────────────
    // Decorative Dots
    // ─────────────────────────────────────────────────────────────

    dots: [
      { position: HeroDotPosition.One },
      { position: HeroDotPosition.Two },
      { position: HeroDotPosition.Three },
    ],
  },
};