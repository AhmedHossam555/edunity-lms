import { Route } from '@angular/router';
import { ManualRoutes } from '@app/core/navigation';

export function buildRouteGroup(
  paths: ManualRoutes[],
  load: () => Promise<any>
): Route[] {
  return paths.map(path => ({
    path,
    loadComponent: load,
  }));
}