import { IBlogCategory, IBlogTag } from "../interfaces";

// Helper functions for type checking
export function isBlogCategory(obj: any): obj is IBlogCategory {
  return obj && typeof obj === 'object' && 'slug' in obj && 'name' in obj;
}

export function isBlogTag(obj: any): obj is IBlogTag {
  return obj && typeof obj === 'object' && 'slug' in obj && 'name' in obj;
}
