# PlatformService

A simple Angular service to detect whether your app is running in a browser or server environment.

## Usage
```typescript
import { Component, inject } from '@angular/core';
import { PlatformService } from './platform.service';

@Component({
  selector: 'app-example',
  template: `<p>Running in browser: {{ platform.isBrowser }}</p>`
})
export class ExampleComponent {
  platform = inject(PlatformService);

  ngOnInit() {
    if (this.platform.isBrowser) {
      // Browser-only code (window, document, etc.)
      logger.log(window.innerWidth);
    }

    if (this.platform.isServer) {
      // Server-only code
      logger.log('Rendering on server');
    }
  }
}
```

## Methods

- **`isBrowser`** - Returns `true` if running in browser
- **`isServer`** - Returns `true` if running on server (SSR)

## Why Use This?

Useful for Angular Universal (SSR) apps where you need to conditionally run code based on the environment.