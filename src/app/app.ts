import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NetworkStatusBannerComponent } from '@core/connectivity/ui/network-status-banner/network-status-banner.component';

import { APP_STATE, AppState } from './core/connectivity';
import { NetworkStatusStore } from './core/connectivity/application/network-status.store';
import { MainSiteFooter } from './layout/components/main-site-footer/main-site-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NetworkStatusBannerComponent, MainSiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // ─── constants ───────────────────────────────────────────────────────────
  protected readonly APP_STATE = APP_STATE;

  // ─── dependencies ────────────────────────────────────────────────────────
  private readonly networkStore = inject(NetworkStatusStore);

  // ─── computed state ──────────────────────────────────────────────────────
  protected readonly appState = computed<AppState>(() =>
    this.networkStore.isOffline() ? APP_STATE.OFFLINE : APP_STATE.READY,
  );
}
