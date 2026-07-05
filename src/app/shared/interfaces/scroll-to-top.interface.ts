import { EScrollBehavior, EScrollToTopPosition, EScrollToTopVariant, EScrollToTopSize } from "../enums";

export interface IScrollToTopConfig {
  /** Scroll distance (px) after which the button becomes visible */
  visibilityThresholdPx?: number;
  /** Behavior used by `window.scrollTo` (unless reduced-motion is preferred) */
  scrollBehavior?: EScrollBehavior;
  /** Corner of the viewport the button is anchored to */
  position?: EScrollToTopPosition;
  /** Visual style of the button */
  variant?: EScrollToTopVariant;
  /** Accessible label announced to screen readers */
  ariaLabel?: string;
  /** Size preset for the button */
  size?: EScrollToTopSize;
  /** Distance from the viewport edges (any valid CSS length) */
  offset?: string;
  /** Border radius (any valid CSS length/shape) */
  radius?: string;
  /** Foreground (icon) color */
  colorFg?: string;
  /** box-shadow value applied to the button */
  shadow?: string;
  /** Transition duration for hover/visibility animations */
  transitionDuration?: string;
  /** Stacking order of the fixed button */
  zIndex?: number;
}
 
/** Fully resolved configuration - every field guaranteed to be present */
export type IScrollToTopResolvedConfig = Required<IScrollToTopConfig>;
 
/** Internal interaction state tracked by the component */
export interface IScrollToTopState {
  isVisible: boolean;
  isHovered: boolean;
  isFocused: boolean;
  isActive: boolean;
}
 
/** Declarative description of the icon rendered inside the button */
export interface IScrollToTopIcon {
  /** SVG viewBox, e.g. "0 0 24 24" */
  viewBox: string;
  /** One or more `<path>` "d" attribute values */
  paths: string[];
  /** stroke-width applied to every path */
  strokeWidth?: number;
}