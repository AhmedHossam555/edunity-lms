import { ICourse } from './course.interface';

export interface ICourseDetails extends ICourse {
  readonly prerequisites: string[];
  readonly objectives: string[];
  readonly syllabus: ISyllabusItem[];
  readonly reviews: IReview[];
  readonly averageRating: number;
  readonly totalReviews: number;
  readonly enrolledStudents: number;
}

export interface ISyllabusItem {
  readonly week: number;
  readonly title: string;
  readonly topics: string[];
  readonly duration: number;
}

export interface IReview {
  readonly id: string;
  readonly userId: string;
  readonly userName: string;
  readonly userAvatar: string;
  readonly rating: number;
  readonly comment: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly helpful: number;
}