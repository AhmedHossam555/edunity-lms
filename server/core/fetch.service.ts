export interface FetchOptions {
  headers?: Record<string, string>;
  timeout?: number;
}

export class FetchService {
  async get<T = any>(
    url: string,
    options?: FetchOptions,
  ): Promise<T | null> {
    console.log(`[FetchService] ➜ ${url}`);

    try {
      const controller = new AbortController();

      const timeout = options?.timeout ?? 30000;

      const timeoutId = setTimeout(
        () => controller.abort(),
        timeout,
      );

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          ...options?.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as T;

      console.log(
        '[FetchService] ✓ success (sample)',
        JSON.stringify(data).slice(0, 200),
      );

      return data;
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        console.error(
          `[FetchService] ✗ Timeout after ${
            options?.timeout ?? 30000
          }ms: ${url}`,
        );
      } else {
        console.error(
          `[FetchService] ✗ Failed ${url}`,
          err?.message ?? err,
        );
      }

      return null;
    }
  }
}