import { StatsProgressKey } from "../enums";

// ─────────────────────────────────────────────────────────────
// Progress
// ─────────────────────────────────────────────────────────────

/** A single animated progress bar entry. */
export interface IStatsProgressItem {
  key: StatsProgressKey;
  label: string;
  value: number; // 0–100
}

// ─────────────────────────────────────────────────────────────
// Image
// ─────────────────────────────────────────────────────────────

/** Right-side image block (image + decorative frame). */
export interface IStatsImage {
  src: string;
  alt: string;
}

// ─────────────────────────────────────────────────────────────
// Section content
// ─────────────────────────────────────────────────────────────

/** Full textual and visual content for the Stats section. */
export interface IStatsContent {
  subtitle: string;
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  progressList: IStatsProgressItem[];
  image: IStatsImage;
}