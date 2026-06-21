import { Params, Data } from "@angular/router";

export interface ICurrentRouteInfo {
  fullPath: string;
  params: Params;
  queryParams: Params;
  data: Data | null;
}