import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { STATS_CONTENT } from '../../configs';
import { STATS_SUBTITLE_ICON_SVG } from '../../constants';
import { IStatsContent, IStatsProgressItem } from '../../interfaces';
@Component({
  selector: 'app-stats-section',
  imports: [],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsSection {
 /** Section content, sourced from the config file. Exposed read-only to the template. */
  protected readonly content = signal<IStatsContent>(STATS_CONTENT);
 
  /** Progress bar entries, derived from `content` so it stays reactive if content ever changes. */
  protected readonly progressList = computed<IStatsProgressItem[]>(
    () => this.content().progressList,
  );
 
  /** Sanitized subtitle icon markup, ready for [innerHTML] binding. */
  protected readonly subtitleIcon: SafeHtml;
 
  constructor(private readonly sanitizer: DomSanitizer) {
    this.subtitleIcon = this.sanitizer.bypassSecurityTrustHtml(
      STATS_SUBTITLE_ICON_SVG,
    );
  }
 
  /** trackBy for the progress list, keyed by the stable enum key. */
  protected trackByProgressKey(_index: number, item: IStatsProgressItem): string {
    return item.key;
  }
}
