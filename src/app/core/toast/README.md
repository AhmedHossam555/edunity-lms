# Toast module — usage

## 1. Register the theme variables
Import `toast-theme.scss` once in your global `styles.scss`:

```scss
@use 'core/toast/toast-theme';
```

## 2. Mount the container once (e.g. in `app.component.html`)

```html
<app-toast />
<router-outlet />
```

```ts
import { ToastComponent } from './core/toast';

@Component({
  selector: 'app-root',
  imports: [ToastComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

## 3. Trigger toasts from any component via the facade

```ts
import { ToastFacade } from './core/toast';

@Component({ /* ... */ })
export class ProfileFormComponent {
  private readonly toast = inject(ToastFacade);

  save(): void {
    this.toast.success({
      title: 'Saved',
      message: 'Profile updated.',
    
    });
  }

  onError(): void {
    this.toast.error({
      title: 'Something went wrong',
      message: 'Could not update your profile. Try again.',
      duration: 0, // 0 = no auto-dismiss, user must close manually
    });
  }
}
```

## Notes

- Components should **never** inject `ToastService` directly — only `ToastFacade`.
- SSR: `generateToastId()` guards against `crypto.randomUUID` being unavailable;
  `setTimeout` handles are only ever created in the browser once the container
  component is instantiated, since the app itself only renders the container
  client-side in the typical SSR + hydration setup.
- Zoneless: state changes go through `signal.update()/set()` only — no
  `NgZone`, `Subject`, or `EventEmitter` in the module, so Angular's
  zoneless change detection will pick up updates correctly.