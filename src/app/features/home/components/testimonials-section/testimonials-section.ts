import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TESTIMONIALS_SECTION_CONFIG } from '../../configs';
import { QUOTE_ICON_SVG } from '../../constants';
import { ITestimonialsSectionConfig } from '../../interfaces';
import { safeSvg } from '../../../../shared/utils/svg.util';

@Component({
  selector: 'app-testimonials-section',
  imports: [],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSection {
  // ─────────────────────────────────────────────────────────────
  //  Dependencies
  // ─────────────────────────────────────────────────────────────
  // Not needed in the template -> stays private
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  //  Component State
  // ─────────────────────────────────────────────────────────────
  // Static content, config-driven -> readonly signal, protected (template access only)
  protected readonly config = signal<ITestimonialsSectionConfig>(TESTIMONIALS_SECTION_CONFIG);

  // ─────────────────────────────────────────────────────────────
  //  Computed Signals
  // ─────────────────────────────────────────────────────────────
  // Generate repeated marquee items
  protected readonly marqueeItems = computed(() =>
    Array.from({ length: this.config().marquee.repeat }),
  );

  // Generate pagination dots
  protected readonly dotsArray = computed(() => Array.from({ length: this.config().dots.total }));

  // ─────────────────────────────────────────────────────────────
  //  Icons
  // ─────────────────────────────────────────────────────────────
  // Sanitized SVG quote icon
  protected readonly quoteIcon: SafeHtml = safeSvg(this.sanitizer, QUOTE_ICON_SVG);
}
