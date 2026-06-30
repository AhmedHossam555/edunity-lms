/**
 * stats.config.ts
 * All copy/data extracted from the original static HTML, centralized so the
 * component stays presentational. Typed against IStatsContent.
 */

import { StatsProgressKey } from "../enums";
import { IStatsContent } from "../interfaces";

export const STATS_CONTENT: IStatsContent = {
  subtitle: 'OUR STATUS VALUES',
  title: 'Our Classroom Is A Very Different',
  titleHighlight: 'School',
  titleSuffix: 'Than All The Others',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  progressList: [
    {
      key: StatsProgressKey.CaseStudySuccess,
      label: 'Case study success',
      value: 90,
    },
    {
      key: StatsProgressKey.HappyStudent,
      label: 'Happy student',
      value: 75,
    },
    {
      key: StatsProgressKey.Engaging,
      label: 'Engaging',
      value: 89,
    },
    {
      key: StatsProgressKey.StudentCommunity,
      label: 'Student Community',
      value: 85,
    },
  ],
  image: {
    src: '/assets/images/home/stats-section/image/students_on_stairs.webp',
    alt: 'Students',
  },
};