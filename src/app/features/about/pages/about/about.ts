import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AboutSection } from "@app/features/home/components";
import { PageBanner } from "@app/shared";
import { CommunityStatsSection, CommunityEventsSection, InstructorsSection } from "../../components";

@Component({
  selector: 'app-about',
  imports: [AboutSection, PageBanner, CommunityStatsSection, CommunityEventsSection, InstructorsSection],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly pageBannerTitle = signal('About Us');
  protected readonly pageBannerCurrentPage = signal('About Us');
}
