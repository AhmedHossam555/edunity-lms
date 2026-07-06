import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AboutSection } from "@app/features/home/components";
import { PageBanner } from "@app/shared";

@Component({
  selector: 'app-about',
  imports: [AboutSection, PageBanner],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly pageBannerTitle = signal('About Us');
  protected readonly pageBannerCurrentPage = signal('About Us');
}
