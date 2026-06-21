import { Injectable, inject, NgZone } from '@angular/core';
import { fromEvent, merge, Observable, of } from 'rxjs';
import { map, startWith, shareReplay } from 'rxjs/operators';
import { PlatformService } from '@core/platform/platform.service';
import { NetworkConnectionStatus } from '../domain';

@Injectable({ providedIn: 'root' })
export class NetworkService {
  private readonly platform = inject(PlatformService);
  private readonly zone = inject(NgZone);

  /**
   * Emits current network connection status.
   * SSR-safe: always Online on server.
   */
  readonly status$: Observable<NetworkConnectionStatus> =
    this.platform.isBrowser
      ? this.createBrowserStatus$()
      : of(NetworkConnectionStatus.Online);

  private createBrowserStatus$(): Observable<NetworkConnectionStatus> {
    return this.zone.runOutsideAngular(() =>
      merge(
        fromEvent(window, 'online').pipe(
          map(() => NetworkConnectionStatus.Online)
        ),
        fromEvent(window, 'offline').pipe(
          map(() => NetworkConnectionStatus.Offline)
        )
      ).pipe(
        startWith(
          typeof navigator !== 'undefined' && navigator.onLine
            ? NetworkConnectionStatus.Online
            : NetworkConnectionStatus.Offline
        ),
        shareReplay({ bufferSize: 1, refCount: true })
      )
    );
  }
}
