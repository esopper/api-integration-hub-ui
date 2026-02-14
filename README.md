# API Integration Hub (UI) — WIP

Angular frontend for my API Integration Hub portfolio project.  
The goal of this project is to demonstrate clean client-side architecture, integration with a backend aggregation service, and practical Angular patterns in a real-world-style application.

> **Status:** Work in progress. Routes, request parameters, and UI flows are evolving as the backend API stabilizes.

---

## What it does

This Angular app:

- Calls a backend integrations API
- Displays normalized data from external services
- Demonstrates separation of concerns using Angular services and models
- Handles loading states and error responses from upstream APIs

### Current Integrations

- **GitHub Repository Search**
  - Search repositories
  - Sort and paginate results
- **Weather Lookup**
  - Fetch weather data (via backend proxy)

---

## Tech Stack

- Angular
- TypeScript
- RxJS
- Angular HttpClient
- CSS (default Angular styling, minimal UI framework)

---

## Project Structure (High-Level)

- `src/app/services` — API service classes for backend communication
- `src/app/models` — Typed request/response models
- `src/app/components` — UI components for each integration
- `src/environments` — (Planned) environment-specific configuration

---

## Running locally

### Prerequisites
- Node.js (LTS recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

The app runs by default at:

```
http://localhost:4200
```

The backend is expected to be running locally at:

```
http://localhost:8080
```

---

## Configuration (WIP)

Currently, backend API URLs are defined directly inside Angular services.

Planned improvements:
- Move API base URL to Angular environment configuration
- Add support for multiple environments (dev, prod)
- Improve error and loading UX states

---

## Roadmap (Portfolio Goals)

- Align request contracts with backend DTOs
- Improve pagination and sorting UX
- Add stronger form validation
- Add basic component tests
- Add CI checks (lint + build validation)
- Improve UI styling for clearer data presentation

---

## Security Notes

- No secrets are stored in this repository.
- All external API credentials are managed by the backend service.
- The frontend only communicates with the backend API.

---

## License

MIT (or your preferred license)
