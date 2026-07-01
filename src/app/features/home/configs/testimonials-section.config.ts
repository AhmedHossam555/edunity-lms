import { TestimonialsAssetPath } from '../enums';
import { ITestimonialsSectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
//  Testimonials Section Configuration
// ─────────────────────────────────────────────────────────────
//
// Single source of truth for the testimonials section content.
// Extracted from the original static template — no behavior/markup change.
//

export const TESTIMONIALS_SECTION_CONFIG: ITestimonialsSectionConfig = {
  marquee: {
    text: 'online school',
    separator: '✺',
    repeat: 6,
  },

  image: {
    src: TestimonialsAssetPath.HeroImage,
    alt: 'Woman working on a laptop surrounded by a bookshelf',
  },

  testimonial: {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip.`,

    author: {
      name: 'Gloria Burnett',
      role: 'Software Developer',
      avatarUrl: TestimonialsAssetPath.AvatarImage,
    },
  },

  dots: {
    total: 3,
    activeIndex: 0,
  },
};
