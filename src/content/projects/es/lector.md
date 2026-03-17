---
title: 'Arquitectura de un E-reader de alto rendimiento: Offline-first y procesamiento asíncrono'
description: 'Implementación de un lector de EPUB optimizado. (Nota: El backend de la demo requiere ~30s para un cold start en Koyeb).'
publishDate: 2026-02-02
tags: [Bun, Hono, React, TanStack Query, IndexedDB, Service Workers, TypeScript]
featured: true
image:
  src: 'https://placehold.co/800x450/0f172a/3865a1?text=Arquitectura+EPUB'
  alt: 'Interfaz de la aplicación de lectura'
github: https://github.com/sayaskye/Reader-Frontend
demo: https://saya-reader.netlify.app/
language: es
id: epub-high-perf-reader
category: fullstack
---

## Frontend Engineering: Desacoplamiento y Persistencia

El desafío principal no fue solo renderizar texto, sino gestionar el ciclo de vida de archivos binarios pesados garantizando una interfaz fluida incluso bajo cargas de procesamiento elevadas.

### Gestión de Binarios y Web Workers

Para evitar el bloqueo del hilo principal (main thread) al descomprimir y parsear archivos `.epub` (que son esencialmente contenedores ZIP), implementé una arquitectura basada en **Web Workers**.

- **Procesamiento Asíncrono:** El parseo de la estructura OCF y los metadatos OPF ocurre en un hilo separado, comunicándose con la UI mediante mensajes serializados.
- **JSZip y Procesamiento de Streams:** Optimización del consumo de memoria al manejar archivos grandes, previniendo desbordamientos del heap del navegador durante la descompresión.

### Estrategia de Almacenamiento y Offline-first

En lugar de depender de una conexión constante a la API, el sistema utiliza **IndexedDB** como fuente única de verdad para el contenido del usuario.

- **Persistencia de Assets:** Los archivos se almacenan como `Blobs` directamente en el navegador, permitiendo un acceso casi instantáneo sin necesidad de re-descargas.
- **TanStack Query + IndexedDB:** Integré TanStack Query como una capa de abstracción sobre IndexedDB. Esto aprovecha sus capacidades de _caching_, _stale-while-revalidate_ y manejo declarativo de estados de carga/error, incluso para datos locales.

### Renderizado e Intercepción de Recursos

- **Inyección Dinámica de Estilos:** Implementación de un motor de temas (utilizando espacios de color OKLCH) que manipula el CSS de los documentos inyectados sin romper el encapsulamiento del lector.
- **Service Workers:** Intercepción de peticiones de recursos internos del EPUB (imágenes, fuentes) para servirlos directamente desde la memoria local, eliminando efectivamente la latencia de red.

---

## Backend & Security: Infraestructura Robusta con Bun y Hono

El backend se diseñó para ser ligero pero extremadamente seguro, aprovechando la velocidad de **Bun** y la flexibilidad de **Hono**.

### Ciclo de Vida de Autenticación

Para mantener una sesión segura y persistente sin comprometer la experiencia del usuario, implementé un sistema de rotación de tokens:

- **Refresh Tokens:** Almacenados en cookies `HttpOnly` y `Secure` para mitigar ataques XSS y mantener sesiones de larga duración de forma segura.
- **Access Tokens de corta duración:** Utilizados para la autorización de la API con una lógica de renovación automática transparente en el cliente ante respuestas `401`.

### Capa de Datos y Validación

- **Drizzle ORM:** Elegido por su mínima sobrecarga y enfoque _TypeScript-first_, permitiendo consultas seguras en tipos que se traducen casi directamente a SQL.
- **Validación Estricta:** Uso de **Zod** para la validación de contratos entre cliente y servidor. Evité explícitamente valores por defecto en los esquemas para prevenir conflictos con los estados iniciales de React Hook Form, asegurando la integridad total de los datos antes de la persistencia.
- **Escalabilidad:** El sistema está diseñado para manejar un volumen significativo de datos de usuario, optimizando las consultas de metadatos de libros para asegurar buenos tiempos de respuesta.

---

## Infraestructura y Despliegue

La demo en vivo está desplegada utilizando una estrategia de optimización de costes:

- **Frontend:** Desplegado en **Netlify**.
- **Backend:** Alojado en una instancia gratuita de **Koyeb**.
  - _Nota:_ El servicio de backend entra en estado de reposo tras inactividad. Por favor, espera un retraso de **~30 segundos (cold start)** en la primera petición.
