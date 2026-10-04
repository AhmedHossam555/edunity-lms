// core/seo/seo-route.listener.ts
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SeoWriter } from './seo-writer';
import { SeoMetadata, SeoRouteData } from './seo.model';

@Injectable({ providedIn: 'root' })
export class SeoRouteListener {
  private readonly router = inject(Router);
  private readonly writer = inject(SeoWriter);

  // Subscribing here keeps the listener alive for the app's lifetime
  private readonly _ = toSignal(
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
  );

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.apply());
  }

  private apply() {
    // Walk root -> deepest child; children override parents (layout-level defaults work)
    let snap: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;
    let merged: SeoMetadata = {};
    while (snap) {
      const raw = snap.data['seo'] as SeoRouteData | undefined;
      if (raw) {
        const value = typeof raw === 'function' ? raw(this.collectData(snap)) : raw;
        merged = { ...merged, ...value };
      }
      snap = snap.firstChild;
    }

    const path = this.router.url.split(/[?#]/)[0] || '/';
    this.writer.write(merged, path === '/' ? '' : path.replace(/\/$/, ''));
  }

  /** Resolved data of the route + its ancestors, so a seo(fn) can read e.g. data['product'] */
  private collectData(snap: ActivatedRouteSnapshot): Data {
    return { ...snap.parent?.data, ...snap.data };
  }
}