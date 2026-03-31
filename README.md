# API Integration Hub UI

Angular frontend for my API Integration Hub portfolio project.

This application serves two purposes:

1. It is a working client for integration-focused backend features.
2. It is Erik Sopper's public portfolio site itself at `eriksopper.com`.

The goal is to demonstrate practical frontend engineering, clean integration with a backend aggregation service, and real deployment decisions in AWS.

---

## What this project demonstrates

* Angular application structure organized around features, services, and models
* Typed communication with a backend API
* Separation between UI concerns and third-party API concerns
* Route-based navigation for independent integration features
* Environment-based configuration for local and deployed targets
* AWS-hosted frontend deployment through Amplify

---

## Current features

### Home / Portfolio Splash Page

A landing page that explains:

* what the project is
* what it currently demonstrates
* how it is hosted
* where the project is heading next

### GitHub Repository Search

Demonstrates:

* backend-driven API integration
* search inputs and result presentation
* pagination and sorting flows
* normalized response handling

### Weather Lookup

Demonstrates:

* backend-mediated third-party API access
* location lookup and weather retrieval
* presenting structured forecast data in the UI

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
* `src/app/home` — portfolio landing page
* `src/app/github` — GitHub integration UI
* `src/app/weather` — weather integration UI
* `src/app/services` — backend API communication
* `src/app/models` — typed request/response models
* `src/environments` — environment-specific configuration

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
* publish `dist/api-integration-hub-ui/browser`

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
* further visual polish for the portfolio experience

---

## Related repositories

* Frontend: `api-integration-hub-ui`
* Backend: `api-integration-hub`

---

## License

MIT
