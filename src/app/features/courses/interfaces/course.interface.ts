import { CourseCategory, CourseLevel } from "../enums";

export interface IInstructor {
  readonly id: string;
  readonly name: string;
  readonly avatar: string;
  readonly title: string;
  readonly bio: string;
}
export interface ICourse {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly thumbnail: string;

  readonly category: CourseCategory;
  readonly level: CourseLevel;

  readonly duration: number;

  readonly instructor: IInstructor;

  readonly rating: number;
  readonly totalStudents: number;

  readonly price: number;
  readonly isFree: boolean;

  readonly createdAt: Date;
}
