import { EVENTS_SECTION_ICONS } from '../constants';
import { EventsSectionAsset } from '../enums';
import { IEventsSectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Events Section Configuration
// ─────────────────────────────────────────────────────────────

/**
 * Single source of truth for the Events section content.
 * Extracted from `events-section.html` so the template stays presentation-only.
 */
export const EVENTS_SECTION_CONFIG: IEventsSectionConfig = {
  content: {
    subtitle: {
      icon: EVENTS_SECTION_ICONS.subtitleIcon,
      text: 'Explore Events',
    },

    title: 'Our Best Upcoming Events',

    intro:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',

    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    buttonText: 'Get Ticket Now',
  },

  media: {
    imageSrc: EventsSectionAsset.StudentsImage,
    imageAlt: 'Students',
  },
};