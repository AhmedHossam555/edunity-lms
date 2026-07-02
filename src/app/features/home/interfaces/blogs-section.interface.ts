// ─────────────────────────────────────────────────────────────
// Blog section heading content
// ─────────────────────────────────────────────────────────────
export interface IBlogSectionCopy {
  subtitle: string;
  title: string;
}

// ─────────────────────────────────────────────────────────────
// Blog card model
// Represents a single blog card displayed in the grid.
// ─────────────────────────────────────────────────────────────
export interface IBlogCard {
  // Unique identifier used as the `@for` track expression.
  id: string;

  imageSrc: string;
  imageAlt: string;
  publishedDate: string;
  commentCount: number;
  title: string;
}