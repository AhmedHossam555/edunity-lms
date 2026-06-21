# Environment Configuration System

A centralized, type-safe configuration system for managing multiple application environments (Local, Test, Dev, UAT, Live) with clear separation of concerns and full CI/CD support.

This design ensures consistency, scalability, and maintainability across all deployment stages.

## Folder Structure

```
environments/
├── schema/
│   ├── environment.types.ts     # EnvironmentName enum
│   ├── environment.model.ts     # Interfaces (IApiConfig, ILoggingConfig, etc.)
│   └── index.ts
│
├── base/
│   ├── environment.base.ts      # Default configuration template
│   └── index.ts
│
├── constants/
│   ├── api.constants.ts         # API URLs and timeouts per environment
│   ├── cache.constants.ts       # Cache settings per environment
│   ├── features.constants.ts    # Feature flags per environment
│   ├── logging.constants.ts     # Log levels per environment
│   ├── ports.constants.ts       # Server ports per environment
│   └── index.ts
│
├── presets/
│   ├── environment.local.ts     # Local development
│   ├── environment.test.ts      # Automated testing / CI
│   ├── environment.dev.ts       # Team development server
│   ├── environment.uat.ts       # QA and acceptance testing
│   └── environment.live.ts      # Production
│
├── environment.ts               # Active environment export
└── README.md
```

## Architecture Overview

The system uses a layered, composable architecture:

```
Schema (Contracts)
   ↓
Constants (Per-environment values)
   ↓
Base (Shared defaults)
   ↓
Presets (Complete environments)
   ↓
environment.ts (Active environment)
```

**This ensures:**
- No duplication
- Strong typing
- Clear ownership of responsibility

## Layer Details

### 1. Schema Layer (`schema/`)

Defines all TypeScript contracts to enforce consistency.

**Example:**
```typescript
export interface IAppEnvironment {
  name: EnvironmentName;
  production: boolean;
  port: number;
  api: IApiConfig;
  logging: ILoggingConfig;
  features: IFeatureFlags;
  cache: ICacheConfig;
}
```

**Purpose:**
- ✅ Compile-time safety
- ✅ Enforced structure across all environments
- ✅ IDE autocomplete & validation

### 2. Constants Layer (`constants/`)

Holds raw values per environment, grouped by responsibility.

**Files:**

| File | Responsibility |
|------|---------------|
| `api.constants.ts` | API base URLs & timeouts |
| `cache.constants.ts` | Cache enablement & TTL |
| `features.constants.ts` | Feature flags |
| `logging.constants.ts` | Log levels & formatting |
| `ports.constants.ts` | Server ports |

**Example - API Constants:**
```typescript
export const API_CONFIG_BY_ENV = {
  [EnvironmentName.Dev]: {
    baseUrl: 'https://dev.api.example.com/api',
    timeoutMs: 15000
  },
  [EnvironmentName.Live]: {
    baseUrl: 'https://api.example.com/api',
    timeoutMs: 7000
  }
};
```

**Purpose:**
- ✅ Single source of truth
- ✅ Easy to audit per environment
- ✅ Clean separation by domain

### 3. Base Layer (`base/`)

Defines shared defaults used by all environments.

**Example:**
```typescript
export const BASE_ENVIRONMENT: IAppEnvironment = {
  name: EnvironmentName.Base,
  production: false,
  port: PORTS_BY_ENV[EnvironmentName.Base],
  api: API_CONFIG_BY_ENV[EnvironmentName.Base],
  logging: LOGGING_CONFIG_BY_ENV[EnvironmentName.Base],
  features: FEATURES_BY_ENV[EnvironmentName.Base],
  cache: CACHE_CONFIG_BY_ENV[EnvironmentName.Base]
};
```

**Purpose:**
- ✅ Reduce duplication
- ✅ Ensure consistent baseline behavior
- ✅ Central place for shared defaults

### 4. Presets Layer (`presets/`)

Creates complete, ready-to-use environments by composing:
- Base defaults
- Constants for that environment

**Example - Dev:**
```typescript
export const environment: IAppEnvironment = {
  ...BASE_ENVIRONMENT,
  name: EnvironmentName.Dev,
  production: false,
  port: PORTS_BY_ENV[EnvironmentName.Dev],
  api: API_CONFIG_BY_ENV[EnvironmentName.Dev],
  logging: LOGGING_CONFIG_BY_ENV[EnvironmentName.Dev],
  features: FEATURES_BY_ENV[EnvironmentName.Dev],
  cache: CACHE_CONFIG_BY_ENV[EnvironmentName.Dev]
};
```

**Purpose:**
- ✅ Final environment objects
- ✅ No hardcoded values
- ✅ Easy to add new environments

### 5. Active Environment (`environment.ts`)

Single entry point for the app.

```typescript
export * from './presets/environment.local';
```

**Purpose:**
- ✅ One import path across the app
- ✅ Switch environments via build or CI/CD
- ✅ Zero code changes in business logic


## Switching Environments

### Option 1 - Manual (Local Testing)

```typescript
export * from './presets/environment.dev';
```

### Option 2 - Angular Build (Recommended)

Using `angular.json` file replacements:

```json
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/presets/environment.live.ts"
      }
    ]
  }
}
```

## Environment Matrix

| Environment | Purpose | Production | Typical Usage |
|------------|---------|------------|---------------|
| **Local** | Developer machine | ❌ No | Local dev, mocks |
| **Test** | CI / Automated tests | ❌ No | Unit & e2e tests |
| **Dev** | Shared dev server | ❌ No | Team integration |
| **UAT** | QA & acceptance | ⚠️ Sometimes | Business validation |
| **Live** | Production | ✅ Yes | Real users |