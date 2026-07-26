import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ErrorIllustration } from '../../components';
import { ARROW_ICON, NOT_FOUND_CONTENT } from '../../constants';
import { PageBanner, safeSvg } from '@app/shared';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, ErrorIllustration, PageBanner],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Template Content
  // ─────────────────────────────────────────────────────────────
  protected readonly content = NOT_FOUND_CONTENT;

  // ─────────────────────────────────────────────────────────────
  // Safe SVG Icons
  // ─────────────────────────────────────────────────────────────
  protected readonly safeArrowIcon = safeSvg(this.sanitizer, ARROW_ICON);
}