import { ExamCardVariant } from '../enums';
import {
  IExamHeader,
  IExamCard,
} from '../interfaces';

// ─────────────────────────────────────────────────────────────
//  Header configuration
// ─────────────────────────────────────────────────────────────

/**
 * All header copy for the Exam Preparation section, pulled out of the template.
 */
export const EXAM_HEADER_CONFIG: IExamHeader = {
  subtitle: 'Exam Preparation',
  title: 'Annual Exam Preparation',
};

// ─────────────────────────────────────────────────────────────
//  Cards configuration
// ─────────────────────────────────────────────────────────────

/**
 * All card data for the Exam Preparation section, pulled out of the template.
 * Add/remove entries here instead of duplicating markup in the HTML.
 */
export const EXAM_CARDS_CONFIG: IExamCard[] = [
  {
    variant: ExamCardVariant.Dark,
    smallText: 'Start From Today',
    heading: 'Join Our Training Courses &<br />Build Your Skill.',
    image:
      '/assets/images/home/exam-preparation-section/images/instructor-woman.png',
    imageAlt: 'Student',
    button: {
      text: 'Join Now',
    },
  },
  {
    variant: ExamCardVariant.Green,
    smallText: 'Start From Today',
    heading: 'Join Our Training Courses &<br />Build Your Skill.',
    image:
      '/assets/images/home/exam-preparation-section/images/instructor-man.png',
    imageAlt: 'Student',
    button: {
      text: 'Join Now',
      background: '#17254E',
      backgroundIcon: '#1F3061',
    },
  },
];