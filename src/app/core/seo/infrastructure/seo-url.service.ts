import { Injectable, inject } from '@angular/core';
import { DOCUMENT, PlatformLocation } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import {
  NavigationEnd,
  Router,
  UrlSerializer,
} from '@angular/router';

import { filter } from 'rxjs/operators';

import { PlatformService } from '@app/core/platform/platform.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SeoUrlService {
  private readonly doc = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly urlSerializer = inject(UrlSerializer);
  private readonly platform = inject(PlatformService);
  private readonly platformLocation = inject(PlatformLocation);

  initialize(): void {
    this.refreshSeoUrls();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.refreshSeoUrls();
      });
  }

  refreshSeoUrls(): void {
    const url = this.getFullUrl();

    if (url) {
      this.updateUrls(url);
    }

    this.updateHreflangs(this.buildHreflangs());
  }

  private updateUrls(url: string): void {
    this.meta.updateTag({
      property: 'og:url',
      content: url,
    });

    this.meta.updateTag({
      name: 'twitter:url',
      content: url,
    });

    this.meta.updateTag({
      name: 'url',
      content: url,
    });

    this.updateCanonical(url);
  }

  getFullUrl(): string {
    const baseUrl = environment.publicUrl.replace(/\/$/, '');

    const currentUrl = this.platform.isBrowser
      ? this.router.url
      : `${this.platformLocation.pathname}${this.platformLocation.search}`;

    const normalizedUrl = this.urlSerializer.serialize(
      this.urlSerializer.parse(currentUrl)
    );

    return `${baseUrl}${encodeURI(normalizedUrl)}`;
  }

  private updateCanonical(url: string): void {
    let link = this.doc.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement | null;

    if (!link) {
      link = this.doc.createElement('link');

      link.rel = 'canonical';

      this.doc.head.appendChild(link);
    }

    link.href = url;
  }

  private updateHreflangs(
    hreflangs: { lang: string; url: string }[]
  ): void {
    this.doc.head
      .querySelectorAll("link[rel='alternate'][hreflang]")
      .forEach(element => element.remove());

    hreflangs.forEach(({ lang, url }) => {
      const link = this.doc.createElement('link');

      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = url;

      this.doc.head.appendChild(link);
    });
  }

  private buildHreflangs(): { lang: string; url: string }[] {
    const baseUrl = environment.publicUrl.replace(/\/$/, '');

    const currentPath = this.platform.isBrowser
      ? this.router.url.split('?')[0]
      : this.platformLocation.pathname;

    const normalizedPath = this.urlSerializer.serialize(
      this.urlSerializer.parse(currentPath)
    );

    const cleanPath =
      normalizedPath.replace(/^\/(ar|en)(?=\/|$)/, '') || '/';

    return [
      {
        lang: 'ar',
        url: `${baseUrl}/ar${cleanPath}`,
      },
      {
        lang: 'en',
        url: `${baseUrl}/en${cleanPath}`,
      },
      {
        lang: 'x-default',
        url: `${baseUrl}/en${cleanPath}`,
      },
    ];
  }
}