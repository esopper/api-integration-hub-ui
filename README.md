# Portfolio

Erik Sopper's software engineering portfolio, hosted at `eriksopper.com`.

This repository is the Angular frontend for the portfolio site. It hosts multiple projects as distinct sections of a single deployed application.

---

## Projects

### API Integration Hub

A working full-stack integration project. The frontend consumes a Spring Boot backend that normalizes external API data, hides third-party credentials, and presents clean contracts to the client.

Demonstrates:

* Angular application structure organized around features, services, and models
* Typed communication with a backend API
* Separation between UI concerns and third-party API concerns
* Route-based navigation for independent integration features
* Environment-based configuration for local and deployed targets
* AWS-hosted frontend deployment through Amplify

#### Features

**Hub Overview**

A section landing page that explains what the project is, what it currently demonstrates, and how it is hosted.

**GitHub Repository Search**

Demonstrates:

* backend-driven API integration
* search inputs and result presentation
* pagination and sorting flows
* normalized response handling

**Weather Lookup**

Demonstrates:

* backend-mediated third-party API access
* location lookup and weather retrieval
* presenting structured forecast data in the UI

---

### Caribou Crossing

A Frogger-inspired endless runner originally developed in 2014–2015 using libGDX and Java. Shipped on Android and available on the Google Play Store before being retired. Published here as a legacy portfolio piece — the HTML5 build runs in the browser via GWT compilation of the original Java source.

See the [CaribouCrossing repository](https://github.com/esopper/CaribouCrossing) for full source and documentation.

---

## Tech stack

* Angular
* TypeScript
* RxJS
* Angular Material
* Angular Router
* Angular HttpClient
* SCSS

---

## Project structure

* `src/app/layout` — shared application layout and top navigation
* `src/app/portfolio-home` — portfolio landing page
* `src/app/hub` — API Integration Hub section overview
* `src/app/github` — GitHub integration UI
* `src/app/weather` — weather integration UI
* `src/app/caribou-crossing` — Caribou Crossing game embed
* `src/app/services` — backend API communication
* `src/app/models` — typed request/response models
* `src/environments` — environment-specific configuration
* `public/caribou-crossing-game` — compiled HTML5 game assets

---

## Environment configuration

The application uses Angular environment files for backend API configuration.

### Local development

`src/environments/environment.ts`

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080'
};
```

### Production

`src/environments/environment.prod.ts`

```ts
export const environment = {
  production: true,
  apiBaseUrl: 'https://api.eriksopper.com'
};
```

This keeps deployment-specific API URLs out of individual service implementations.

---

## Running locally

### Prerequisites

* Node.js 20
* npm

### Install dependencies

```bash
npm ci
```

### Start the dev server

```bash
npm start
```

The Angular app runs at:

```
http://localhost:4200
```

The backend is expected to be available at:

```
http://localhost:8080
```

---

## Production build

```bash
npm run build
```

The build output is generated under Angular's `dist/` directory.

---

## AWS Amplify deployment

This frontend is deployed with AWS Amplify.

The repository includes an `amplify.yml` file that defines the build used by Amplify:

* use Node 20
* install dependencies with `npm ci`
* run the Angular production build
* publish `dist/portfolio/browser`

This keeps the Amplify build configuration versioned alongside the application.

---

## Security notes

* No third-party API secrets are stored in this repository
* External API credentials are handled by the backend service
* The frontend only communicates with the backend API

---

## Roadmap

Planned future additions include:

* additional integrations
* stronger loading and error UX
* database-backed features
* caching and rate-limiting demonstrations
* more automated tests
* expanded CI/CD validation
* further visual polish

---

## Related repositories

* Portfolio frontend: `portfolio` (this repository)
* API Integration Hub backend: `api-integration-hub`
* Caribou Crossing game: `CaribouCrossing`

---

## License

MIT
