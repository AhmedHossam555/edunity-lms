# Angular 21 Enterprise HTTP Interceptors Architecture

Production-ready interceptor architecture for Angular 21 applications using:

* Standalone APIs
* Functional Interceptors
* SSR Compatibility
* Domain-Driven Design (DDD)
* Signals
* Enterprise Scalability
* Tree-shakable Providers

---

# Features

* JWT Authentication
* Global Error Handling
* Global Loading State
* API Prefixing
* Request Timeout
* Retry Strategy
* Request Caching
* Localization Headers
* SSR-safe Platform Handling
* Request/Response Logging
* HttpContext Support
* Enterprise Folder Structure

---

# Folder Structure

```txt
src/
└── app/
    ├── core/
    │   ├── interceptors/
    │   │   ├── auth/
    │   │   │   ├── auth.interceptor.ts
    │   │   │   └── auth.interceptor.spec.ts
    │   │   │
    │   │   ├── error/
    │   │   │   ├── error.interceptor.ts
    │   │   │   └── error.interceptor.spec.ts
    │   │   │
    │   │   ├── loading/
    │   │   │   ├── loading.interceptor.ts
    │   │   │   └── loading.interceptor.spec.ts
    │   │   │
    │   │   ├── timeout/
    │   │   │   ├── timeout.interceptor.ts
    │   │   │   └── timeout.interceptor.spec.ts
    │   │   │
    │   │   ├── cache/
    │   │   │   ├── cache.interceptor.ts
    │   │   │   └── cache.interceptor.spec.ts
    │   │   │
    │   │   ├── retry/
    │   │   │   ├── retry.interceptor.ts
    │   │   │   └── retry.interceptor.spec.ts
    │   │   │
    │   │   ├── api-prefix/
    │   │   │   ├── api-prefix.interceptor.ts
    │   │   │   └── api-prefix.interceptor.spec.ts
    │   │   │
    │   │   ├── language/
    │   │   │   ├── language.interceptor.ts
    │   │   │   └── language.interceptor.spec.ts
    │   │   │
    │   │   ├── platform/
    │   │   │   ├── platform.interceptor.ts
    │   │   │   └── platform.interceptor.spec.ts
    │   │   │
    │   │   ├── logging/
    │   │   │   ├── logging.interceptor.ts
    │   │   │   └── logging.interceptor.spec.ts
    │   │   │
    │   │   ├── index.ts
    │   │   └── interceptor.config.ts
    │   │
    │   ├── services/
    │   │   ├── auth.service.ts
    │   │   ├── loading.service.ts
    │   │   ├── localization.service.ts
    │   │   ├── notification.service.ts
    │   │   └── storage.service.ts
    │   │
    │   ├── guards/
    │   ├── tokens/
    │   │   └── http-context.tokens.ts
    │   │
    │   └── utils/
    │
    ├── domains/
    ├── shared/
    └── app.config.ts
```

---

# Why Use Interceptors?

Interceptors provide a centralized middleware layer for HTTP requests and responses.

## Advantages

* Centralized networking logic
* Cleaner services
* Reusable request handling
* Better scalability
* Easier maintenance
* Improved debugging
* Better SSR compatibility
* Cleaner architecture
* Better separation of concerns

---

# Request Flow

```txt
HTTP Request
    ↓
API Prefix Interceptor
    ↓
Platform Interceptor
    ↓
Language Interceptor
    ↓
Auth Interceptor
    ↓
Loading Interceptor
    ↓
Timeout Interceptor
    ↓
Retry Interceptor
    ↓
Logging Interceptor
    ↓
Backend API
    ↓
Error Interceptor
    ↓
HTTP Response
```

---

# Interceptors

---

# Auth Interceptor

## Purpose

Automatically attaches JWT access token.

## Responsibilities

* Add Authorization header
* Handle secure requests
* Centralize authentication logic

## Advantages

* Cleaner services
* Centralized token handling
* Better maintainability

---

# Error Interceptor

## Purpose

Global HTTP error handling.

## Responsibilities

* Handle 401 Unauthorized
* Handle 403 Forbidden
* Handle 500 Server Errors
* Normalize backend errors
* Trigger notifications

## Advantages

* Consistent UX
* Easier debugging
* Reduced duplicated code

---

# Loading Interceptor

## Purpose

Controls global loading state.

## Responsibilities

* Show global loader
* Hide global loader
* Handle parallel requests

## Advantages

* Better UX
* Cleaner components
* Centralized loading state

---

# Timeout Interceptor

## Purpose

Prevents long hanging requests.

## Responsibilities

* Cancel slow requests
* Improve reliability

## Advantages

* Better user experience
* Prevent infinite waiting

---

# Cache Interceptor

## Purpose

Caches GET requests.

## Responsibilities

* Store GET responses
* Return cached responses

## Advantages

* Better performance
* Faster UI
* Reduced API calls

---

# Retry Interceptor

## Purpose

Retries temporary failed requests.

## Responsibilities

* Retry unstable network requests
* Improve resiliency

## Advantages

* Better reliability
* Better network handling

---

# API Prefix Interceptor

## Purpose

Automatically prepends API base URL.

## Example

```ts
/users
```

Becomes:

```ts
https://api.example.com/users
```

## Advantages

* Cleaner services
* Easier environment switching

---

# Language Interceptor

## Purpose

Adds localization headers.

## Example

```ts
Accept-Language: en
```

