

/** A single "Courses / Rating / Students" style stat block. */
export interface IInstructorStat {
  value: string;
  label: string;
}

/** Supported social platforms shown in the instructor social links list. */
export enum ESocialPlatform {
  GitHub = 'github',
  Twitter = 'twitter',
  LinkedIn = 'linkedin',
}

/** A single social link entry (icon is resolved via `platform`). */
export interface IInstructorSocialLink {
  platform: ESocialPlatform;
  url: string;
  label: string;
}

/** A single "other course by this instructor" card. */
export interface IInstructorOtherCourse {
  title: string;
  rating: number;
  studentsCount: number;
}