# Base Environment Configuration

This file defines the **BASE environment configuration**, which serves as the default and fallback configuration for all other environments (Base, Local, Development, Test, UAT, Live).

---

## Configuration Overview

### Environment Identity
```ts
name: EnvironmentName.Base
```

Specifies the environment name (Base, Local, Development, Test, UAT, Live).

---

### Production Mode
```ts
production: false
```

Indicates whether the application is running in production mode.

---

### Server Port
```ts
port: PORTS_BY_ENV[EnvironmentName.Base]
```

Defines the port number on which the server or Angular SSR will run.

---

## API Configuration
```ts
api: {
  baseUrl: API_CONFIG_BY_ENV[EnvironmentName.Base].baseUrl,
  timeoutMs: API_CONFIG_BY_ENV[EnvironmentName.Base].timeoutMs,
}
```

**baseUrl**  
Base URL for all backend API requests.

**timeoutMs**  
Timeout duration for each HTTP request (in milliseconds).

---

## Logging Configuration
```ts
logging: {
  level: LOGGING_CONFIG_BY_ENV[EnvironmentName.Base].level,
  enableTimestamp: LOGGING_CONFIG_BY_ENV[EnvironmentName.Base].enableTimestamp,
}
```

**level**  
Controls log verbosity. Available levels: `trace`, `debug`, `info`, `warn`, `error`, `fatal`.

**enableTimestamp**  
When enabled, adds timestamps to each log entry.

---

## Feature Flags
```ts
features: {
  useInMemoryApi: FEATURES_BY_ENV[EnvironmentName.Base].useInMemoryApi,
}
```

**useInMemoryApi**  
- `true` → Uses a Mock API (ideal for frontend-only development and unit testing)
- `false` → Connects to the real backend infrastructure

---

## Cache Configuration
```ts
cache: {
  enabled: CACHE_CONFIG_BY_ENV[EnvironmentName.Base].enabled,
  ttlSeconds: CACHE_CONFIG_BY_ENV[EnvironmentName.Base].ttlSeconds,
}
```

**enabled**  
Enables or disables the caching system.

**ttlSeconds**  
Cache Time-To-Live in seconds (duration before cached data expires).

---

## Summary

This base configuration provides default values that can be overridden by environment-specific configurations, ensuring consistency across all deployment environments.