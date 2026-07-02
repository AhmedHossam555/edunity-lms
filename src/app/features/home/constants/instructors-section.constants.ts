/**
 * Raw SVG markup extracted from InstructorsSection HTML.
 * Kept as plain strings and rendered via [innerHTML] + DomSanitizer
 * in the component, so the template stays free of inline SVG blocks.
 */

/** Small decorative diamond icon shown twice around the "Teacher" subtitle.
 *  Takes a unique id suffix so duplicate <clipPath> ids never collide in the DOM. */
export const DECORATIVE_TEACHER_ICON_SVG = (uniqueId: string | number): string => `
<svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_${uniqueId})">
    <g clip-path="url(#clip1_${uniqueId})">
      <g clip-path="url(#clip2_${uniqueId})">
        <path d="M14.9023 7.86082L7.78564 0.980469L0.905296 8.09717L8.022 14.9775L14.9023 7.86082Z" stroke="#F2A227" />
        <path d="M21.9741 7.97898L14.8574 1.09863L7.97707 8.21533L15.0938 15.0957L21.9741 7.97898Z" stroke="white" />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_${uniqueId}"><rect width="23" height="17" fill="white" /></clipPath>
    <clipPath id="clip1_${uniqueId}"><rect width="23" height="17" fill="white" /></clipPath>
    <clipPath id="clip2_${uniqueId}"><rect width="23" height="17" fill="white" /></clipPath>
  </defs>
</svg>
`;

/** Share icon shown on each instructor card. */
export const SHARE_ICON_SVG = `
<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.6875 10.625C12.5729 10.625 13.3255 10.9349 13.9453 11.5547C14.5651 12.1745 14.875 12.9271 14.875 13.8125C14.875 14.6979 14.5651 15.4505 13.9453 16.0703C13.3255 16.6901 12.5729 17 11.6875 17C10.802 17 10.0494 16.6901 9.42965 16.0703C8.80986 15.4505 8.49996 14.6979 8.49996 13.8125C8.49996 13.569 8.5221 13.3366 8.56637 13.1152L5.17965 10.9902C4.60413 11.4551 3.94007 11.6875 3.18746 11.6875C2.30204 11.6875 1.54944 11.3776 0.929648 10.7578C0.309857 10.138 -3.91006e-05 9.38542 -3.91006e-05 8.5C-3.91006e-05 7.61458 0.309857 6.86198 0.929648 6.24219C1.54944 5.6224 2.30204 5.3125 3.18746 5.3125C3.94007 5.3125 4.60413 5.54492 5.17965 6.00977L8.56637 3.88477C8.5221 3.66341 8.49996 3.43099 8.49996 3.1875C8.49996 2.30208 8.80986 1.54948 9.42965 0.929688C10.0494 0.309896 10.802 0 11.6875 0C12.5729 0 13.3255 0.309896 13.9453 0.929688C14.5651 1.54948 14.875 2.30208 14.875 3.1875C14.875 4.07292 14.5651 4.82552 13.9453 5.44531C13.3255 6.0651 12.5729 6.375 11.6875 6.375C10.9349 6.375 10.2708 6.14258 9.69527 5.67773L6.30855 7.80273C6.35283 8.02409 6.37496 8.25651 6.37496 8.5C6.37496 8.74349 6.35283 8.97591 6.30855 9.19727L9.69527 11.3223C10.2708 10.8574 10.9349 10.625 11.6875 10.625Z" fill="#0E2A46" />
</svg>
`;