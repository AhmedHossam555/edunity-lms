import { EnvironmentName, IFeatureFlags } from '@env/schema';

export const FEATURES_BY_ENV: Record<EnvironmentName, IFeatureFlags> = {
  [EnvironmentName.Base]: {
    useInMemoryApi: false
  },
  [EnvironmentName.Local]: {
    useInMemoryApi: true
  },
  [EnvironmentName.Test]: {
    useInMemoryApi: false
  },
  [EnvironmentName.Dev]: {
    useInMemoryApi: false
  },
  [EnvironmentName.Uat]: {
    useInMemoryApi: false
  },
  [EnvironmentName.Live]: {
    useInMemoryApi: false
  }
};
