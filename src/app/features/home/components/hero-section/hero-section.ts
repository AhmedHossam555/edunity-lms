import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { HeroCardPosition, HeroDotPosition, HeroStudentSize } from '../../enums';
import { HERO_CONFIG } from '../../configs';
import { IHeroDot, IHeroSectionConfig, IHeroStatCard, IHeroStudentImage } from '../../interfaces';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  // ─────────────────────────────────────────────────────────────
  // Enums
  // ─────────────────────────────────────────────────────────────
  protected readonly StudentSize = HeroStudentSize;
  protected readonly CardPosition = HeroCardPosition;
  protected readonly DotPosition = HeroDotPosition;

  // ─────────────────────────────────────────────────────────────
  // Configuration
  // ─────────────────────────────────────────────────────────────
  private readonly config: IHeroSectionConfig = HERO_CONFIG;

  // ─────────────────────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────────────────────
  private readonly searchQuery = signal<string>('');

  // ─────────────────────────────────────────────────────────────
  // Computed Signals
  // ─────────────────────────────────────────────────────────────
  protected readonly content = computed(() => this.config.content);
  protected readonly students = computed<IHeroStudentImage[]>(() => this.config.visual.students);
  protected readonly cards = computed<IHeroStatCard[]>(() => this.config.visual.cards);
  protected readonly dots = computed<IHeroDot[]>(() => this.config.visual.dots);
  protected readonly query = computed(() => this.searchQuery());
  protected readonly isQueryValid = computed(() => this.searchQuery().trim().length > 0);

  // ─────────────────────────────────────────────────────────────
  // Event Handlers
  // ─────────────────────────────────────────────────────────────
  protected onQueryChange(value: string): void {
    this.searchQuery.set(value);
  }

  protected onSearchSubmit(event: Event): void {
    event.preventDefault();

    if (!this.isQueryValid()) {
      return;
    }

    this.handleSearch(this.searchQuery());
  }

  // ─────────────────────────────────────────────────────────────
  // Helper Methods
  // ─────────────────────────────────────────────────────────────
  protected getStudentBySize(size: HeroStudentSize): IHeroStudentImage | undefined {
    return this.students().find((s) => s.size === size);
  }

  protected getCardByPosition(position: HeroCardPosition): IHeroStatCard | undefined {
    return this.cards().find((c) => c.position === position);
  }

  // ─────────────────────────────────────────────────────────────
  // Private Methods
  // ─────────────────────────────────────────────────────────────
  private handleSearch(query: string): void {
    // Wire up to a real search service/router as needed.
    console.log('Searching for:', query);
  }
}
