import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  input,
  output,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthFacade } from '@app/features/auth/facades';
import { AuthState } from '@app/features/auth/services';
import { Sidebar } from '@app/layout/components/sidebar/sidebar';
import { HEADER_CONFIG } from '@app/layout/configs';
import {
  ARROW_ICON,
  LOGIN_ICON,
  SEARCH_ICON,
  SOCIAL_ICONS,
  TOP_BAR_ICONS,
} from '@app/layout/constants';
import { NavLinkId } from '@app/layout/enums';
import { IHeaderConfig, INavLink, ITopBarInfoItem } from '@app/layout/interfaces';
import { safeSvg } from '@app/shared/utils/svg.util';

@Component({
  selector: 'app-main-site-header',
  imports: [Sidebar, RouterLink, RouterLinkActive],
  templateUrl: './main-site-header.html',
  styleUrl: './main-site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSiteHeader {
  // ─────────────────────────────────────────────────────────────
  //  Dependencies
  // ─────────────────────────────────────────────────────────────
  private readonly sanitizer = inject(DomSanitizer);
  private readonly authState = inject(AuthState);
  private readonly authFacade = inject(AuthFacade);
  private readonly router = inject(Router);

  // ─────────────────────────────────────────────────────────────
  //  Inputs
  // ─────────────────────────────────────────────────────────────
  /** Current page path for active link detection */
  currentPath = input<string>('');

  /** Optional custom configuration */
  config = input<IHeaderConfig>(HEADER_CONFIG);

  // ─────────────────────────────────────────────────────────────
  //  Outputs
  // ─────────────────────────────────────────────────────────────
  /** Emitted when a navigation link is clicked */
  navigate = output<INavLink>();

  // ─────────────────────────────────────────────────────────────
  //  State
  // ─────────────────────────────────────────────────────────────
  /** Controls mobile menu visibility and aria-expanded state. */
  protected readonly isMobileMenuOpen = signal(false);

  // ─────────────────────────────────────────────────────────────
  //  Computed - User
  // ─────────────────────────────────────────────────────────────
  protected readonly user = this.authState.user;
  protected readonly isAuthenticated = this.authFacade.isAuthenticated;
  protected readonly userInitial = computed(
    () => this.user()?.fullName?.charAt(0)?.toUpperCase() ?? '?',
  );

  // ─────────────────────────────────────────────────────────────
  //  Computed - Sanitized Icons
  // ─────────────────────────────────────────────────────────────
  protected readonly loginIconSafe = computed<SafeHtml>(() => safeSvg(this.sanitizer, LOGIN_ICON));
  protected readonly searchIconSafe = computed<SafeHtml>(() =>
    safeSvg(this.sanitizer, SEARCH_ICON),
  );
  protected readonly arrowIconSafe = computed<SafeHtml>(() => safeSvg(this.sanitizer, ARROW_ICON));

  protected readonly topBarIconsSafe = computed<Record<string, SafeHtml>>(() => {
    const result: Record<string, SafeHtml> = {};

    for (const item of this.config().topBar.infoItems) {
      result[item.iconKey] = safeSvg(this.sanitizer, TOP_BAR_ICONS[item.iconKey]);
    }

    return result;
  });

  protected readonly socialIconsSafe = computed<Record<string, SafeHtml>>(() => {
    const result: Record<string, SafeHtml> = {};

    for (const social of this.config().topBar.socials) {
      result[social.platform] = safeSvg(this.sanitizer, SOCIAL_ICONS[social.platform]);
    }

    return result;
  });

  // ─────────────────────────────────────────────────────────────
  //  Computed - Navigation
  // ─────────────────────────────────────────────────────────────
  protected readonly navLinks = computed<INavLink[]>(() => this.config().navbar.links);

  // ─────────────────────────────────────────────────────────────
  //  Public Methods
  // ─────────────────────────────────────────────────────────────
  /** Toggle mobile menu open/closed state */
  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  /** Close the mobile menu */
  protected closeSidebar(): void {
    this.isMobileMenuOpen.set(false);
  }

  /** Handle navigation events from sidebar */
  protected onNavigate(link: INavLink): void {
    this.navigate.emit(link);
    this.closeSidebar();
  }

  /** Check if a navigation link is active */
  protected isActiveLink(id: NavLinkId): boolean {
    return this.navLinks().some((link) => link.id === id && link.active);
  }

  /** Track function for navigation links */
  protected trackByLinkId(_index: number, link: INavLink): NavLinkId {
    return link.id;
  }

  /** Handle location click */
  protected onLocationClick(item: ITopBarInfoItem): void {
    if (item.clickType === 'location' && item.href) {
      window.open(item.href, '_blank');
    }
  }

  /** Logout user */
  logout(): void {
    this.authFacade.logout();
    this.closeSidebar();
    this.router.navigateByUrl('/');
  }
}