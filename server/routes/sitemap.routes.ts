import { Router } from 'express';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { generateSitemap, generateSitemapIndex } from '../sitemap/sitemap.generator';
import { SitemapService } from '../sitemap/sitemap.service';

export function createSitemapRouter(distFolder: string): Router {
  const router = Router();
  const sitemapService = new SitemapService();

  // Main sitemap index
  router.get('/sitemap.xml', (req, res) => {
    const base = 'https://edunity-lms.net';
    const xml = generateSitemapIndex([
      `${base}/sitemaps/local.xml`,
    ]);
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(xml);
  });

  // Static local sitemap (copied from src/sitemap.xml)
  router.get('/sitemaps/local.xml', (req, res) => {
    const filePath = join(distFolder, 'sitemap.xml');
    if (!existsSync(filePath)) {
      console.error(`[local.xml] not found at ${filePath}`);
      res.status(404).send('Not found');
      return;
    }
    const xml = readFileSync(filePath, 'utf-8');
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(xml);
  });

  // router.get('/sitemaps/xxx.xml', async (req, res) => {
  //   const urls = await sitemapService.getSeminarsSitemap();
  //   res.setHeader('Content-Type', 'application/xml');
  //   res.send(generateSitemap(urls));
  // });

  return router;
}
