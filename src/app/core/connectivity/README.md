# Connectivity Module

A centralized, SSR-safe feature for tracking and reacting to network (online/offline) status across the Angular application.

Designed using Clean Architecture principles and Angular Signals for reactive state management.

## Folder Structure

```
app/
└── core/
    └── connectivity/
        ├── application/
        │   ├── index.ts
        │   └── network-status.store.ts
        │
        ├── domain/
        │   ├── index.ts
        │   └── network-status.enum.ts
        │
        ├── infrastructure/
        │   ├── index.ts
        │   └── network.service.ts
        │
        ├── ui/
        │   └── network-status-banner/
        │       ├── index.ts
        │       ├── network-status-banner.component.ts
        │       ├── network-status-banner.component.html
        │       └── network-status-banner.component.scss
        │
        ├── README.md
        └── index.ts
```

## Domain Layer

### `NetworkConnectionStatus`

**File:** `data-access/network.service.ts`

```typescript
export enum NetworkConnectionStatus {
  Online = 'online',
  Offline = 'offline',
}
```

## Infrastructure Layer

### `NetworkService`

**Responsibilities:**

- Listens to browser online / offline events.
- Emits connection status as an Observable.
- Provides SSR-safe fallback.
- Optimized using NgZone.runOutsideAngular().

**Public API**

```typescript
readonly status$: Observable<NetworkConnectionStatus>;
```

**Key Guarantees**

- ✅ SSR-safe (always Online on server)
- ✅ Emits initial value immediately
- ✅ Shared replayed stream
- ✅ No unnecessary change detection
- ✅ Single browser event listener

## Application Layer (Signals Store)

### `NetworkStatusStore`

**File:** `application/network-status.store.ts`

**Public Signals**

```ts
status; // Signal<NetworkConnectionStatus>
isOnline; // Signal<boolean>
isOffline; // Signal<boolean>
statusText; // Signal<'Online' | 'Offline'>
```

**Example**

```typescript
readonly isOnline = computed(
  () => this.status() === NetworkConnectionStatus.Online
);
```

## UI Layer

### `NetworkStatusBannerComponent`

**File:** `ui/network-status-banner`

A standalone, OnPush component that displays network status using the store.

**Usage**

```html
<app-network-status-banner />
```

**Component Code**

```typescript
@Component({
  selector: 'app-network-status-banner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkStatusBannerComponent {
  readonly store = inject(NetworkStatusStore);
}
```

## SSR Behavior

This module is fully SSR-compatible:

| Environment  | Behavior                              |
| ------------ | ------------------------------------- |
| Browser      | Uses real `navigator.onLine` + events |
| Server (SSR) | Always emits `Online`                 |

This is handled in `NetworkService`:

```typescript
this.platform.isBrowser ? this.createBrowserStatus$() : of(NetworkConnectionStatus.Online);
```

## How to Use in Any Component

**Inject Store**

```typescript
private readonly network = inject(NetworkStatusStore);
```

**Use in Template**

```typescript
@if (network.isOffline()) {
  <div class="offline-banner">
    You are offline
  </div>
}
```

## Design Principles

- ✅ Clean Architecture (domain / infrastructure / application / ui)
- ✅ Angular Signals for state
- ✅ SSR-safe by design
- ✅ OnPush & performance optimized
- ✅ Easy to test & mock
