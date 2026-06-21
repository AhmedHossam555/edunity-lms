import { EnvironmentName, ICacheConfig } from "@env/schema";

export const CACHE_CONFIG_BY_ENV: Record<EnvironmentName, ICacheConfig> = {
  [EnvironmentName.Base]: {
    enabled: false,
    ttlSeconds: 0
  },
  [EnvironmentName.Local]: {
    enabled: false,
    ttlSeconds: 0
  },
  [EnvironmentName.Test]: {
    enabled: true,
    ttlSeconds: 10      
  },
    [EnvironmentName.Dev]: {
    enabled: true,
    ttlSeconds: 30
  },
  [EnvironmentName.Uat]: {
    enabled: true,
    ttlSeconds: 300
  },
  [EnvironmentName.Live]: {
    enabled: true,
    ttlSeconds: 600
  }
};
