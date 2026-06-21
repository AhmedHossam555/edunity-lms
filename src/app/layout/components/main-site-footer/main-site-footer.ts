  import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FooterConfig, FOOTER_CONFIG, FOOTER_I18N } from '@app/layout/configs/footer.config';

  @Component({
    selector: 'app-main-site-footer',
    imports: [],
    templateUrl: './main-site-footer.html',
    styleUrl: './main-site-footer.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class MainSiteFooter {
 private readonly _config = signal<FooterConfig>(FOOTER_CONFIG);
  protected readonly config = signal(FOOTER_CONFIG).asReadonly();

  protected readonly i18n = signal(FOOTER_I18N).asReadonly();

  protected readonly currentYear = signal(
    new Date().getFullYear()
  ).asReadonly();
  }
