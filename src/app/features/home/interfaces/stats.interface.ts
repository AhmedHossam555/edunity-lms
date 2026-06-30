import { StatsProgressKey } from "../enums";

/** A single animated progress bar entry. */
export interface IStatsProgressItem {
  key: StatsProgressKey;
  label: string;
  value: number; // 0 - 100
}

/** Right-side image block (image + decorative frame). */
export interface IStatsImage {
  src: string;
  alt: string;
}

/** Full textual + visual content for the Stats section. */
export interface IStatsContent {
  subtitle: string;
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  progressList: IStatsProgressItem[];
  image: IStatsImage;
}