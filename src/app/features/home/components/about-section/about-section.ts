import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { safeSvg, SectionTagHeader } from '@app/shared';
import { Button } from '@app/shared/components/button/button';

import { ABOUT_SECTION_CONFIG } from '../../configs';
import { ABOUT_TAG_ICON_SVG } from '../../constants';
import { AboutImageKey } from '../../enums';
import { IAboutConfig } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-section',
  imports: [Button, SectionTagHeader,NgOptimizedImage ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Template Constants
  // ─────────────────────────────────────────────────────────────

  /** Exposed so the template can index images by key (e.g. config().images[imageKey.StudentProfile]). */
  protected readonly imageKey = AboutImageKey;

  // ─────────────────────────────────────────────────────────────
  // Component State
  // ─────────────────────────────────────────────────────────────

  /** Section content/config, exposed as a signal for reactive templates. */
  protected readonly config = signal<IAboutConfig>(ABOUT_SECTION_CONFIG);

  // ─────────────────────────────────────────────────────────────
  // Computed / Sanitized Values
  // ─────────────────────────────────────────────────────────────

  /** Sanitized SVG markup for the tag icon, bound via [innerHTML]. */
  protected readonly tagIconSvg = safeSvg(this.sanitizer, ABOUT_TAG_ICON_SVG);
}
