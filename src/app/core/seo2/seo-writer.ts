
import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { SEO_CONFIG } from './seo.config';
import { SeoMetadata } from './seo.model';

@Injectable({ providedIn: 'root' })
export class SeoWriter {
  private readonly cfg = inject(SEO_CONFIG);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  write(m: SeoMetadata, path: string): void {
    const c = this.cfg;
    const rawTitle = m.title ?? c.defaultTitle;
    const fullTitle = m.title
      ? c.titleTemplate.replace('%s', m.title)
      : c.defaultTitle;

    const description = (m.description ?? c.defaultDescription).slice(0, 160);
    const url = c.siteUrl + (m.canonicalPath ?? path);
    const image = this.abs(m.image ?? c.defaultImage);

    this.title.setTitle(fullTitle);

    const tags: MetaDefinition[] = [
      { name: 'description', content: description },
      {
        name: 'robots',
        content: m.noindex
          ? 'noindex,nofollow'
          : 'index,follow,max-image-preview:large',
      },
      { property: 'og:site_name', content: c.siteName },
      { property: 'og:locale', content: c.locale },
      { property: 'og:type', content: m.type ?? 'website' },
      { property: 'og:title', content: rawTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: rawTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      ...(c.twitterHandle
        ? [{ name: 'twitter:site', content: c.twitterHandle }]
        : []),
    ];

    tags.forEach(tag => this.meta.updateTag(tag));

    this.setCanonical(url);
    this.setJsonLd(m.jsonLd);
  }

  private abs(u: string): string {
    return /^https?:\/\//.test(u) ? u : this.cfg.siteUrl + u;
  }

  private setCanonical(url: string): void {
    let link =
      this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }

    link.href = url;
  }

  private setJsonLd(data?: SeoMetadata['jsonLd']): void {
    this.doc.head
      .querySelectorAll('script[data-seo-jsonld]')
      .forEach(n => n.remove());

    if (!data) return;

    const s = this.doc.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-seo-jsonld', '');

    // Escape "<" so content can never close the script tag.
    s.text = JSON.stringify(data).replace(/</g, '\\u003c');

    this.doc.head.appendChild(s);
  }
}

