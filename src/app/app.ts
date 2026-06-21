import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NetworkStatusBannerComponent } from '@core/connectivity/ui/network-status-banner/network-status-banner.component';
import { NetworkStatusStore } from './core/connectivity/application/network-status.store';
import { APP_STATE, AppState } from './core/connectivity';
import { TranslationsService } from './core/i18n/services/translations.service';
import { LanguageSyncService } from './core/routing/application/language-sync.service';
import { TranslationsFacade } from './core/i18n';


@Component({
  selector: 'app-root',
  imports: [
    NetworkStatusBannerComponent,

],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // ─── dependencies ────────────────────────────────────────────────────────
  private readonly languageSyncService = inject(LanguageSyncService);
  private readonly networkStore = inject(NetworkStatusStore);


  // ─── state ───────────────────────────────────────────────────────────────

  protected readonly appState = computed<AppState>(() => {
    if (this.networkStore.isOffline()) {
      return APP_STATE.OFFLINE;
    }



    return APP_STATE.READY;
  });


}
