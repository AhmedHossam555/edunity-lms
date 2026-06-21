// seo.module.ts
import { NgModule, PLATFORM_ID, TransferState, inject, makeStateKey } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MetaService } from './application';
import { ROUTE_META } from './infrastructure';

const SEO_STATE_KEY = makeStateKey<any>('seo-state');

@NgModule({ imports: [CommonModule] })
export class SeoModule {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private transferState = inject(TransferState);

constructor() {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);
  const metaService = inject(MetaService);

  if (!isBrowser) {
    const route = this.getDeepestRoute(this.activatedRoute);
    const seoKey = route.snapshot.data['seoKey'];
    const tags = seoKey ? ROUTE_META[seoKey] : null;
    if (tags) {
      metaService.updateTags(tags);
      this.transferState.set(SEO_STATE_KEY, tags);
    }
    return;
  }

  // BROWSER: defer everything until after app init via NavigationEnd
  // Remove the synchronous TransferState restore — let the first NavigationEnd handle it
  let isFirstNavigation = true;

  this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe(() => {
      if (isFirstNavigation) {
        isFirstNavigation = false;

        // Restore from TransferState on first nav (translations now loaded)
        if (this.transferState.hasKey(SEO_STATE_KEY)) {
          const storedTags = this.transferState.get(SEO_STATE_KEY, null);
          if (storedTags) metaService.updateTags(storedTags);
          this.transferState.remove(SEO_STATE_KEY);
        }
        return;
      }

      const route = this.getDeepestRoute(this.activatedRoute);
      const seoKey = route.snapshot.data['seoKey'];
      const tags = seoKey ? ROUTE_META[seoKey] : null;
      if (tags) metaService.updateTags(tags);
    });
}

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) route = route.firstChild;
    return route;
  }
}