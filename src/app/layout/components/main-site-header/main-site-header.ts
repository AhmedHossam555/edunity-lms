import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HEADER_CONFIG } from '@app/layout/configs';
import {
  ARROW_ICON,
  LOGIN_ICON,
  SEARCH_ICON,
  SOCIAL_ICONS,
  TOP_BAR_ICONS,
} from '@app/layout/constants';
import { NavLinkId } from '@app/layout/enums';
import { IHeaderConfig, INavLink } from '@app/layout/interfaces';
import { safeSvg } from '@app/shared/utils/svg.util';

@Component({
  selector: 'app-main-site-header',
  imports: [],
  templateUrl: './main-site-header.html',
  styleUrl: './main-site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSiteHeader {
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  //  Reactive header configuration
  // ─────────────────────────────────────────────────────────────
  /** Static content config exposed as a signal for reactive templates. */
  protected readonly config = signal<IHeaderConfig>(HEADER_CONFIG);

  // ─────────────────────────────────────────────────────────────
  //  Component state
  // ─────────────────────────────────────────────────────────────

  /** Controls mobile menu visibility and aria-expanded state. */
  protected readonly isMobileMenuOpen = signal(false);

  // ─────────────────────────────────────────────────────────────
  //  Sanitized top bar icons
  // ─────────────────────────────────────────────────────────────

  protected readonly topBarIconsSafe = computed<Record<string, SafeHtml>>(() => {
    const result: Record<string, SafeHtml> = {};

    for (const item of this.config().topBar.infoItems) {
      result[item.iconKey] = safeSvg(this.sanitizer, TOP_BAR_ICONS[item.iconKey]);
    }

    return result;
  });

  // ─────────────────────────────────────────────────────────────
  //  Sanitized social media icons
  // ─────────────────────────────────────────────────────────────

  protected readonly socialIconsSafe = computed<Record<string, SafeHtml>>(() => {
    const result: Record<string, SafeHtml> = {};

    for (const social of this.config().topBar.socials) {
      result[social.platform] = safeSvg(this.sanitizer, SOCIAL_ICONS[social.platform]);
    }

    return result;
  });

  // ─────────────────────────────────────────────────────────────
  //  Sanitized standalone icons
  // ─────────────────────────────────────────────────────────────
  protected readonly loginIconSafe = computed<SafeHtml>(() => safeSvg(this.sanitizer, LOGIN_ICON));
  protected readonly searchIconSafe = computed<SafeHtml>(() =>
    safeSvg(this.sanitizer, SEARCH_ICON),
  );
  protected readonly arrowIconSafe = computed<SafeHtml>(() => safeSvg(this.sanitizer, ARROW_ICON));

  // ─────────────────────────────────────────────────────────────
  //  Derived navigation data
  // ─────────────────────────────────────────────────────────────
  protected readonly navLinks = computed<INavLink[]>(() => this.config().navbar.links);

  // ─────────────────────────────────────────────────────────────
  //  Public methods
  // ─────────────────────────────────────────────────────────────

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  protected isActiveLink(id: NavLinkId): boolean {
    return this.navLinks().some((link) => link.id === id && link.active);
  }

  protected trackByLinkId(_index: number, link: INavLink): NavLinkId {
    return link.id;
  }
}
