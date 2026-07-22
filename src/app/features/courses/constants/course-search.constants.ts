import { ICourseSearchIcons } from "../interfaces";

export const COURSE_SEARCH_SVG: ICourseSearchIcons = {
  search: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    width: 20,
    height: 20,
    paths: [
      'M11 11m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0',
      'M21 21L16.65 16.65',
    ],
  },
  clear: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    width: 18,
    height: 18,
    paths: [
      'M18 6L6 18',
      'M6 6L18 18',
    ],
  },
} as const;