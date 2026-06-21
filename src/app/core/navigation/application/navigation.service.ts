import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformService } from '@core/platform/platform.service';
import { NavigationIntent, INavigationCommand } from '../domain';
import { Logger } from '@app/core/logging/logger';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);
  private readonly platform = inject(PlatformService);

  /**
   * Navigate based on the command.
   * SSR-safe: skips navigation on the server.
   */
  navigate(command: INavigationCommand): void {
    if (!this.platform.isBrowser) {
      Logger.debug('[NavigationService] SSR: Navigation skipped:', command);
      return;
    }

    switch (command.intent) {
      case NavigationIntent.INTERNAL:
        this.router.navigate([command.pathOrUrl], { queryParams: command.queryParams });
        break;
      case NavigationIntent.EXTERNAL_NEW_TAB:
        window.open(command.pathOrUrl, '_blank', 'noopener,noreferrer');
        break;
      case NavigationIntent.EXTERNAL_SAME_TAB:
        window.location.href = command.pathOrUrl;
        break;
      default:
        Logger.warn('[NavigationService] Unknown navigation intent', command.intent);
    }
  }
}
