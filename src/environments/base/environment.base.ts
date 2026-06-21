import {
  API_CONFIG_BY_ENV,
  CACHE_CONFIG_BY_ENV,
  FEATURES_BY_ENV,
  PORTS_BY_ENV,
  LOGGING_CONFIG_BY_ENV,
} from '@env/constants';
import { IAppEnvironment, EnvironmentName } from '@env/schema';

export const BASE_ENVIRONMENT: IAppEnvironment = {
  name: EnvironmentName.Base,
  publicUrl: 'https://agrotebaint.com',
  production: false,
  port: PORTS_BY_ENV[EnvironmentName.Base],
  api: API_CONFIG_BY_ENV[EnvironmentName.Base],
  logging: LOGGING_CONFIG_BY_ENV[EnvironmentName.Base],
  features: FEATURES_BY_ENV[EnvironmentName.Base],
  cache: CACHE_CONFIG_BY_ENV[EnvironmentName.Base]
};
