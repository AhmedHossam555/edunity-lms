import { IBlogAuthor } from './blog-author.interface';
import { IBlogCategory } from './blog-category.interface';
import { IBlogComment } from './comment.interface';

// ─────────────────────────────────────────────────────────────
//  Blog Tag
// ─────────────────────────────────────────────────────────────

export interface IBlogTag {
  id: string;
  name: string;
  slug: string;
}

// ─────────────────────────────────────────────────────────────
//  Blog Metadata
// ─────────────────────────────────────────────────────────────

export interface IBlogMeta {
  views: number;
  readTime: number; // in minutes
  wordCount?: number;
  isFeatured: boolean;
  isPublished: boolean;
  publishedAt: Date;
  lastUpdatedAt?: Date;

  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
}

// ─────────────────────────────────────────────────────────────
//  Blog
// ─────────────────────────────────────────────────────────────

export interface IBlog {
  id: string;
  title: string;
  slug: string;

  excerpt: string;
  content: string;

  featuredImage: string;
  featuredImageAlt?: string;

  author: IBlogAuthor;
  category: IBlogCategory | string;
  tags: IBlogTag[] | string[];

  meta: IBlogMeta;

  comments: IBlogComment[];
  commentCount: number;

  createdAt: Date;
  updatedAt?: Date;

  // ───────────────────────────────────────────────────────────
  //  Card Display
  // ───────────────────────────────────────────────────────────

  date?: string;
  readTimeLabel?: string;
  badge?: string;

  isLiked?: boolean;
  isSaved?: boolean;

  likeCount?: number;
  shareCount?: number;

  // ───────────────────────────────────────────────────────────
  //  Rich Preview
  // ───────────────────────────────────────────────────────────

  imageSrc?: string;
  imageAlt?: string;

  authorName?: string;
  authorAvatarSrc?: string;
  authorAvatarAlt?: string;
}

// ─────────────────────────────────────────────────────────────
//  Blog Filters
// ─────────────────────────────────────────────────────────────

export interface IBlogFilters {
  category?: string;
  tag?: string;
  author?: string;

  dateFrom?: Date;
  dateTo?: Date;

  searchTerm?: string;

  sortBy?: 'newest' | 'oldest' | 'popular' | 'trending';

  featuredOnly?: boolean;

  page?: number;
  limit?: number;
}

// ─────────────────────────────────────────────────────────────
//  Blog Response
// ─────────────────────────────────────────────────────────────

export interface IBlogResponse {
  blogs: IBlog[];

  total: number;
  page: number;
  limit: number;
  totalPages: number;

  hasMore: boolean;
}