import { IInstructorStat, IInstructorSocialLink, ESocialPlatform, IInstructorOtherCourse } from "../interfaces";


/** Stat blocks rendered under the instructor profile. */
export const INSTRUCTOR_STATS: readonly IInstructorStat[] = [
  { value: '12', label: 'Courses' },
  { value: '4.8', label: 'Rating' },
  { value: '2.5k', label: 'Students' },
];

/** Social links rendered in the instructor social row. */
export const INSTRUCTOR_SOCIAL_LINKS: readonly IInstructorSocialLink[] = [
  { platform: ESocialPlatform.GitHub, url: '#', label: 'GitHub' },
  { platform: ESocialPlatform.Twitter, url: '#', label: 'Twitter' },
  { platform: ESocialPlatform.LinkedIn, url: '#', label: 'LinkedIn' },
];

/** "Other courses by this instructor" cards. */
export const INSTRUCTOR_OTHER_COURSES: readonly IInstructorOtherCourse[] = [
  { title: 'Advanced JavaScript', rating: 4.5, studentsCount: 120 },
  { title: 'React Masterclass', rating: 4.8, studentsCount: 200 },
  { title: 'TypeScript Fundamentals', rating: 4.6, studentsCount: 85 },
];