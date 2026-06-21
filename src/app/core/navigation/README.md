# Angular Navigation Module (SSR-Safe & DDD)

This module provides a **Server-Side Rendering (SSR) safe navigation system** for Angular 21+ applications, built with **Domain-Driven Design (DDD)** principles.  
It is clean, maintainable, and easy to use in both class-based and standalone components.

---

## 📂 Folder Structure

```
navigation/
├── domain/
│   ├── navigation-intent.enum.ts  # Navigation types (Internal/External)
│   ├── navigation.interface.ts        # Navigation data interface
│   └── index.ts
├── application/
│   ├── navigation.service.ts      # Core navigation service
│   ├── use-navigation.ts          # Composable function for easy usage
│   └── index.ts
├── infrastructure/
│   ├── navigation.guard.ts        # Guards or other Angular-specific logic
│   └── index.ts                   # Shared file for gaurd
└── index.ts                       # Shared file for (domain, application, infrastructure)
└── README.md 
```

---

## 🧩 Domain Layer

- Contains the **core navigation rules**.  
- Independent of Angular and SSR.  

### `navigation-intent.enum.ts`

```typescript
export enum NavigationIntent {
  INTERNAL,          // Navigate inside the app
  EXTERNAL_NEW_TAB,  // Open external link in a new tab
  EXTERNAL_SAME_TAB  // Open external link in the same tab
}
```

### `navigation.model.ts`

```typescript
export interface NavigationCommand {
  intent: NavigationIntent;
  pathOrUrl: string;
  queryParams?: Record<string, unknown>;
}
```

---

## 🛠 Application Layer

Provides a reusable interface for navigation in components or services.

### `navigation.service.ts`

Handles internal and external navigation in an SSR-safe way.

### `use-navigation.ts`

Lightweight composable function for standalone components or services:

```typescript
const { navigate } = useNavigation();

navigate({
  intent: NavigationIntent.INTERNAL,
  pathOrUrl: '/dashboard'
});
```

---

## ⚙ Infrastructure Layer

Contains Angular-specific logic such as Guards.

**Example:** `autoRedirectGuardFactory` for conditional redirects:

```typescript
autoRedirectGuardFactory(() => isLoggedIn(), '/login')
```

---

## 🚀 Usage

### 1. Class-Based Components

```typescript
import { NavigationService } from '../application/navigation.service';
import { NavigationIntent } from '../domain/navigation-intent.enum';

@Component({...})
export class DashboardComponent {
  constructor(private nav: NavigationService) {}

  goToProfile() {
    this.nav.navigate({
      intent: NavigationIntent.INTERNAL,
      pathOrUrl: '/profile'
    });
  }
}
```

### 2. Standalone Components

```typescript
import { useNavigation } from '../application/use-navigation';
import { NavigationIntent } from '../domain/navigation-intent.enum';

@Component({
  selector: 'app-login-button',
  standalone: true,
  template: `<button (click)="goToLogin()">Login</button>`
})
export class LoginButtonComponent {
  private nav = useNavigation();

  goToLogin() {
    this.nav.navigate({
      intent: NavigationIntent.INTERNAL,
      pathOrUrl: '/authentication/login'
    });
  }
}
```
### 3.Usage in Routes
```ts
import { autoRedirectGuardFactory } from '@app/navigation/guards/auto-redirect.guard';
import { routes } from '@angular/router';

// Example condition function: only allow if user is logged in
const isLoggedIn = () => !!localStorage.getItem('userToken');

export const appRoutes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [autoRedirectGuardFactory(isLoggedIn, '/login')],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```
---

## ✅ Features

- **Domain-Driven Design** → Clean separation of Domain / Application / Infrastructure
- **SSR-safe** → Works on server without errors
- **Enum + NavigationCommand** → Readable and maintainable
- **useNavigation()** → Reusable anywhere
- **Guards ready** for conditional navigation

---

## 💡 Best Practices

- Always use `NavigationCommand` instead of passing strings directly.
- Keep Application Layer clean; avoid placing navigation logic in components.
- Use Guards for conditional routing instead of manual redirects in components.