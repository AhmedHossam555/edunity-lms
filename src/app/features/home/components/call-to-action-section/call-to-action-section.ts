import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Button } from '@app/shared';
import { CALL_TO_ACTION_SECTION_CONFIG } from '../../configs';

@Component({
  selector: 'app-call-to-action-section',
  imports: [Button],
  templateUrl: './call-to-action-section.html',
  styleUrl: './call-to-action-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionSection {
  // ─────────────────────────────────────────────────────────────
  // Configuration
  // ─────────────────────────────────────────────────────────────

  /**
   * CTA section configuration.
   */
  private readonly config = signal(CALL_TO_ACTION_SECTION_CONFIG);

  // ─────────────────────────────────────────────────────────────
  // View Model
  // ─────────────────────────────────────────────────────────────

  /**
   * View model.
   */
  protected readonly vm = computed(() => this.config());
}
