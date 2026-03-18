---
title: 'Service Workers: The Secret to Instant Offline Content'
description: 'Diving into request interception and asset caching to build a resilient, offline-first reading experience.'
publishDate: '2026-03-17'
tags: ['Service Workers', 'PWA', 'Performance', 'Offline-first']
language: 'en'
id: 'service-worker-interception'
category: frontend
image:
  src: 'https://cozufpnpwuuvgyvjtqlk.supabase.co/storage/v1/object/public/portfolio/sw.webp'
  alt: 'Diagram of a Service Worker intercepting network requests'
---

# The Latency Problem with Local Assets

In a standard web app, even if your data is in IndexedDB, the browser often expects to fetch resources (like images or fonts) via URL. When building my EPUB reader, I didn't want the UI to break or show "broken image" icons if the user was offline, nor did I want to bloat the main thread by manually converting every Blob to an ObjectURL in React state.

## The Solution: Request Interception

I implemented a **Service Worker** to act as a programmable proxy between the browser and the network. This allowed me to intercept specific resource requests and serve them directly from the local cache or IndexedDB.

### 1. Intercepting EPUB Resources

Inside an EPUB, images and stylesheets are referenced by relative paths. When the reader renders a chapter, the browser tries to fetch these. The Service Worker catches these calls:

- **Regex Matching:** It identifies requests directed to a virtual "assets" path.
- **Cache-First Strategy:** It checks if the resource exists in the local storage.
- **Synthesizing Responses:** It creates a new `Response` object with the correct MIME type, making the browser think it just finished a successful network download.

### 2. Handling Heavy Binaries

EPUB files can be large. Instead of loading the entire book into memory, the Service Worker helps stream only the necessary parts.

- It intercepts requests for specific "virtual" URLs.
- It fetches the corresponding `Blob` from IndexedDB.
- It returns a response that the `<img>` or `<link>` tags can consume natively.

## Why this adds value

Using this architecture provided three massive benefits:

1. **True Offline Capability:** Once a book is imported, the user can turn off their internet and the experience remains identical.
2. **Performance:** Serving assets from local memory is significantly faster than any CDN.
3. **Memory Management:** By intercepting requests, I avoided the need to create thousands of `URL.createObjectURL` references that could lead to memory leaks if not properly revoked.

## Key Snippet: The Fetch Interceptor

```typescript
self.addEventListener('fetch', (event: FetchEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname.includes('/epub-content/')) {
    event.respondWith(handleEpubRequest(event));
  }
});
```

## Conclusion

- Service Workers transformed the application from a "website that views files" into a robust Platform.
- By decoupling resource delivery from the network, the UI stays snappy and reliable regardless of the user's connection status.
