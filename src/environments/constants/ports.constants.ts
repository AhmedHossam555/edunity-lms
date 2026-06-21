import { EnvironmentName } from '../schema';

export const PORTS_BY_ENV: Record<EnvironmentName, number> = {
  [EnvironmentName.Base]: 4500,
  [EnvironmentName.Local]: 4400,
  [EnvironmentName.Test]: 4300,
  [EnvironmentName.Dev]: 4200,
  [EnvironmentName.Uat]: 4100,
  [EnvironmentName.Live]: 4000
};
