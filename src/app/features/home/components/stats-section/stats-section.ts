import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { safeSvg, SectionTagHeader } from '@app/shared'; 
import { STATS_CONTENT } from '../../configs';
import { STATS_SUBTITLE_ICON_SVG } from '../../constants';
import { IStatsContent, IStatsProgressItem } from '../../interfaces';

@Component({
  selector: 'app-stats-section',
  imports: [SectionTagHeader],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsSection {
  // ───────────────────────────────────────────────────────────
  // State
  // ───────────────────────────────────────────────────────────

  /** Section content sourced from the config file. */
  protected readonly content = signal<IStatsContent>(STATS_CONTENT);

  /** Reactive list of progress items. */
  protected readonly progressList = computed<IStatsProgressItem[]>(
    () => this.content().progressList,
  );

  /** Sanitized subtitle icon for `[innerHTML]` binding. */
  protected readonly subtitleIcon: SafeHtml;

  // ───────────────────────────────────────────────────────────
  // Constructor
  // ───────────────────────────────────────────────────────────

  constructor(private readonly sanitizer: DomSanitizer) {
    this.subtitleIcon = safeSvg(
      this.sanitizer,
      STATS_SUBTITLE_ICON_SVG,
    );
  }

  // ───────────────────────────────────────────────────────────
  // TrackBy
  // ───────────────────────────────────────────────────────────

  /** Returns a stable key for each progress item. */
  protected trackByProgressKey(
    _index: number,
    item: IStatsProgressItem,
  ): string {
    return item.key;
  }
}