---
title: 'Astro Portfolio: Rendimiento y DX'
description: 'Diseño y desarrollo de un portafolio profesional de alto rendimiento enfocado en Core Web Vitals, accesibilidad y una arquitectura de contenido escalable.'
publishDate: 2026-03-02
tags: [Astro, TypeScript, Tailwind CSS, View Transitions, i18n]
featured: false
image:
  src: 'https://cozufpnpwuuvgyvjtqlk.supabase.co/storage/v1/object/public/portfolio/portfolio.webp'
  alt: 'Vista previa del diseño del portafolio'
github: https://github.com/sayaskye/portfolio
demo: https://zares.dev
language: es
id: personal-portfolio
category: frontend
---

## Filosofía de Diseño: "Less but Better"

El objetivo de este proyecto fue crear una plataforma que sirviera como referente personal de calidad de código. No es solo un sitio estático; es un sistema de diseño optimizado para la velocidad de entrega y la mantenibilidad.

### Arquitectura de Contenido y DX

En lugar de codificar las vistas de forma rígida (hardcoding), utilicé **Astro Content Collections** para gestionar los proyectos y las publicaciones del blog.

- **Type-Safety:** Definición de esquemas usando **Zod** para validar el frontmatter de los archivos Markdown, garantizando la ausencia de errores de tipado durante el proceso de compilación (build).
- **Escalabilidad:** Separación clara entre la lógica de presentación y los datos de contenido, permitiendo añadir nuevos proyectos simplemente creando un nuevo archivo `.md`.

### User Experience y APIs Web Modernas

A pesar de su estética simple, el portafolio integra APIs modernas para elevar la experiencia de navegación:

- **View Transitions API:** Implementación de transiciones de página fluidas sin la sobrecarga de un framework SPA pesado, manteniendo la persistencia del estado visual.
- **Estrategia de i18n:** Sistema de internacionalización nativo que gestiona rutas dinámicas para soporte multi-idioma sin sacrificar el SEO.
- **Tematización Dinámica:** Motor de temas claro/oscuro (Light/Dark) construido con variables CSS modernas, asegurando un contraste accesible y previniendo el Flash of Unstyled Content (FOUC).

### Optimización de Rendimiento

El portafolio está arquitecturado para lograr puntuaciones perfectas en Lighthouse:

- **JS Mínimo por Defecto:** Aprovechamiento de los componentes de Astro para enviar la cantidad mínima absoluta de JavaScript al cliente.
- **Optimización de Assets:** Uso de formatos de imagen WebP por defecto para un mejor rendimiento.
- **Diseño Responsivo:** Layout fluido utilizando un enfoque "CSS-first" con Tailwind CSS, eliminando la necesidad de librerías de UI pesadas.

---

## Características Integradas

- **Landing Page:** Sección Hero con un Call to Action (CTA) claro que dirige al proyecto destacado.
- **Experiencia y Sobre mí:** Resumen ejecutivo de mi trayectoria profesional y stack técnico.
- **Motor de Proyectos y Blog:** Filtrado por etiquetas y gestión de feed RSS para artículos técnicos.
- **Contacto:** Formulario funcional con validación en el lado del cliente para agilizar las oportunidades de networking.
