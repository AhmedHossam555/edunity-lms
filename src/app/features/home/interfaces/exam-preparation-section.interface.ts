import { ExamCardVariant } from '../enums/exam-preparation-section.enum';

// ─────────────────────────────────────────────────────────────
//  Interfaces
// ─────────────────────────────────────────────────────────────

/**
 * Enums and interfaces for the Exam Preparation section.
 * Interfaces follow the `I`-prefix naming convention.
 */

export interface IExamCardButton {
  text: string;
  background?: string;
  backgroundIcon?: string;
}

export interface IExamCard {
  variant: ExamCardVariant;
  smallText: string;

  /** May contain inline markup (e.g. <br />) preserved from the original template. */
  heading: string;

  image: string;
  imageAlt: string;
  button: IExamCardButton;
}

export interface IExamHeader {
  subtitle: string;
  title: string;
}