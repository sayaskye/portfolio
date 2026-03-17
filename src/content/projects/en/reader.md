---
title: 'High-Performance E-reader Architecture: Offline-first & Async Processing'
description: 'Implementation of an optimized EPUB reader. (Note: Demo backend requires ~30s for cold start on Koyeb).'
publishDate: 2026-02-02
tags: [Bun, Hono, React, TanStack Query, IndexedDB, Service Workers, TypeScript]
featured: true
image:
  src: 'https://placehold.co/800x450/599DC2/ffffff?text=EPUB+Architecture'
  alt: 'Reader application interface'
github: https://github.com/sayaskye/Reader-Frontend
demo: https://saya-reader.netlify.app/
language: en
id: epub-high-perf-reader
category: fullstack
---

## Frontend Engineering: Decoupling and Persistence

The primary challenge wasn't just rendering text, but managing the lifecycle of heavy binary files while ensuring a frictionless UI under heavy processing loads.

### Binary Management & Web Workers

To prevent main-thread blocking when decompressing and parsing `.epub` files (which are essentially ZIP containers), I implemented an architecture based on **Web Workers**.

- **Asynchronous Processing:** The OCF structure and OPF metadata parsing occur in a separate thread, communicating with the UI via serialized messages.
- **JSZip & Stream Processing:** Optimized memory consumption when handling large files, preventing browser heap overflows during decompression.

### Storage Strategy & Offline-first

Instead of relying on a constant API connection, the system uses **IndexedDB** as the single source of truth for user content.

- **Asset Persistence:** Files are stored as `Blobs` directly in the browser, allowing for near-instant access without re-downloads.
- **TanStack Query + IndexedDB:** I integrated TanStack Query as an abstraction layer over IndexedDB. This leverages its _caching_, _stale-while-revalidate_, and declarative state management for loading/error states, even for local data.

### Rendering and Resource Interception

- **Dynamic Style Injection:** Implementation of a theme engine (utilizing OKLCH for precise color spaces) that manipulates the CSS of injected documents without breaking the reader's encapsulation.
- **Service Workers:** Interception of internal EPUB resource requests (images, fonts) to serve them directly from local memory, effectively eliminating network latency.

---

## Backend & Security: Robust Infrastructure with Bun and Hono

The backend was designed to be lightweight yet extremely secure, taking advantage of **Bun's** speed and **Hono's** flexibility.

### Authentication Lifecycle

To maintain a secure and persistent session without compromising the user experience, I implemented a token rotation system:

- **Refresh Tokens:** Stored in `HttpOnly` and `Secure` cookies to mitigate XSS attacks and maintain long-lived sessions safely.
- **Short-lived Access Tokens:** Used for API authorization with a transparent automatic renewal logic on the client side upon `401` responses.

### Data Layer and Validation

- **Drizzle ORM:** Chosen for its minimal overhead and _TypeScript-first_ approach, allowing for type-safe queries that translate almost directly to SQL.
- **Strict Validation:** Using **Zod** for contract validation between client and server. I explicitly avoided default values in schemas to prevent conflicts with React Hook Form's initial states, ensuring total data integrity before persistence.
- **Scalability:** The system is designed to handle significant user data volume, optimizing book metadata queries to ensure good response times.

---

## Infrastructure & Deployment

The live demo is currently deployed using a cost-optimization strategy:

- **Frontend:** Deployed on **Netlify**.
- **Backend:** Hosted on a **Koyeb** free instance.
  - _Note:_ The demo backend service enters a "sleep" state after inactivity. Please expect a **~30-second cold start** delay upon the first request.
