import { SvgStrokeLinecap, SvgStrokeLinejoin } from '../enums';
import { ISvgIconsConfig } from '../interfaces';

export const BLOG_SEARCH_SVG_ICONS: ISvgIconsConfig = {
  search: {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    strokeLinecap: SvgStrokeLinecap.Round,
    strokeLinejoin: SvgStrokeLinejoin.Round,
    paths: ['M21 21l-4.35-4.35', 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'],
  },
  clear: {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    strokeLinecap: SvgStrokeLinecap.Round,
    strokeLinejoin: SvgStrokeLinejoin.Round,
    paths: ['M18 6L6 18', 'M6 6l12 12'],
  },
};
