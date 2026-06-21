# 📘 Logging System

A centralized, environment-aware logging system for consistent and clean application logs.

---

## ✨ Features

- ✅ Consistent log format across the application
- ✅ Log level filtering by environment
- ✅ Clean, readable console output
- ✅ Easy debugging in development
- ✅ Minimal noise in production

> **Note:** All application logs must go through the `Logger` class. Direct usage of `console.*` in application code is discouraged.

---

## 📁 File Structure

```
logging/
├── logger.ts
├── log-level.enum.ts
└── README.md
```

---

## 🎯 Log Levels

```typescript
export enum LogLevel {
  Trace = 'trace',
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
  Silent = 'silent'
}
```

| Level | Description |
|-------|-------------|
| `Trace` | Very detailed flow tracing |
| `Debug` | Debugging information |
| `Info` | General application events |
| `Warn` | Non-fatal issues |
| `Error` | Application errors |
| `Silent` | Disable all logs |

---

## ⚙️ Configuration

Configure logging in your environment file:

```typescript
export const environment = {
  production: false,
  logging: {
    level: LogLevel.Debug,
    enableTimestamp: true
  }
};
```

### Recommended Levels by Environment

| Environment | Level |
|-------------|-------|
| Local | `Trace` |
| Development | `Debug` |
| Test | `Info` |
| UAT | `Warn` |
| Live/Prod | `Error` |
| CI | `Silent` |

---

## 🚀 Usage

### Import

```typescript
import { Logger } from '@app/core/logging/logger';
```

### Core Logging

```typescript
Logger.trace('Entering auth flow');
Logger.debug('User state', user);
Logger.info('User logged in');
Logger.warn('API response slow');
Logger.error('Failed to load users', err);
```

### Grouping Logs

Useful for organizing related logs:

```typescript
// Standard group
Logger.group('Checkout Flow');
Logger.info('Step 1: Validate cart');
Logger.info('Step 2: Create order');
Logger.groupEnd();

// Collapsed group
Logger.groupCollapsed('HTTP Request');
Logger.debug('Request', req);
Logger.debug('Response', res);
Logger.groupEnd();
```

### Performance & Timing

Measure execution time:

```typescript
Logger.time('loadUsers');

// some code

Logger.timeLog('loadUsers', 'after API call');

// some code

Logger.timeEnd('loadUsers');
```

### Data Inspection

```typescript
Logger.table(users);
Logger.dir(complexObject);
Logger.dirxml(document.body);
```

### Assertions & Counters

```typescript
// Assertions
Logger.assert(user != null, 'User should not be null');

// Counters
Logger.count('render');
Logger.countReset('render');
```

### Utilities

```typescript
// Clear console
Logger.clear();

// Chrome DevTools profiling
Logger.profile('HeavyTask');
// heavy logic
Logger.profileEnd('HeavyTask');

// Timeline markers (Chrome)
Logger.timeStamp('After login');
```

---

## 📋 Log Format

**Example output:**
```
[2026-02-10T12:30:15.123Z | INFO] User logged in
```

**Format:**
```
[TIMESTAMP | LEVEL] Message
```

---

## ✅ Best Practices

**DO:**
- ✅ Always use `Logger` instead of `console.*`
- ✅ Use correct log level
- ✅ Never commit `Trace` or `Debug` enabled in production
- ✅ Use groups for complex flows
- ✅ Log errors with context object

**DON'T:**
```typescript
// ❌ Anti-Patterns
console.log('debug');        // Do not use console directly
Logger.error('Error');       // Missing error object
Logger.debug('prod debug');  // Debug in production
```

---

## Setup Example

```typescript
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

```
