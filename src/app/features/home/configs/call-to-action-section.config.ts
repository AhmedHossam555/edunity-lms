import { CtaButtonVariant, CtaWatchLabel } from '../enums';
import { ICtaSectionConfig } from '../interfaces';

// ─────────────────────────────────────────────────────────────
// CTA Section Configuration
// ─────────────────────────────────────────────────────────────

export const CALL_TO_ACTION_SECTION_CONFIG: ICtaSectionConfig = {
  subtitle: 'Join Our New Session',

  title: 'Call To Enroll Your Child',

  phoneNumber: '(+91)958423452',

  button: {
    text: 'Join With Us',
    variant: CtaButtonVariant.Primary,
  },

  watchLabel: CtaWatchLabel.WatchNow,
};