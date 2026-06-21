import { NavigationIntent } from "./navigation-intent.enum";
export interface INavigationCommand {
  intent: NavigationIntent;        // navigation goal
  pathOrUrl: string;               // internal path or external URL
  queryParams?: Record<string, unknown>; // optional query parameters
}
