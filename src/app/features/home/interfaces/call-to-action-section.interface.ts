import { CtaButtonVariant } from '../enums';

// ─────────────────────────────────────────────────────────────
// CTA Button Interface
// ─────────────────────────────────────────────────────────────

export interface ICtaButton {
  readonly text: string;
  readonly variant: CtaButtonVariant;
}

// ─────────────────────────────────────────────────────────────
// CTA Section Configuration Interface
// ─────────────────────────────────────────────────────────────

export interface ICtaSectionConfig {
  readonly subtitle: string;
  readonly title: string;
  readonly phoneNumber: string;
  readonly button: ICtaButton;
  readonly watchLabel: string;
}