---
title: 'Service Workers: El secreto del contenido offline instantáneo'
description: 'Explorando la intercepción de peticiones y el caché de assets para construir una experiencia de lectura resiliente y offline-first.'
publishDate: '2026-03-17'
tags: ['Service Workers', 'PWA', 'Performance', 'Offline-first']
language: 'es'
id: 'service-worker-interception'
category: frontend
image:
  src: 'https://placehold.co/800x400/3b82f6/ffffff?text=Intercepción+Service+Worker'
  alt: 'Diagrama de un Service Worker interceptando peticiones de red'
---

# El problema de la latencia con assets locales

En una web app estándar, incluso si tus datos están en IndexedDB, el navegador suele esperar obtener los recursos (como imágenes o fuentes) a través de una URL. Al construir mi lector de EPUB, no quería que la interfaz se rompiera o mostrara iconos de "imagen rota" si el usuario estaba offline, ni tampoco quería sobrecargar el hilo principal (main thread) convirtiendo manualmente cada Blob en un ObjectURL dentro del estado de React.

## La solución: Intercepción de peticiones

Implementé un **Service Worker** para que actuara como un proxy programable entre el navegador y la red. Esto me permitió interceptar peticiones de recursos específicos y servirlos directamente desde el almacenamiento local o IndexedDB.

### 1. Interceptando recursos del EPUB

Dentro de un EPUB, las imágenes y las hojas de estilo se referencian mediante rutas relativas. Cuando el lector renderiza un capítulo, el navegador intenta obtener estos recursos. El Service Worker captura estas llamadas:

- **Regex Matching:** Identifica peticiones dirigidas a una ruta de "assets" virtual.
- **Estrategia Cache-First:** Comprueba si el recurso existe en el almacenamiento local.
- **Sintetización de Respuestas:** Crea un nuevo objeto `Response` con el tipo MIME correcto, haciendo que el navegador crea que acaba de completar una descarga de red exitosa.

### 2. Manejo de binarios pesados

Los archivos EPUB pueden ser grandes. En lugar de cargar el libro entero en memoria, el Service Worker ayuda a transmitir solo las partes necesarias.

- Intercepta peticiones para URLs "virtuales" específicas.
- Recupera el `Blob` correspondiente de IndexedDB.
- Devuelve una respuesta que las etiquetas `<img>` o `<link>` pueden consumir de forma nativa.

## Por qué esto añade valor

El uso de esta arquitectura proporcionó tres beneficios masivos:

1. **Capacidad Offline Real:** Una vez que se importa un libro, el usuario puede desconectarse de Internet y la experiencia permanece idéntica.
2. **Rendimiento:** Servir assets desde la memoria local es significativamente más rápido que cualquier CDN.
3. **Gestión de Memoria:** Al interceptar peticiones, evité la necesidad de crear miles de referencias `URL.createObjectURL` que podrían derivar en fugas de memoria (memory leaks) si no se revocaran correctamente.

## Snippet clave: El interceptor de Fetch

```typescript
self.addEventListener('fetch', (event: FetchEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname.includes('/epub-content/')) {
    event.respondWith(handleEpubRequest(event));
  }
});
```

## Conclusión

- Los Service Workers transformaron la aplicación de "una web que visualiza archivos" a una Plataforma robusta.
- Al desacoplar la entrega de recursos de la red, la interfaz se mantiene ágil y fiable independientemente del estado de la conexión del usuario.
