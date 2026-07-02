import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button, safeSvg } from '@app/shared';
import { EVENTS_SECTION_CONFIG } from '../../configs';
import { EVENTS_SECTION_ICONS } from '../../constants';
import { IEventsSectionConfig } from '../../interfaces';

@Component({
  selector: 'app-events-section',
  imports: [Button],
  templateUrl: './events-section.html',
  styleUrl: './events-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsSection {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Reactive State
  // ─────────────────────────────────────────────────────────────

  /** Section content and media configuration. */
  protected readonly config = signal<IEventsSectionConfig>(
    EVENTS_SECTION_CONFIG,
  );

  // ─────────────────────────────────────────────────────────────
  // Sanitized SVG Icons
  // ─────────────────────────────────────────────────────────────

  /** Subtitle decorative icon. */
  protected readonly subtitleIconHtml: SafeHtml = safeSvg(
    this.sanitizer,
    EVENTS_SECTION_ICONS.subtitleIcon,
  );

  /** Image decoration icon. */
  protected readonly decorationIconHtml: SafeHtml = safeSvg(
    this.sanitizer,
    EVENTS_SECTION_ICONS.imageDecoration,
  );
}