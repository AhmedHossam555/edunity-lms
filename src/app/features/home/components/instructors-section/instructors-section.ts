import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { safeSvg } from '../../../../shared/utils/svg.util';
import { INSTRUCTORS_SECTION_CONTENT, INSTRUCTORS } from '../../configs';
import { DECORATIVE_TEACHER_ICON_SVG, SHARE_ICON_SVG } from '../../constants';
import { IInstructorsSectionContent, IInstructor } from '../../interfaces';

@Component({
  selector: 'app-instructors-section',
  imports: [],
  templateUrl: './instructors-section.html',
  styleUrl: './instructors-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructorsSection {
  // ─────────────────────────────────────────────────────────────
  // Dependencies
  // ─────────────────────────────────────────────────────────────

  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  // Section Content
  // ─────────────────────────────────────────────────────────────

  /** Static section copy (subtitle + title). */
  protected readonly content: IInstructorsSectionContent = INSTRUCTORS_SECTION_CONTENT;

  // ─────────────────────────────────────────────────────────────
  // Instructor Data
  // ─────────────────────────────────────────────────────────────

  /** Instructor cards data, exposed as a signal for template consumption. */
  protected readonly instructors: WritableSignal<readonly IInstructor[]> = signal(INSTRUCTORS);

  // ─────────────────────────────────────────────────────────────
  // Decorative Icons
  // ─────────────────────────────────────────────────────────────

  /** Sanitized decorative icons (left/right of the "Teacher" subtitle). */
  protected readonly decorativeIconLeft: SafeHtml = safeSvg(
    this.sanitizer,
    DECORATIVE_TEACHER_ICON_SVG('2038_629'),
  );

  protected readonly decorativeIconRight: SafeHtml = safeSvg(
    this.sanitizer,
    DECORATIVE_TEACHER_ICON_SVG('2038_635'),
  );

  // ─────────────────────────────────────────────────────────────
  // Card Icons
  // ─────────────────────────────────────────────────────────────

  /** Sanitized share icon reused on every instructor card. */
  protected readonly shareIcon: SafeHtml = safeSvg(
    this.sanitizer,
    SHARE_ICON_SVG,
  );
}