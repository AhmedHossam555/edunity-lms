import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FooterConfig, FOOTER_CONFIG } from '@app/layout/configs/footer.config';

@Component({
  selector: 'app-main-site-footer',
  imports: [],
  templateUrl: './main-site-footer.html',
  styleUrl: './main-site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSiteFooter {
  protected readonly config = signal<FooterConfig>(FOOTER_CONFIG);
  protected readonly currentYear = new Date().getFullYear();
}
