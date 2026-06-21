import { FetchService } from '../core/fetch.service';

export interface PaginatedResponse {
  data: any[];
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
}

export class SitemapPaginator {
  constructor(private fetchService: FetchService) { }

  /**
   * Fetch all pages from a typical Laravel-style paginated API
   * @param baseUrl URL with optional query string (e.g., ?per_page=100)
   * @param pageParam query parameter name for page (default 'page')
   * @param dataPath dot-notation path to the data array (e.g., 'data.data' or 'data')
   */
  async fetchAllPages(baseUrl: string, pageParam = 'page', dataPath = 'data.data'): Promise<any[]> {
    let allItems: any[] = [];
    let currentPage = 1;
    let lastPage = 1;

    try {
      do {
        const url = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}${pageParam}=${currentPage}`;
        const response = await this.fetchService.get(url);
        if (!response) break;

        // Extract pagination meta
        const meta = response?.meta || response?.data?.meta || {};
        lastPage = meta.last_page || response?.last_page || currentPage;
        const items = this.getNestedValue(response, dataPath);
        if (Array.isArray(items)) {
          allItems.push(...items);
        }

        currentPage++;
      } while (currentPage <= lastPage);
    } catch (err) {
      console.error(`[Paginator] Error fetching pages for ${baseUrl}`, err);
    }

    return allItems;
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((o, key) => o?.[key], obj);
  }
}
