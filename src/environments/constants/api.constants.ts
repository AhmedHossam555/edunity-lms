import { EnvironmentName, IApiConfig } from '@env/schema';

export const API_CONFIG_BY_ENV: Record<EnvironmentName, IApiConfig> = {
  [EnvironmentName.Base]: {
    baseUrl: `http://base.api.example.com/api`,
    timeoutMs: 20000
  },
  [EnvironmentName.Local]: {
    baseUrl: `http://local.api.example.com/api`,
    timeoutMs: 20000
  },
  [EnvironmentName.Test]: {
    baseUrl: `http://test.api.example.com/api`,
    timeoutMs: 15000
  },
  [EnvironmentName.Dev]: {
    baseUrl: `https://dev.api.example.com/api`,
    timeoutMs: 15000
  },
  [EnvironmentName.Uat]: {
    baseUrl: `https://uat.api.example.com`,
    timeoutMs: 10000
  },
  [EnvironmentName.Live]: {
    baseUrl: `https://api.example.com`,
    timeoutMs: 7000
  }
};
