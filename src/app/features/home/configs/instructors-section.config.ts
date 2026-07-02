import { EInstructorRole } from "../enums";
import { IInstructor, IInstructorsSectionContent } from "../interfaces";

// ─────────────────────────────────────────────────────────────
// Instructors Data
// ─────────────────────────────────────────────────────────────

/** Static instructors data (was hard-coded per <article> in the HTML). */
export const INSTRUCTORS: readonly IInstructor[] = [
  {
    id: 1,
    name: 'Nathan Allen',
    role: EInstructorRole.Teacher,
    image: '/assets/images/home/instructors-section/images/nathan-allen.webp',
    alt: 'Nathan Allen',
  },
  {
    id: 2,
    name: 'Esther Boyd',
    role: EInstructorRole.Teacher,
    image: '/assets/images/home/instructors-section/images/esther-boyd.webp',
    alt: 'Esther Boyd',
  },
  {
    id: 3,
    name: 'Jamie Keller',
    role: EInstructorRole.Teacher,
    image: '/assets/images/home/instructors-section/images/jamie-keller.webp',
    alt: 'Jamie Keller',
  },
  {
    id: 4,
    name: 'Jesus Pendley',
    role: EInstructorRole.Teacher,
    image: '/assets/images/home/instructors-section/images/jesus-pendley.webp',
    alt: 'Jesus Pendley',
  },
] as const;

// ─────────────────────────────────────────────────────────────
// Section Content
// ─────────────────────────────────────────────────────────────

export const INSTRUCTORS_SECTION_CONTENT: IInstructorsSectionContent = {
  subtitle: 'Teacher',
  title: 'Meet Our Expert Instructor',
};