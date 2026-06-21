import { EnvironmentName, IAppEnvironment } from '@env/schema';
import { BASE_ENVIRONMENT } from '@env/base';
import {
  API_CONFIG_BY_ENV,
  CACHE_CONFIG_BY_ENV,
  FEATURES_BY_ENV,
  LOGGING_CONFIG_BY_ENV,
  PORTS_BY_ENV,
} from '@env/constants';

export const environment: IAppEnvironment = {
  ...BASE_ENVIRONMENT,
  name: EnvironmentName.Local,
  production: false,
  port: PORTS_BY_ENV[EnvironmentName.Local],
  api: API_CONFIG_BY_ENV[EnvironmentName.Local],
  logging: LOGGING_CONFIG_BY_ENV[EnvironmentName.Local],
  features: FEATURES_BY_ENV[EnvironmentName.Local],
  cache: CACHE_CONFIG_BY_ENV[EnvironmentName.Local]
};
