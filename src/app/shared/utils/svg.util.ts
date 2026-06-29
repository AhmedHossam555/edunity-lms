  import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

  export function safeSvg(
    sanitizer: DomSanitizer,
    svg: string
  ): SafeHtml {
    return sanitizer.bypassSecurityTrustHtml(svg);
  }
  