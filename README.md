# EDUNITY-LMS

A modern Learning Management System (LMS) built with Angular 21, designed to deliver a seamless online learning experience. The platform includes course management, instructor profiles, interactive quizzes, student dashboards, progress tracking, and responsive UI components.

The application leverages Angular 21 with Server-Side Rendering (SSR) for improved performance, SEO, and faster initial page loads, powered by an Express.js server. It follows a scalable Domain-Driven Design (DDD) architecture, with barrel index files for clean and maintainable imports, along with modern Angular best practices. The architecture promotes clear separation of concerns, modularity, reusability, and maintainability while ensuring accessibility and an optimized user experience across all devices.

## Tech Stack

- **Angular** (standalone app build via `@angular/build:application`)
- **SSR** via Angular SSR + server entry at `src/server.ts`
- **Express** (see `server/`)
- **Node/TypeScript**

## 🚀 Performance

The application was tested using GTmetrix to evaluate its performance, structure, and Core Web Vitals.

![GTmetrix Performance](./src/assets/images/global/perf/gtmetrix-performance.png)

## Folder Structure

```text
EDUNITY-LMS/
├── .angular/
├── api/
│   └── index.js
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap-pages.xml
│   └── sitemap.xml
├── server/
│   ├── core/
│   │   ├── fetch.service.ts
│   │   └── sitemap-cache.service.ts
│   ├── routes/
│   │   └── sitemap.routes.ts
│   └── sitemap/
│       ├── sitemap.generator.ts
│       ├── sitemap.paginator.ts
│       └── sitemap.service.ts
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── connectivity/
│   │   │   ├── current-route/
│   │   │   ├── i18n/
│   │   │   ├── interceptors/
│   │   │   ├── logging/
│   │   │   ├── navigation/
│   │   │   ├── platform/
│   │   │   ├── routing/
│   │   │   ├── seo/
│   │   │   ├── seo2/
│   │   │   ├── storage/
│   │   │   └── toast/
│   │   ├── features/
│   │   │   ├── about/
│   │   │   │   ├── components/
│   │   │   │   ├── configs/
│   │   │   │   ├── constants/
│   │   │   │   ├── enums/
│   │   │   │   ├── interfaces/
│   │   │   │   ├── pages/
│   │   │   │   ├── routes/
│   │   │   │   └── index.ts
│   │   │   ├── auth/
│   │   │   ├── blogs/
│   │   │   ├── contact/
│   │   │   ├── courses/
│   │   │   ├── home/
│   │   │   └── not-found/
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   │   ├── main-site-footer/
│   │   │   │   ├── main-site-header/
│   │   │   │   ├── sidebar/
│   │   │   │   └── index.ts
│   │   │   ├── configs/
│   │   │   │   ├── footer.config.ts
│   │   │   │   ├── header.config.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── navbar.config.ts
│   │   │   ├── constants/
│   │   │   │   ├── footer.constants.ts
│   │   │   │   ├── header.constants.ts
│   │   │   │   └── index.ts
│   │   │   ├── enums/
│   │   │   │   ├── footer.enum.ts
│   │   │   │   ├── header.enum.ts
│   │   │   │   └── index.ts
│   │   │   └── interfaces/
│   │   │       ├── footer.interface.ts
│   │   │       ├── header.interface.ts
│   │   │       ├── index.ts
│   │   │       └── sidebar.interface.ts
│   │   ├── shared/
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.html
│   │   ├── app.routes.server.ts
│   │   ├── app.routes.ts
│   │   ├── app.scss
│   │   ├── app.spec.ts
│   │   ├── app.ts
│   │   └── prerender-routes-server.ts
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── environments/
│   ├── styles/
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── server.ts
│   └── styles.scss
├── .editorconfig
├── .gitignore
├── angular.json
├── clear-cache.sh
├── package-lock.json
├── package.json
├── README.md
├── robots.txt
├── TODO.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── vercel.json
```

High-level structure:

- `src/`
  - Angular application (components, features, routing, styles)
  - SSR entry points (`src/main.server.ts`, `src/server.ts`)
- `server/`
  - Express server implementation (API/sitemap/etc.)
- `api/`
  - API entry / serverless integration points (see `api/index.js`)
- `public/`
  - Static assets served as-is (favicon, sitemap files, etc.)
- `src/environments/`
  - Environment presets (local/test/dev/uat/live)
- `src/styles/`
  - Shared SCSS design system (abstracts, base, components, themes)
- `src/assets/`
  - Fonts + images used by the UI

Application code areas:

- `src/app/core/`
  - Cross-cutting concerns (i18n, interceptors, navigation, routing helpers, SEO, etc.)
- `src/app/features/`
  - Feature modules (example: `home/`)
- `src/app/layout/`
  - App shell/layout components (header/footer configs/constants)
- `src/app/shared/`
  - Shared utilities (e.g., `svg.util.ts`)

## Prerequisites

- Node.js (LTS recommended)
- npm

## Install

```bash
npm install
```

## Development (client/server dev build)

```bash
npm start
```

## Build commands

The app defines multiple build configurations (from `angular.json` / `package.json`).

### Standard builds

```bash
npm run build
npm run build:local
npm run build:test
npm run build:development
npm run build:uat
npm run build:live
```

### SSR builds

```bash
npm run build:ssr:local
npm run build:ssr:test
npm run build:ssr:development
npm run build:ssr:uat
npm run build:ssr:live
```

### Serve SSR output

After building SSR, start the server bundle:

```bash
npm run serve:ssr
```

### One-shot SSR (build + serve)

```bash
npm run ssr:local
npm run ssr:test
npm run ssr:development
npm run ssr:uat
npm run ssr:live
```

## Test

```bash
npm test
```

## Environments

Environment files are swapped via Angular build configurations:

- `src/environments/presets/environment.local.ts`
- `src/environments/presets/environment.test.ts`
- `src/environments/presets/environment.dev.ts`
- `src/environments/presets/environment.uat.ts`
- `src/environments/presets/environment.live.ts`

## Server and API

- Express server code lives in `server/`
- The project also includes sitemap generation under `server/sitemap/`

## Deployment (Vercel)

Configuration is provided by `vercel.json`:

- Rewrites all `/api` requests to the project `api` directory.
- Builds and deploys SSR server output from `dist/edunity-lms/**`.

## Useful scripts

- Clean build cache/artifacts:
  - `npm run clean:cache`
- Build/watch:
  - `npm run watch`

  ***
