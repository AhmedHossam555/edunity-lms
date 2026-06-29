
// ============================================================
// Interfaces
// ============================================================

import { CourseCategory, CurrencySymbol } from "../enums";

export interface ICourseAuthor {
  readonly name: string;
  readonly avatarSrc: string;
  readonly avatarAlt: string;
  readonly category: CourseCategory;
}

export interface ICourseMeta {
  readonly lessonCount: number;
  readonly duration: string;
  readonly studentCount: string;
}

export interface ICoursePrice {
  readonly current: number;
  readonly old: number;
  readonly currency: CurrencySymbol;
}

export interface ICourse {
  readonly id: number;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly badge: CourseCategory;
  readonly rating: number;
  readonly ratingLabel: string;
  readonly title: string;
  readonly meta: ICourseMeta;
  readonly author: ICourseAuthor;
  readonly price: ICoursePrice;
}

export interface IFeaturedCoursesSectionConfig {
  readonly subtitle: string;
  readonly title: string;
  readonly titleBreak?: string;
  readonly buttonText: string;
  readonly courses: ReadonlyArray<ICourse>;
}

export interface ICourseSvgIcons {
  readonly subtitleIcon: string;
  readonly ratingStars: string;
  readonly lessonIcon: string;
  readonly clockIcon: string;
  readonly personIcon: string;
  readonly cartIcon: string;
}


