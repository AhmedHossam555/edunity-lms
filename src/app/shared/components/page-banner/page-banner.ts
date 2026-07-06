import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-banner',
  imports: [RouterLink],
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageBanner {
  // ─────────────────────────────────────────────────────────────
  // Inputs
  // ─────────────────────────────────────────────────────────────
  readonly title = input.required<string>();
  readonly homeLabel = input('Home');
  readonly currentPage = input.required<string>();
}
