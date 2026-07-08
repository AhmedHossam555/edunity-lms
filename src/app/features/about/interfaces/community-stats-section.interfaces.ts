import { StatIconKey } from "../enums";

/** A single stat displayed in the orange stats banner. */
export interface IStatItem {
  readonly id: StatIconKey;
  readonly value: string;
  readonly label: string;
}

/** Author byline shown under a testimonial quote. */
export interface ITestimonialAuthor {
  readonly name: string;
  readonly role: string;
}

/** A single testimonial card. */
export interface ITestimonial {
  readonly id: string;
  readonly reviewText: string;
  readonly author: ITestimonialAuthor;
}

/** Small "tag + heading" header used above the testimonials grid. */
export interface ISectionHeader {
  readonly tag: string;
  /** Each entry renders as its own line (mirrors the original <br /> break). */
  readonly titleLines: readonly string[];
}

/** Root config shape for the whole Community Stats + Testimonials section. */
export interface ICommunityStatsConfig {
  readonly stats: readonly IStatItem[];
  readonly testimonialsHeader: ISectionHeader;
  readonly testimonials: readonly ITestimonial[];
}