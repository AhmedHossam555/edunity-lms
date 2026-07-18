import { CourseCategory, CourseLevel } from "../enums";

export interface ICourseFilter {
  search: string;

  category: CourseCategory | null;

  level: CourseLevel | null;

  isFree: boolean | null;

  minRating: number | null;

  sortBy: string;
}