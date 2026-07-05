import { EScrollBehavior, EScrollToTopPosition, EScrollToTopVariant, EScrollToTopSize } from "../enums";
import { IScrollToTopResolvedConfig, IScrollToTopIcon } from "../interfaces";

/**
 * BEM class names used across the template/styles.
 * Centralized here so the host/button/icon selectors only exist in one place.
 */
export const CSS_CLASSES = {
  host: 'scroll-to-top',
  button: 'scroll-to-top__button',
  icon: 'scroll-to-top__icon',
} as const;

/**
 * Default configuration applied whenever a value is not supplied via
 * the `[config]` input. Kept in sync with the CSS custom properties
 * previously hardcoded in scroll-to-top.scss.
 */
export const DEFAULT_CONFIG: IScrollToTopResolvedConfig = {
  visibilityThresholdPx: 300,
  scrollBehavior: EScrollBehavior.Smooth,
  position: EScrollToTopPosition.BottomRight,
  variant: EScrollToTopVariant.Filled,
  ariaLabel: 'Scroll to top',
  size: EScrollToTopSize.Medium,
  offset: '1.5rem',
  radius: '50%',
  colorFg: '#fff',
  shadow: '0 10px 30px rgba(47, 199, 161, .28), 0 4px 12px rgba(0,0,0,.16)',
  transitionDuration: '250ms',
  zIndex: 1000,
};

/** Maps each size preset to a concrete CSS length for --scroll-to-top-size */
export const SIZE_PX_MAP: Record<EScrollToTopSize, string> = {
  [EScrollToTopSize.Small]: '2.5rem',
  [EScrollToTopSize.Medium]: '3rem',
  [EScrollToTopSize.Large]: '3.5rem',
};

/**
 * Icon rendered inside the button. Previously inlined as raw markup
 * in scroll-to-top.html — moved here so the template stays declarative
 * and the icon can be swapped without touching markup.
 */
export const SCROLL_TOP_ICON: IScrollToTopIcon = {
  viewBox: '0 0 24 24',
  strokeWidth: 2.5,
  paths: ['M12 20V6', 'M6 12l6-6 6 6'],
};