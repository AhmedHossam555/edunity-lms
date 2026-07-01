import { TestimonialsAssetPath } from '../enums';

// ─────────────────────────────────────────────────────────────
//  Testimonial Author
// ─────────────────────────────────────────────────────────────
export interface ITestimonialAuthor {
  name: string;
  role: string;
  avatarUrl: TestimonialsAssetPath | string;
}

// ─────────────────────────────────────────────────────────────
//  Testimonial
// ─────────────────────────────────────────────────────────────
export interface ITestimonial {
  text: string;
  author: ITestimonialAuthor;
}

// ─────────────────────────────────────────────────────────────
//  Marquee Configuration
// ─────────────────────────────────────────────────────────────
export interface IMarqueeConfig {
  text: string;
  separator: string;

  // Number of times the text/separator pair repeats in the marquee track.
  repeat: number;
}

// ─────────────────────────────────────────────────────────────
//  Testimonial Image
// ─────────────────────────────────────────────────────────────
export interface ITestimonialsImage {
  src: TestimonialsAssetPath | string;
  alt: string;
}

// ─────────────────────────────────────────────────────────────
//  Pagination Dots Configuration
// ─────────────────────────────────────────────────────────────
export interface IDotsConfig {
  total: number;
  activeIndex: number;
}

// ─────────────────────────────────────────────────────────────
//  Testimonials Section Configuration
// ─────────────────────────────────────────────────────────────
export interface ITestimonialsSectionConfig {
  marquee: IMarqueeConfig;
  image: ITestimonialsImage;
  testimonial: ITestimonial;
  dots: IDotsConfig;
}