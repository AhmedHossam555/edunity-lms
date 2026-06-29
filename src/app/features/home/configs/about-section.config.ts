import { AboutImageKey } from '../enums';
import { IAboutConfig } from '../interfaces';

/**
 * Default content for the About section.
 * Swap this out (or inject a different config) to change copy/images
 * without touching the component or template.
 */
export const ABOUT_SECTION_CONFIG: IAboutConfig = {
  // ─────────────────────────────────────────────────────────────
  // Header
  // ─────────────────────────────────────────────────────────────

  tagText: 'ABOUT US',
  title: 'Benefit From Our Online Learning Expertise Earn',
  titleHighlight: 'Professional',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',

  // ─────────────────────────────────────────────────────────────
  // Images
  // ─────────────────────────────────────────────────────────────

  images: {
    [AboutImageKey.StarBurstDecor]: {
      key: AboutImageKey.StarBurstDecor,
      src: '/assets/images/home/about-section/images/star-burst-decor.svg',
      alt: 'Student',
      width: 77,
      height: 80,
    },
    [AboutImageKey.StudentProfile]: {
      key: AboutImageKey.StudentProfile,
      src: '/assets/images/home/about-section/images/student-profile-about.webp',
      alt: 'Student',
      width: 230,
      height: 500,
    },
    [AboutImageKey.ExperienceBadge]: {
      key: AboutImageKey.ExperienceBadge,
      src: '/assets/images/home/about-section/images/35-plus-years-experience-badge.webp',
      alt: 'Students',
      width: 240,
      height: 240,
    },
    [AboutImageKey.StudentsCollaborating]: {
      key: AboutImageKey.StudentsCollaborating,
      src: '/assets/images/home/about-section/images/students-collaborating-about.webp',
      alt: 'Students',
      width: 318,
      height: 403.8,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Features
  // ─────────────────────────────────────────────────────────────

  features: [
    {
      title: 'OUR MISSION:',
      text:
        'Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.',
    },
    {
      title: 'OUR VISSION:',
      text:
        'Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.',
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // Call to Action
  // ─────────────────────────────────────────────────────────────

  cta: {
    text: 'Admission Open',
  },
};