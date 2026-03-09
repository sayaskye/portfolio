---
title: Generador de Portafolio CLI
description: Una herramienta de línea de comandos que genera sitios web de portafolio personalizables desde archivos markdown con múltiples opciones de tema.
publishDate: 2023-09-10
tags: [Node.js, CLI, Markdown, Static Site Generator]
featured: false
github: https://github.com/example/portfolio-generator
language: es
---

## Introducción

Portfolio Generator es una herramienta CLI ligera que transforma archivos markdown en hermosos sitios web de portafolio responsivos. Perfecto para desarrolladores que desean un portafolio simple y mantenible sin la complejidad de un CMS completo.

## Instalación

```bash
npm install -g portfolio-generator

# O usar con npx
npx portfolio-generator init mi-portafolio
```

## Inicio Rápido

1. **Inicializar un nuevo proyecto**:

   ```bash
   portfolio-generator init mi-portafolio
   cd mi-portafolio
   ```

2. **Agregar tus proyectos** como archivos markdown en el directorio `projects/`

3. **Construir tu sitio**:

   ```bash
   portfolio-generator build
   ```

4. **Vista previa local**:
   ```bash
   portfolio-generator serve
   ```

## Características

### Contenido Basado en Markdown

Escribe tus proyectos en markdown simple:

```markdown
---
title: Mi Proyecto Increíble
date: 2023-09-01
tags: [React, TypeScript]
---

## Descripción

Este es mi proyecto increíble...
```

### Múltiples Temas

Elige entre varios temas integrados:

- **Minimal**: Diseño limpio y simple
- **Modern**: Colores audaces y animaciones
- **Classic**: Diseño de portafolio tradicional
- **Dark**: Optimizado para modo oscuro

### Personalización

Personaliza colores, fuentes y diseño a través de un archivo de configuración simple:

```json
{
  "theme": "modern",
  "colors": {
    "primary": "#3b82f6",
    "secondary": "#8b5cf6"
  },
  "fonts": {
    "heading": "Inter",
    "body": "Open Sans"
  }
}
```

## Arquitectura

La herramienta está construida con **Node.js** y utiliza:

- **Commander.js** para la interfaz CLI
- **Marked** para el análisis de markdown
- **EJS** para plantillas
- **PostCSS** para el procesamiento de CSS

### Sistema de Plugins

Extiende la funcionalidad con plugins:

```javascript
// portfolio.config.js
module.exports = {
  plugins: [require('portfolio-plugin-analytics'), require('portfolio-plugin-sitemap')],
};
```

## Casos de Uso

- Portafolios personales de desarrolladores
- Sitios de exhibición para freelancers
- Sitios de documentación de proyectos
- Sitios web empresariales simples

## Contribuir

¡Las contribuciones son bienvenidas! Consulta la [guía de contribución](https://github.com/example/portfolio-generator/blob/main/CONTRIBUTING.md) para comenzar.

## Licencia

Licencia MIT - siéntete libre de usar esta herramienta para cualquier propósito.
