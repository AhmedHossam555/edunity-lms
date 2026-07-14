import { ToastType } from "../enums";

/**
 * Raw inline SVG markup. Sanitized once via DomSanitizer.bypassSecurityTrustHtml
 * in the presentation layer (toast-item.component.ts) — never render user input
 * through this path.
 */
export const TOAST_ICONS: Record<ToastType, string> = {
  [ToastType.Success]: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
  [ToastType.Error]: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
  [ToastType.Warning]: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
  [ToastType.Info]: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 16v-4m0-4h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
};

export const TOAST_CLOSE_ICON = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;