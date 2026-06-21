# CurrentRouteService

> Reactive, SSR-safe route state manager built with Angular 21 Signals

This service provides a clean and centralized way to access:

- ✅ Full URL path
- ✅ Route params
- ✅ Query params
- ✅ Route data
- ✅ Deepest active route
- ✅ SSR-safe navigation handling

---

## 📂 Folder Structure

```
core/current-route/
│
├── current-route.service.ts
├── current-route.interface.ts
├── index.ts
└── README.md
```

---

## 🚀 Why Use This Service?

Instead of injecting `ActivatedRoute` everywhere, this service:

- **Centralizes route logic** - Single source of truth
- **Uses Angular Signals** - No RxJS in components
- **Is SSR-safe** - Works with Angular Universal
- **Always tracks the deepest active route** - No manual traversal needed
- **Keeps components clean** - Less boilerplate code

### Benefits Over ActivatedRoute

| Without Service | With CurrentRouteService |
|----------------|--------------------------|
| Repeated injection | Centralized |
| Manual traversal | Automatic deepest route |
| RxJS everywhere | Clean Signals |
| Hard to test | Easy to mock |

---

## 🧠 Architecture

### Reactive State

```typescript
readonly currentRoute: WritableSignal<ICurrentRouteInfo>
```

Automatically updates on every `NavigationEnd`.

### Interface

```typescript
export interface ICurrentRouteInfo {
  fullPath: string;
  params: Params;
  queryParams: Params;
  data: Data | null;
}
```

---

## 🔄 How It Works

1. Listens to `Router.events`
2. Filters `NavigationEnd`
3. Finds the deepest active route
4. Builds route info
5. Updates signal

**SSR-safe:**
```typescript
if (this.platform.isServer) return;
```

---

## 🛠 Usage

### 1️⃣ Import

```typescript
import { CurrentRouteService } from '@app/core/current-route';
```

### 2️⃣ Inject in Component

```typescript
private readonly routeService = inject(CurrentRouteService);
```

### 3️⃣ Access Values

**Full Path**
```typescript
this.routeService.fullPath()
```

**Params**
```typescript
this.routeService.params()['id']
```

**Query Params**
```typescript
this.routeService.queryParams()['page']
```

**Route Data**
```typescript
this.routeService.data()
```

---

## 🧩 Using With Signals (Recommended)

```typescript
readonly currentRoute = this.routeService.currentRoute;
```

**In template:**
```html
{{ currentRoute().fullPath }}
```

---

## 🏗 Example Component (Angular 21)

```typescript
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CurrentRouteService } from '@app/core/current-route';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div>
      <h2>Current Path: {{ route().fullPath }}</h2>
      
      <h3>Route Params</h3>
      <pre>{{ route().params | json }}</pre>
      
      <h3>Query Params</h3>
      <pre>{{ route().queryParams | json }}</pre>
    </div>
  `,
})
export class DemoComponent {
  private readonly routeService = inject(CurrentRouteService);
  
  readonly route = this.routeService.currentRoute;
}
```

---

## 🌍 SSR Compatibility

This service is safe for Angular Universal because:

- ✅ It checks `PlatformService`
- ✅ It avoids subscribing on the server
- ✅ No direct `window` usage

```typescript
constructor() {
  if (this.platform.isServer) {
    return; // Skip browser-only code
  }
  // Browser initialization here
}
```
