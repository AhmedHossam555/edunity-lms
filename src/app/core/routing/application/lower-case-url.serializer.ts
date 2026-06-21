  import { UrlSerializer, UrlTree, DefaultUrlSerializer } from '@angular/router';

  export class LowerCaseUrlSerializer implements UrlSerializer {
    private defaultSerializer = new DefaultUrlSerializer();

    // Segments that are dynamic values (slugs, IDs) – keep original case
    private isSlugSegment(segment: string): boolean {
      return (
        /[^a-zA-Z0-9_-]/.test(segment) ||   // contains non-ASCII or special chars (e.g. %D8...)
        /^\d+$/.test(segment) ||              // pure numeric ID (e.g. 81)
        /-/.test(segment)                     // hyphenated slug (e.g. Nshr-aalakat-...)
      );
    }

  parse(url: string): UrlTree {
    const [path, query] = url.split('?');
    const segments = path.split('/').filter(Boolean);

    const normalizedSegments = segments.map((segment, index) => {

      // إذا هذا segment هو "category_slug" نفسه
      if (segment === 'category_slug') {
        return segment;
      }

      // أو إذا هو value بعد category_slug
      if (segments[index - 1] === 'category_slug') {
        return segment; // لا lowercase
      }

      return this.isSlugSegment(segment)
        ? segment
        : segment.toLowerCase();
    });

    const normalizedPath = '/' + normalizedSegments.join('/');
    const normalizedUrl = query ? `${normalizedPath}?${query}` : normalizedPath;

    return this.defaultSerializer.parse(normalizedUrl);
  }

    serialize(tree: UrlTree): string {
      return this.defaultSerializer.serialize(tree);
    }
  }