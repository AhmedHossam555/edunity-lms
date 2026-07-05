import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button, SectionTagHeader } from '@app/shared';
import { safeSvg } from '@app/shared/utils/svg.util';
import { IExamCard, IExamHeader } from '../../interfaces';
import { EXAM_CARDS_CONFIG, EXAM_HEADER_CONFIG } from '../../configs';
import { EXAM_SUBTITLE_ICON_SVG } from '../../constants';
import { ExamCardVariant } from '../../enums';

@Component({
  selector: 'app-exam-preparation-section',
  imports: [Button, SectionTagHeader],
  templateUrl: './exam-preparation-section.html',
  styleUrl: './exam-preparation-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamPreparationSection {
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  //  Template enums
  // ─────────────────────────────────────────────────────────────

  /** Exposed to the template so card variants can be compared without magic strings. */
  protected readonly ExamCardVariant = ExamCardVariant;

  // ─────────────────────────────────────────────────────────────
  //  Component state
  // ─────────────────────────────────────────────────────────────

  protected readonly header: Signal<IExamHeader> = computed(
    () => EXAM_HEADER_CONFIG,
  );

  protected readonly cards: Signal<IExamCard[]> = computed(
    () => EXAM_CARDS_CONFIG,
  );

  // ─────────────────────────────────────────────────────────────
  //  Computed SVG
  // ─────────────────────────────────────────────────────────────

  /** Static, developer-authored SVG -> safe to trust; never built from user input. */
  protected readonly subtitleIcon: Signal<SafeHtml> = computed(() =>
    safeSvg(this.sanitizer, EXAM_SUBTITLE_ICON_SVG),
  );

  // ─────────────────────────────────────────────────────────────
  //  Helpers
  // ─────────────────────────────────────────────────────────────

  /** Static, developer-authored markup (e.g. <br />) -> safe to trust. */
  protected sanitizeHeading(heading: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(heading);
  }
}