## Advantages

* Better i18n support
* Cleaner localization handling

---

# Platform Interceptor

## Purpose

Provides SSR-safe request handling.

## Responsibilities

* Detect browser/server platform
* Prevent SSR runtime issues

## Advantages

* SSR compatibility
* Safer universal rendering

---

# Logging Interceptor

## Purpose

Logs requests and responses.

## Responsibilities

* Log requests
* Log responses
* Log errors

## Advantages

* Easier debugging
* Better request tracing

---

# Registering Interceptors

## interceptor.config.ts

```ts
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { apiPrefixInterceptor } from './api-prefix/api-prefix.interceptor';
import { authInterceptor } from './auth/auth.interceptor';
import { errorInterceptor } from './error/error.interceptor';
import { languageInterceptor } from './language/language.interceptor';
import { loadingInterceptor } from './loading/loading.interceptor';
import { loggingInterceptor } from './logging/logging.interceptor';
import { platformInterceptor } from './platform/platform.interceptor';
import { retryInterceptor } from './retry/retry.interceptor';
import { timeoutInterceptor } from './timeout/timeout.interceptor';

export const provideHttp = () =>
  provideHttpClient(
    withInterceptors([
      apiPrefixInterceptor,
      platformInterceptor,
      languageInterceptor,
      authInterceptor,
      loadingInterceptor,
      timeoutInterceptor,
      retryInterceptor,
      loggingInterceptor,
      errorInterceptor,
    ]),
  );
```

---

# App Configuration

## app.config.ts

```ts
import {
  ApplicationConfig,
} from '@angular/core';

import {
  provideHttp,
} from './core/interceptors/interceptor.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttp(),
  ],
};
```

---

# HttpContext Support

Useful for dynamically skipping interceptors.

## Example

```ts
import {
  HttpContextToken,
} from '@angular/common/http';

export const SKIP_AUTH =
  new HttpContextToken<boolean>(() => false);
```

## Usage

```ts
this.http.get('/users', {
  context: new HttpContext().set(SKIP_AUTH, true),
});
```

---

# Recommended Services

## auth.service.ts

Responsibilities:

* Authentication state
* Token management
* Refresh token handling

---

## loading.service.ts

Responsibilities:

* Global loader state
* Concurrent request counting

---

## localization.service.ts

Responsibilities:

* Current language state
* Translation handling

---

## notification.service.ts

Responsibilities:

* Error notifications
* Success messages
* Toast handling

---

## storage.service.ts

Responsibilities:

* SSR-safe localStorage handling
* Browser detection

---

# Functional Interceptors

This architecture uses Angular functional interceptors.

## Recommended

```ts
HttpInterceptorFn
```

## Advantages

* Better performance
* Tree-shakable
* Smaller bundles
* Simpler syntax
* Angular 21 optimized

---

# SSR Compatibility

This architecture is fully SSR-compatible.

## Avoid Direct Usage Of

```ts
window
document
localStorage
sessionStorage
navigator
```

## Use Instead

* PLATFORM_ID
* TransferState
* Injected services

---

# Best Practices

## Keep Interceptors Small

One responsibility per interceptor.

---

## Avoid Business Logic

Bad:

```ts
if (user.role === 'admin')
```

Good:

```txt
Networking concerns only
```

---

## Use Environment Configuration

Avoid hardcoded URLs.

---

## Use RxJS Carefully

Avoid expensive synchronous operations.

---

## Avoid Logging Sensitive Data

Never log:

* Tokens
* Passwords
* Sensitive headers

---

# Security Recommendations

* Use HTTPS only
* Handle 401 globally
* Sanitize backend errors
* Avoid exposing tokens
* Use secure refresh token strategy
* Prefer HttpOnly cookies if possible

---

# Performance Recommendations

* Keep interceptors lightweight
* Avoid unnecessary request cloning
* Avoid heavy synchronous logic
* Use tree-shakable providers
* Use caching carefully

---

# Testing Recommendations

Each interceptor should include:

* Unit tests
* Request mocking
* Error handling tests
* SSR compatibility tests
* Context token tests

---

# Recommended Angular Features

Recommended modern Angular stack:

* Signals
* Standalone APIs
* Functional Interceptors
* SSR
* Hydration
* TransferState
* Environment Providers
* Tree-shakable Providers

---

# Recommended Official Documentation

## Angular HTTP

https://angular.dev/guide/http

## Angular Interceptors

https://angular.dev/guide/http/interceptors

## Angular SSR

https://angular.dev/guide/ssr

## Angular Style Guide

https://angular.dev/style-guide

## RxJS

https://rxjs.dev

---

# Recommended Enterprise Stack

Recommended production interceptors:

| Interceptor | Recommended      |
| ----------- | ---------------- |
| Auth        | Yes              |
| Error       | Yes              |
| Loading     | Yes              |
| API Prefix  | Yes              |
| Timeout     | Yes              |
| Retry       | Yes              |
| Cache       | Optional         |
| Language    | Yes              |
| Platform    | Yes              |
| Logging     | Development Only |

---

# Summary

This architecture provides:

* Enterprise scalability
* SSR compatibility
* Clean architecture
* Better maintainability
* Better debugging
* Strong separation of concerns
* Better performance
* Future-proof Angular 21 architecture
* Production-ready networking layer
* DDD-ready implementation

Designed for modern Angular 21 enterprise applications using standalone APIs and functional architecture.
