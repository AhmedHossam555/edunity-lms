import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SECTION_TITLE_ICON_SVG } from '@app/shared/constants';
import { safeSvg } from '@app/shared/utils';

@Component({
  selector: 'app-section-tag-header',
  standalone: true,
  templateUrl: './section-tag-header.html',
  styleUrl: './section-tag-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTagHeader {
  private readonly sanitizer = inject(DomSanitizer);

  readonly text = input.required<string>();

  readonly color = input('var(--color-primary)');
  readonly hasIcon = input(false);

  protected readonly iconSvg = safeSvg(
    this.sanitizer,
    SECTION_TITLE_ICON_SVG
  );
}