/**
 * Raw SVG markup used by the testimonials section.
 * Kept as trusted, static strings — sanitized once in the component
 * via DomSanitizer.bypassSecurityTrustHtml and bound with [innerHTML].
 */
export const QUOTE_ICON_SVG = `
<svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="27" height="21" fill="url(#pattern0_2038_512)"/>
<defs>
<pattern id="pattern0_2038_512" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2038_512" transform="scale(0.037037 0.047619)"/>
</pattern>
<image id="image0_2038_512" width="27" height="21" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAVCAYAAAC33pUlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBnZUhjwIxEIVfm71L9gQnziAOswKBOn3/P8FgECAQIDAYDAISIFnehNmkS2i305e8DEzmy2sXtnUYUNu2FcuE/qFH9Mk5tyjhqsSwDE11uNOe3iAdEuVcZEV/9Dhon+kld3REeidJrnoBapZ/ug7aN3pO4JIIyuL8ACBaFQS95Xzw+R0gOiGtbM7r6qYRQPQR6Zs5T0CaE8Q100f1GmTmHBu/eP6LhrTlb7AOwsycPMYx8tQwYBZ8N3MS9oV8NfrSooSTsBFs6nZk5jzsqlGmWsJuNgbfWs2chF2M0FmrmZOwA2zqTgYzJ2F7G4OtVjPn9bDcZQKb7nAt4byCqwxwx7nexWnlepenHkEN+u/QUVeWujizOBeB5VL9pK8cviNTQ9wDODOUB9Imx68AAAAASUVORK5CYII="/>
</defs>
</svg>
`.trim();
