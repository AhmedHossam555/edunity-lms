import {
  SPARKLE_ICON_SVG,
  FEATURE_CARD_ICON_SVG_ONE,
  FEATURE_CARD_ICON_SVG_TWO,
  FEATURE_CARD_ICON_SVG_THREE,
  FEATURE_CARD_ICON_SVG_FOUR,
} from '../constants';
import { IFeatureSectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// Shared Constants
// ─────────────────────────────────────────────────────────────

/** Default description reused across all feature cards. */
const DEFAULT_FEATURE_DESCRIPTION =
  'In pellentesque massa vitae placerat duis. Ornare sit amet dictum sit amet.';

// ─────────────────────────────────────────────────────────────
// Feature Section Configuration
// ─────────────────────────────────────────────────────────────

/** Static configuration driving the Feature Section UI. */
export const FEATURE_SECTION_CONFIG: IFeatureSectionConfig = {
  subtitleIcon: SPARKLE_ICON_SVG,
  subtitleText: 'Edunity Feature',

  titleLine1: 'Check out educate features',
  titleLine2: 'win any exam',

  cards: [
    {
      id: 1,
      icon: FEATURE_CARD_ICON_SVG_ONE,
      title: 'Best Coaching',
      description: DEFAULT_FEATURE_DESCRIPTION,
      buttonText: 'View Details',
    },
    {
      id: 2,
      icon: FEATURE_CARD_ICON_SVG_TWO,
      title: 'Best Coaching',
      description: DEFAULT_FEATURE_DESCRIPTION,
      buttonText: 'View Details',
    },
    {
      id: 3,
      icon: FEATURE_CARD_ICON_SVG_THREE,
      title: 'Best Coaching',
      description: DEFAULT_FEATURE_DESCRIPTION,
      buttonText: 'View Details',
    },
    {
      id: 4,
      icon: FEATURE_CARD_ICON_SVG_FOUR,
      title: 'Best Coaching',
      description: DEFAULT_FEATURE_DESCRIPTION,
      buttonText: 'View Details',
    },
  ],
};