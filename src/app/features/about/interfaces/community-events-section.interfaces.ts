/**
 * Enums and interfaces for the Community Events (Courses) section.
 * Interfaces follow the "Ixxxx" naming convention as requested.
 */

import { CourseCategory } from '../enums';

// ─────────────────────────────────────────────────────────────
// Course Models
// ─────────────────────────────────────────────────────────────

export interface ICourseRating {
  value: string;
}

export interface ICourseMeta {
  lessons: number;
  duration: string;
  students: string;
}

export interface ICourseAuthor {
  name: string;
  avatarUrl: string;
}

export interface ICoursePrice {
  current: number;
  old: number;
  currency: string;
}

export interface ICourseCard {
  id: string;
  imageUrl: string;
  imageAlt: string;
  tag: string;
  rating: ICourseRating;
  title: string;
  meta: ICourseMeta;
  author: ICourseAuthor;
  category: CourseCategory;
  price: ICoursePrice;
}

// ─────────────────────────────────────────────────────────────
// Section Configuration
// ─────────────────────────────────────────────────────────────

export interface ICommunityEventsSectionConfig {
  badge: string;
  heading: string;
  ctaLabel: string;
  courses: ICourseCard[];
}