import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { NavigationService } from '../application/navigation.service';
import { PlatformService } from '@app/core/platform/platform.service';
import { NavigationIntent } from '../domain/navigation-intent.enum';

/**
 * Factory to create a guard that redirects if a condition is false.
 */
export function autoRedirectGuardFactory(
  conditionFn: () => boolean | Promise<boolean>,
  redirectPath: string
): CanActivateFn {
  return async () => {
    const platform = inject(PlatformService);
    const navigation = inject(NavigationService);

    if (!platform.isBrowser) return true; // SSR: always allow

    const condition = await conditionFn();
    if (!condition) {
      navigation.navigate({ intent: NavigationIntent.INTERNAL, pathOrUrl: redirectPath });
      return false;
    }

    return true;
  };
}
