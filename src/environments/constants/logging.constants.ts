import { EnvironmentName, ILoggingConfig } from '@env/schema';
import { LogLevel } from '@core/logging/log-level.enum';

export const LOGGING_CONFIG_BY_ENV: Record<EnvironmentName, ILoggingConfig> = {
  [EnvironmentName.Base]: {
    level: LogLevel.Trace,
    enableTimestamp: true
  },
  [EnvironmentName.Local]: {
    level: LogLevel.Debug,
    enableTimestamp: false
  },
  [EnvironmentName.Test]: {
    level: LogLevel.Warn,
    enableTimestamp: false
  },
  [EnvironmentName.Dev]: {
    level: LogLevel.Debug,
    enableTimestamp: true
  },
  [EnvironmentName.Uat]: {
    level: LogLevel.Info,
    enableTimestamp: true
  },
  [EnvironmentName.Live]: {
    level: LogLevel.Error,
    enableTimestamp: true
  }
};
