import { Data } from "@angular/router";

export interface SeoMetadata {
  title?: string;
  description?: string;
  image?: string;                       // absolute or site-relative
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  canonicalPath?: string;               // override when needed
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/** Static object OR a function of the route's resolved data (no double fetching). */
export type SeoRouteData = SeoMetadata | ((data: Data) => SeoMetadata);

export const seo = (value: SeoRouteData) => ({ seo: value });