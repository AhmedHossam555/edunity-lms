import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICommunityStatsConfig, ISectionHeader, IStatItem, ITestimonial } from '../../interfaces';
import { COMMUNITY_STATS_CONFIG } from '../../configs';
import { STAT_ICON_SVGS } from '../../constants';
import { StatIconKey } from '../../enums';
import { safeSvg } from '@app/shared';


@Component({
  selector: 'app-community-stats-section',
  imports: [],
  templateUrl: './community-stats-section.html',
  styleUrl: './community-stats-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityStatsSection {
  private readonly sanitizer = inject(DomSanitizer);

  /** Full section config (stats, testimonial header, testimonials). */
  private readonly config: ICommunityStatsConfig = COMMUNITY_STATS_CONFIG;

  /** Stat cards for the orange banner. */
  protected readonly stats: Signal<readonly IStatItem[]> = computed(() => this.config.stats);

  /** "TESTIMONIAL" tag + heading above the cards grid. */
  protected readonly testimonialsHeader: Signal<ISectionHeader> = computed(
    () => this.config.testimonialsHeader,
  );

  /** Testimonial cards. */
  protected readonly testimonials: Signal<readonly ITestimonial[]> = computed(
    () => this.config.testimonials,
  );

  /**
   * StatIconKey -> sanitized SVG markup, ready for [innerHTML].
   * Computed once and reused across the four stat cards.
   */
  protected readonly iconMap: Signal<ReadonlyMap<StatIconKey, SafeHtml>> = computed(() => {
    const map = new Map<StatIconKey, SafeHtml>();
    for (const key of Object.values(StatIconKey)) {
      map.set(key, safeSvg(this.sanitizer, STAT_ICON_SVGS[key]));
    }
    return map;
  });

  /** Template helper: resolve a stat's sanitized icon markup. */
  protected iconFor(id: StatIconKey): SafeHtml | undefined {
    return this.iconMap().get(id);
  }

  /** Template trackBy for @for loops. */
  protected trackByIndex(index: number): number {
    return index;
  }
}