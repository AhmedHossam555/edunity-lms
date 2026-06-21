import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NetworkService } from '../infrastructure';
import { NetworkConnectionStatus } from '../domain';


@Injectable({ providedIn: 'root' })
export class NetworkStatusStore {
  private readonly network = inject(NetworkService);

  /** Source of truth for UI */
  readonly status = toSignal(this.network.status$, {
    initialValue: NetworkConnectionStatus.Online
  });

  readonly isOnline = computed(
    () => this.status() === NetworkConnectionStatus.Online
  );

  readonly isOffline = computed(
    () => this.status() === NetworkConnectionStatus.Offline
  );

  readonly statusText = computed(() =>
    this.isOnline() ? 'Online' : 'Offline'
  );
}
