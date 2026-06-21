import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NetworkStatusStore } from '../../application/network-status.store';

@Component({
  selector: 'app-network-status-banner',
  standalone: true,
  templateUrl: './network-status-banner.component.html',
  styleUrls: ['./network-status-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkStatusBannerComponent {
  readonly store = inject(NetworkStatusStore);
}
