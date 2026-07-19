import { Gender } from "@app/shared";
import { CourseCategory, CourseLevel } from "../enums";

export interface IInstructor {
  readonly id: string;
  readonly name: string;
  readonly avatar: string;
  readonly title: string;
  readonly bio: string;
  readonly gender?: Gender;
}

export interface IAuthor {
  readonly name: string;
  readonly avatarSrc: string;
  readonly avatarAlt: string;
  readonly category: string;
}

export interface IPrice {
  readonly current: number;
  readonly old: number;
  readonly currency: string;
}

export interface IMeta {
  readonly duration: string;
  readonly lessonCount: number;
  readonly studentCount: number;
  readonly level?: CourseLevel;
}

export interface ICourse {
  // ─────────────────────────────────────────────
  // Core Properties
  // ─────────────────────────────────────────────

  readonly id: string;
  readonly slug?: string;

  readonly title: string;
  readonly description: string;
  readonly thumbnail: string;

  readonly category: CourseCategory;
  readonly level: CourseLevel;

  // ─────────────────────────────────────────────
  // Duration & Timing
  // ─────────────────────────────────────────────

  readonly duration: number; // in hours

  // ─────────────────────────────────────────────
  // Instructor Information
  // ─────────────────────────────────────────────

  readonly instructor: IInstructor;

  // ─────────────────────────────────────────────
  // Rating & Enrollment
  // ─────────────────────────────────────────────

  readonly rating: number;
  readonly ratingLabel?: string;
  readonly totalStudents: number;
  readonly totalReviews?: number;

  // ─────────────────────────────────────────────
  // Pricing
  // ─────────────────────────────────────────────

  readonly price: number;
  readonly oldPrice?: number;
  readonly isFree: boolean;

  // ─────────────────────────────────────────────
  // Badge & Labels
  // ─────────────────────────────────────────────

  readonly badge?: string;
  readonly imageSrc?: string;
  readonly imageAlt?: string;

  // ─────────────────────────────────────────────
  // Featured Card Properties
  // ─────────────────────────────────────────────

  readonly author?: IAuthor;
  readonly meta?: IMeta;
  readonly priceObject?: IPrice;

  // ─────────────────────────────────────────────
  // Additional Metadata
  // ─────────────────────────────────────────────

  readonly totalLessons?: number;
  readonly isInCart?: boolean;
  readonly createdAt: Date;

  // ─────────────────────────────────────────────
  // SEO & Tracking
  // ─────────────────────────────────────────────

  readonly seoTitle?: string;
  readonly seoDescription?: string;
  readonly keywords?: string[];
}