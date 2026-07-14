import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-map',
  standalone: true,
  templateUrl: './contact-map.html',
  styleUrl: './contact-map.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMap {
  // ─────────────────────────────────────────────────────────────
  // Input
  // ─────────────────────────────────────────────────────────────

  /** Google Maps embed URL */
  readonly src = input.required<string>();

  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  /** Angular DOM sanitizer for trusted resource URLs */
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Computed Signals
  // ─────────────────────────────────────────────────────────────

  /** Sanitized Google Maps embed URL */
  readonly safeUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.src()),
  );
}
