/**
 * SSR-safe unique id generator.
 * Falls back to a counter + timestamp when crypto.randomUUID is unavailable
 * (e.g. during server-side rendering in older runtimes).
 */
let fallbackCounter = 0;

export function generateToastId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  fallbackCounter += 1;
  return `toast-${Date.now()}-${fallbackCounter}`;
}