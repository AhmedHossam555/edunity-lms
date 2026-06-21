import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { IMetaTag, IRouteMeta } from '../domain';
import { PlatformService } from '@app/core/platform/platform.service';

import { TranslationsFacade } from '@app/core/i18n/services/translations.facade';
import { TranslationsService } from '@app/core/i18n/services/translations.service';
import { LanguageManagerService } from '@app/core/i18n/services/language-manager.service';

import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class MetaService {
  private meta = inject(Meta);
  private title = inject(Title);
  private router = inject(Router);
  private doc = inject(DOCUMENT);
  private platform = inject(PlatformService);
  private platformLocation = inject(PlatformLocation);

  private translationsFacade = inject(TranslationsFacade);
  private languageManager = inject(LanguageManagerService);


  /**
   * SSR-safe full URL
   */

  /**
   * Safe translation (SSR + CSR)
   */
protected readonly translate = (key: string): string => {
  const result = this.translationsFacade.translate(key);
  // If result equals the key, translations aren't loaded yet
  return result ?? key;
};

  /**
   * MAIN SEO ENTRY
   */
  updateTags(tags: IMetaTag & IRouteMeta) {
  ;
    const currentLang = this.languageManager.currentLanguage();
    // ---------- TITLE ----------
    if (tags.title) {
      const t = this.translate(tags.title);

      this.title.setTitle(t);
      this.meta.updateTag({ property: 'og:title', content: t });
      this.meta.updateTag({ name: 'twitter:title', content: t });
    }

    // ---------- DESCRIPTION ----------
    if (tags.description) {
      const d = this.translate(tags.description);

      this.meta.updateTag({ name: 'description', content: d });
      this.meta.updateTag({ property: 'og:description', content: d });
      this.meta.updateTag({ name: 'twitter:description', content: d });
    }

    // ---------- KEYWORDS ----------
    if (tags.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: this.translate(tags.keywords),
      });
    }

    // ---------- AUTHOR ----------
    if (tags.author) {
      this.meta.updateTag({
        name: 'author',
        content: this.translate(tags.author),
      });
    }

    // ---------- ROBOTS ----------
    if (tags.robots) {
      this.meta.updateTag({
        name: 'robots',
        content: this.translate(tags.robots),
      });
    }

    // ---------- OPEN GRAPH ----------
    if (tags.ogType) {
      this.meta.updateTag({
        property: 'og:type',
        content: this.translate(tags.ogType),
      });
    }

    if (tags.siteName) {
      this.meta.updateTag({
        property: 'og:site_name',
        content: this.translate(tags.siteName),
      });
    }

    if (tags.locale) {
      this.meta.updateTag({
        property: 'og:locale',
        content: this.translate(tags.locale),
      });
    }

    // ---------- TWITTER ----------
    if (tags.twitterCard) {
      this.meta.updateTag({
        name: 'twitter:card',
        content: this.translate(tags.twitterCard),
      });
    }

    // ---------- IMAGE ----------
    if (tags.image) {
      this.meta.updateTag({ property: 'og:image', content: tags.image });
      this.meta.updateTag({ name: 'twitter:image', content: tags.image });
    }



    // ---------- HREFLANG (AUTO) ----------
  }

  /**
   * Canonical (SSR-safe)
   */
private updateCanonical(url: string) {
  let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement;

  if (!link) {
    link = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link); // ✅ create if missing on CSR too
  }

  link.setAttribute('href', url);
}


}