/**
 * stats.types.ts
 * Enums and interfaces for the "Stats" section.
 * Interface naming convention: all interfaces are prefixed with `I`.
 */

/** Keys used to identify each progress metric (avoids magic strings in templates/config). */
export enum StatsProgressKey {
  CaseStudySuccess = 'caseStudySuccess',
  HappyStudent = 'happyStudent',
  Engaging = 'engaging',
  StudentCommunity = 'studentCommunity',
}

