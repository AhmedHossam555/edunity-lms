import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';

import express from 'express';
import { join } from 'node:path';

import { environment } from './environments/environment';
import { createSitemapRouter } from '../server/routes/sitemap.routes';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Static Assets
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    immutable: true,
    index: false,
    redirect: false,
  }),
);

/**
 * Sitemap Routes
 */
app.use(createSitemapRouter(browserDistFolder));

/**
 * Disable cache for SSR responses
 */
app.use((req, res, next) => {
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  );
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  next();
});

/**
 * URL Normalization
 */
app.use((req, res, next) => {
  const originalUrl = req.originalUrl;

    const [pathname, queryString] = originalUrl.split('?');

    // normalize path safely
    let cleanPath = pathname.replace(/\/{2,}/g, '/').replace(/\/$/, '');

    const segments = cleanPath.split('/');

    // lowercase ONLY first segment after "/"
    if (segments.length > 1 && segments[1]) {
      segments[1] = segments[1].toLowerCase();
    }

    const finalPath = segments.join('/');

    const qs = queryString ? `?${queryString}` : '';
    const finalUrl = finalPath + qs;

    // IMPORTANT FIX: compare against decoded + normalized version
    const normalizedOriginal = req.url
      .replace(/\/{2,}/g, '/')
      .replace(/\/$/, '');

    if (finalUrl !== normalizedOriginal) {
      return res.redirect(301, finalUrl);
    }

    next();
});

/**
 * Home Redirects
 */
app.get(['/Home', '/home', '/index.html'], (_req, res) => {
  return res.redirect(301, 'https://agro-teba-international.net/');
});

/**
 * Legacy SEO Redirect
 * /article?id=123 -> /article/123
 */
app.get('/{*any}', (req, res, next) => {
  if (
    req.path.startsWith('/sitemap') ||
    req.path.startsWith('/sitemaps') ||
    req.path.endsWith('.xml')
  ) {
    return next();
  }

  const id = req.query['id'];

  if (!id || typeof id !== 'string') {
    return next();
  }

  const cleanPath = `${req.path.replace(/\/$/, '')}/${id}`;

  const params = { ...req.query };
  delete params['id'];

  const qs = new URLSearchParams(
    params as Record<string, string>,
  ).toString();

  return res.redirect(
    301,
    qs ? `${cleanPath}?${qs}` : cleanPath,
  );
});

/**
 * Angular SSR Handler (must be last)
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (!response) {
        return next();
      }

      return writeResponseToNodeResponse(response, res);
    })
    .catch(next);
});

/**
 * Start Server
 */
if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] ?? environment.port);
  app.listen(port, () => {
    console.log(
      `🚀 SSR ${environment.name.toUpperCase()} running on http://localhost:${port}`,
    );
  });
}

export const reqHandler = createNodeRequestHandler(app);