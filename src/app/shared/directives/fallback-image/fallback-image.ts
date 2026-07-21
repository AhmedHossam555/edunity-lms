import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: 'img[fallbackSrc]',
})
export class FallbackImage {
  /**
   * Fallback image displayed when the original image fails to load.
   */
  readonly fallbackSrc = input.required<string>();

  @HostListener('error', ['$event'])
  protected onError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const fallback = this.fallbackSrc();

    // Prevent infinite loop if the fallback image also fails.
    if (img.src.endsWith(fallback)) {
      return;
    }

    img.src = fallback;
  }
}
