import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ERROR_ILLUSTRATION_IMAGE } from '../../constants';

@Component({
  selector: 'app-error-illustration',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './error-illustration.html',
  styleUrl: './error-illustration.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorIllustration {
  // ─────────────────────────────────────────────────────────────
  // Template Content
  // ─────────────────────────────────────────────────────────────
  protected readonly image = ERROR_ILLUSTRATION_IMAGE;
}
