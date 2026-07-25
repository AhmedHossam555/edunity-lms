import { SvgStrokeLinecap, SvgStrokeLinejoin } from "../enums";

export interface ISvgIcon {
  width: number;
  height: number;
  viewBox: string;
  strokeWidth: number;
  strokeLinecap: SvgStrokeLinecap;
  strokeLinejoin: SvgStrokeLinejoin;
  paths: string[];
}

export interface ISvgIconsConfig {
  search: ISvgIcon;
  clear: ISvgIcon;
}

export interface IBlogSearchConfig {
  placeholder: string;
  ariaLabel: string;
  ariaLabelClear: string;
  debounceTime: number;
}