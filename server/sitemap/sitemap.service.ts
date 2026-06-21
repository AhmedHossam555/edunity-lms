import { FetchService } from '../core/fetch.service';
import { SitemapCacheService } from '../core/sitemap-cache.service';
import { SitemapPaginator } from './sitemap.paginator';
import { SitemapUrl } from './sitemap.generator';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
export interface SitemapSource {
  fetchAll(): Promise<SitemapUrl[]>;
}

export class SitemapService {
  private fetchService: FetchService;
  private cache: SitemapCacheService;
  private paginator: SitemapPaginator;

  constructor() {
    this.fetchService = new FetchService();
    this.cache = new SitemapCacheService();
    this.paginator = new SitemapPaginator(this.fetchService);
  }

  // --------------------------------------------------------
  // STATIC SITEMAP PARSER (CANONICAL SOURCE OF TRUTH)
  // --------------------------------------------------------
  private getStaticSitemapUrls(distFolder: string): Set<string> {
    try {
      const filePath = join(distFolder, 'sitemap.xml');
      if (!existsSync(filePath)) return new Set();

      const xml = readFileSync(filePath, 'utf-8');

      const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
      return new Set(matches.map(m => m[1].trim()));
    } catch {
      return new Set();
    }
  }



  // --------------------------------------------------------
  // SEMINARS
  // --------------------------------------------------------
  // async getSeminarsSitemap(): Promise<SitemapUrl[]> {
  //   const cacheKey = 'sitemap_seminars';
  //   const cached = this.cache.get<SitemapUrl[]>(cacheKey);
  //   if (cached) return cached;

  //   const data = await this.fetchService.get('https://api.talbinah.net/site/seminars');
  //   const items = data?.data || [];

  //   const urls: SitemapUrl[] = items.map((s: any) => ({
  //     loc: `https://talbinah.net/seminars/details/${s.id}`,
  //     lastmod: s.time,
  //     priority: 0.6,
  //     video: s.recording_url
  //       ? {
  //           thumbnail_loc: s.thumbnail_url || 'https://talbinah.net/assets/default-video-thumb.jpg',
  //           title: s.title,
  //           description: s.description,
  //           content_loc: s.recording_url
  //         }
  //       : undefined
  //   }));

  //   this.cache.set(cacheKey, urls);
  //   return urls;
  // }
}