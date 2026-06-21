import {
  Route,
  Routes,
  CanMatchFn,
  CanActivateFn,
  CanDeactivateFn,
  ResolveFn,
} from '@angular/router';

/**
 * Creates routes with optional :lang prefix (Angular 21 style)
 */
export function createRoutesWithLang(
  path: string | string[],
  config: {
    loadComponent?: () => Promise<any>;
    loadChildren?: () => Promise<any>;
    redirectTo?: string;
    pathMatch?: 'full' | 'prefix';
    data?: Record<string, any>;
    children?: Routes;
    resolve?: Record<string, ResolveFn<any>>; // ← add this
    canMatch?: CanMatchFn | CanMatchFn[];
    canActivate?: CanActivateFn | CanActivateFn[];
    canDeactivate?: CanDeactivateFn<any> | CanDeactivateFn<any>[];
  }
): Routes {
  const normalizeGuards = <T>(guard?: T | T[]): T[] | undefined =>
    guard ? (Array.isArray(guard) ? guard : [guard]) : undefined;

  const buildForSinglePath = (singlePath: string): Routes => {
    const baseRoute: Route = {
      path: singlePath,
      pathMatch: config.pathMatch ?? 'full',
      loadComponent: config.loadComponent,
      loadChildren: config.loadChildren,
      redirectTo: config.redirectTo,
      data: config.data,
      children: config.children,
      resolve: config.resolve,        // ← add this
      canMatch: normalizeGuards(config.canMatch),
      canActivate: normalizeGuards(config.canActivate),
      canDeactivate: normalizeGuards(config.canDeactivate),
    };

    return [
      baseRoute,
      { ...baseRoute, path: `:lang/${singlePath}` },
    ];
  };

  const paths = Array.isArray(path) ? path : [path];
  return paths.flatMap(buildForSinglePath);
}

/**
 * Creates child routes for multiple paths (component-based)
 */
export function createChildComponentRoutes(
  paths: string[],
  loadComponent: () => Promise<any>,
  data?: Record<string, any>
): Routes {
  return paths.map((path) => ({
    path,
    loadComponent,
    data,
  }));
}

/**
 * Creates multiple component routes (supports :lang prefix automatically)
 */
export function createComponentRoutes(
  paths: string[],
  loadComponent: () => Promise<any>,
  data?: Record<string, any>
): Routes {
  return paths.flatMap((path) =>
    createRoutesWithLang(path, {
      loadComponent,
      data,
    })
  );
}