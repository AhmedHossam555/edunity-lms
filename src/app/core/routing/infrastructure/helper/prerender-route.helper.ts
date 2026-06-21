import { RenderMode, ServerRoute } from "@angular/ssr";
import { SUPPORTED_LANGUAGES } from "@app/core/i18n/models/translation-config.model";

export function createPrerenderRoute(route: string): ServerRoute {
  return {
    path: route ? `:lang/${route}` : ':lang',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
    },
  };
}
