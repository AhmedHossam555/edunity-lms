/**
 * Enums used by the ScrollToTop feature.
 * Extracted from the component so they can be reused / imported independently.
 */

/** Native scroll behavior passed to `window.scrollTo` */
export enum EScrollBehavior {
  Auto = 'auto',
  Smooth = 'smooth',
}

/** Interaction / visibility state modifiers applied to the button */
export enum EScrollToTopState {
  Visible = 'visible',
  Hovered = 'hovered',
  Focused = 'focused',
  Active = 'active',
}

/** Screen corner the button is anchored to */
export enum EScrollToTopPosition {
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
}

/** Visual style of the button */
export enum EScrollToTopVariant {
  Filled = 'filled',
  Outlined = 'outlined',
}

/** Predefined size presets for the button */
export enum EScrollToTopSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}