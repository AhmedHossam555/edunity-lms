import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  input,
  output,
  effect,
} from '@angular/core';
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
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  private readonly sanitizer = inject(DomSanitizer);

  // ─────────────────────────────────────────────────────────────
  //  Inputs
  // ─────────────────────────────────────────────────────────────

  /** Controls sidebar open/closed state */
  isOpen = input<boolean>(false);

  /** Optional custom configuration */
  config = input<IHeaderConfig>(HEADER_CONFIG);

  /** Current page path for active link detection */
  currentPath = input<string>('');

  // ─────────────────────────────────────────────────────────────
  //  Outputs
  // ─────────────────────────────────────────────────────────────

  /** Emitted when sidebar should close */
  closeSidebar = output<void>();

  /** Emitted when a navigation link is clicked */
  navigate = output<INavLink>();

  // ─────────────────────────────────────────────────────────────
  //  Component state
  // ─────────────────────────────────────────────────────────────

  protected readonly isMobileMenuOpen = signal(false);

  // ─────────────────────────────────────────────────────────────
  //  Effects
  // ─────────────────────────────────────────────────────────────

  /** Sync sidebar open state with internal menu state */
  private readonly syncOpenState = effect(() => {
    this.isMobileMenuOpen.set(this.isOpen());
  });

  // ─────────────────────────────────────────────────────────────
  //  Sanitized icons
  // ─────────────────────────────────────────────────────────────

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

  /** Toggle the mobile menu state */
  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
    if (!this.isMobileMenuOpen()) {
      this.closeSidebar.emit();
    }
  }

  /** Close sidebar when overlay is clicked */
  protected handleOverlayClick(): void {
    this.closeSidebar.emit();
  }

  /** Check if a navigation link is active */
  protected isActiveLink(id: NavLinkId): boolean {
    return this.navLinks().some((link) => link.id === id && link.active);
  }

  /** Handle navigation link click */
  protected onNavLinkClick(link: INavLink): void {
    this.navigate.emit(link);
    this.closeSidebar.emit();
  }

  /** Track function for navigation links */
  protected trackByLinkId(_index: number, link: INavLink): NavLinkId {
    return link.id;
  }

  /** Handle info item click */
  protected onInfoItemClick(item: any): void {
    // If it's a location item, handle it specially
    if (item.clickType === 'location' && item.href) {
      // Optional: You can add analytics or other logic here
      console.log('Location clicked:', item.label);
      // The anchor tag will handle the navigation
      // Close sidebar after clicking (optional)
      this.closeSidebar.emit();
    }
  }

  // Add to Sidebar component
  protected readonly infoItems = computed(() => {
    return this.config().topBar.infoItems.map((item) => ({
      ...item,
      isClickable: item.clickType === 'location',
      target: item.clickType === 'location' ? '_blank' : undefined,
      rel: item.clickType === 'location' ? 'noopener noreferrer' : undefined,
    }));
  });
}
