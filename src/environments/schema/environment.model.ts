import { LogLevel } from '@app/core/logging/log-level.enum';
import { EnvironmentName } from './environment.types';

/** API configuration */
export interface IApiConfig {
  baseUrl: string;
  timeoutMs: number;
}

/** Logging configuration */
export interface ILoggingConfig {
  level: LogLevel;
  enableTimestamp: boolean;
}

/** Feature flags */
export interface IFeatureFlags {
  useInMemoryApi: boolean;
}

/** Cache configuration */
export interface ICacheConfig {
  enabled: boolean;
  ttlSeconds: number;
}

/** Root application environment */
export interface IAppEnvironment {
  name: EnvironmentName;
  publicUrl: string;
  production: boolean;
  port: number;
  api: IApiConfig;
  logging: ILoggingConfig;
  features: IFeatureFlags;
  cache: ICacheConfig;
}

/*
cache: {
  language: {
    enabled: false,
    ttlSeconds: 0
  },
  user: {
    enabled: false,
    ttlSeconds: 0
  },
  product: {
    enabled: false,
    ttlSeconds: 0
  }
}
*/
