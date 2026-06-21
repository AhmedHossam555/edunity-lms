export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  images?: { loc: string; title?: string; caption?: string }[];
  video?: { thumbnail_loc: string; title: string; description: string; content_loc?: string };
  news?: { publication_date: string; title: string; keywords?: string };
}

export function generateSitemap(urls: SitemapUrl[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls.map(u => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq || 'weekly'}</changefreq>
    <priority>${u.priority ?? 0.7}</priority>
    ${generateImageTags(u.images)}
    ${generateVideoTag(u.video)}
    ${generateNewsTag(u.news)}
  </url>`).join('')}
</urlset>`;
}

export function generateSitemapIndex(sitemapUrls: string[]): string {
  const today = new Date().toISOString().split('T')[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `
  <sitemap>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;
}

function generateImageTags(images?: SitemapUrl['images']): string {
  if (!images || images.length === 0) return '';
  return images.map(img => `
    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      ${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}
      ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>`).join('');
}

function generateVideoTag(video?: SitemapUrl['video']): string {
  if (!video) return '';
  return `
    <video:video>
      <video:thumbnail_loc>${escapeXml(video.thumbnail_loc)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      ${video.content_loc ? `<video:content_loc>${escapeXml(video.content_loc)}</video:content_loc>` : ''}
    </video:video>`;
}

function generateNewsTag(news?: SitemapUrl['news']): string {
  if (!news) return '';
  return `
    <news:news>
      <news:publication_date>${news.publication_date}</news:publication_date>
      <news:title>${escapeXml(news.title)}</news:title>
      ${news.keywords ? `<news:keywords>${escapeXml(news.keywords)}</news:keywords>` : ''}
    </news:news>`;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
