import { EInstructorRole } from "../enums";

// ─────────────────────────────────────────────────────────────
// Instructor
// ─────────────────────────────────────────────────────────────

/** Single instructor card shape. */
export interface IInstructor {
  id: number;
  name: string;
  role: EInstructorRole;
  image: string;
  alt: string;
}

// ─────────────────────────────────────────────────────────────
// Section Content
// ─────────────────────────────────────────────────────────────

/** Section copy (was inline text in the HTML). */
export interface IInstructorsSectionContent {
  subtitle: string;
  title: string;
}