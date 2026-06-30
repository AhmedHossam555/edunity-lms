import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Button, safeSvg } from '@app/shared';
import { FEATURE_SECTION_CONFIG } from '../../configs';
import { 
  IFeatureCardItemViewModel, 
  IFeatureSectionConfig 
} from '../../interfaces';

@Component({
  selector: 'app-feature-section',
  imports: [Button],
  templateUrl: './feature-section.html',
  styleUrl: './feature-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSection {
  private readonly sanitizer = inject(DomSanitizer);

  // ───────────────────────────────────────────────────────────
  // State
  // ───────────────────────────────────────────────────────────

  /** Full section config. */
  protected readonly config = signal<IFeatureSectionConfig>(FEATURE_SECTION_CONFIG);

  /** Sanitized subtitle icon for `[innerHTML]`. */
  protected readonly subtitleIcon = safeSvg(
    this.sanitizer,
    FEATURE_SECTION_CONFIG.subtitleIcon,
  );

  /** Cards with sanitized SVG icons. */
  protected readonly cards = computed<IFeatureCardItemViewModel[]>(() =>
    this.config().cards.map((card) => ({
      id: card.id,
      title: card.title,
      description: card.description,
      buttonText: card.buttonText,
      icon: safeSvg(this.sanitizer, card.icon),
    })),
  );

  // ───────────────────────────────────────────────────────────
  // TrackBy
  // ───────────────────────────────────────────────────────────

  /** Returns a stable key for each feature card. */
  protected trackById(
    _index: number,
    item: IFeatureCardItemViewModel,
  ): number {
    return item.id;
  }
}