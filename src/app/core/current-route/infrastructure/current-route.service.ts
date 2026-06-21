import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Params, Data, UrlSegment } from '@angular/router';
import { PlatformService } from '@app/core/platform/platform.service';
import { filter } from 'rxjs';
import { ICurrentRouteInfo } from '../domain/current-route.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrentRouteService {
  // ----------------- Injected Services -----------------
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly platform = inject(PlatformService);

  // ----------------- Signals -----------------
  /** Reactive current route information */
  readonly currentRoute: WritableSignal<ICurrentRouteInfo> = signal({
    fullPath: '',
    params: {},
    queryParams: {},
    data: null,
  });

  constructor() {
    this.listenToRouteChanges();
  }

  // ----------------- Public Getters -----------------

  /** Current full path */
  get fullPath(): string {
    return this.currentRoute().fullPath;
  }

  /** Current route parameters */
  get params(): Params {
    return this.currentRoute().params;
  }

  /** Current query parameters */
  get queryParams(): Params {
    return this.currentRoute().queryParams;
  }

  /** Current route data */
  get data(): Data | null {
    return this.currentRoute().data;
  }

  // ----------------- Private Methods -----------------

  /** Listen to NavigationEnd events and update route signal (SSR-safe) */
  private listenToRouteChanges(): void {
    if (this.platform.isServer) return;

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.currentRoute.set(this.buildCurrentRouteInfo()));
  }

  /** Build reactive route info object */
  private buildCurrentRouteInfo(): ICurrentRouteInfo {
    const deepestRoute = this.getDeepestRoute();
    return {
      fullPath: this.computeFullPath(deepestRoute),
      params: deepestRoute.snapshot.params ?? {},
      queryParams: deepestRoute.snapshot.queryParams ?? {},
      data: deepestRoute.snapshot.data ?? null,
    };
  }

  /** Traverse to the deepest active route */
  private getDeepestRoute(): ActivatedRoute {
    let route: ActivatedRoute = this.activatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  /** Compute full path by combining all parent URL segments */
  private computeFullPath(route: ActivatedRoute): string {
    const segments: string[] = [];
    let current: ActivatedRoute | null = route;

    while (current) {
      if (current.snapshot.url?.length) {
        segments.unshift(...current.snapshot.url.map((s: UrlSegment) => s.path));
      }
      current = current.parent;
    }

    return '/' + segments.join('/');
  }
}
