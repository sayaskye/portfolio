---
title: 'Astro Portfolio: Performance & DX'
description: 'Design and development of a high-performance professional portfolio focused on Core Web Vitals, accessibility, and a scalable content architecture.'
publishDate: 2026-03-02
tags: [Astro, TypeScript, Tailwind CSS, View Transitions, i18n]
featured: false
image:
  src: 'https://cozufpnpwuuvgyvjtqlk.supabase.co/storage/v1/object/public/portfolio/portfolio.webp'
  alt: 'Portfolio design preview'
github: https://github.com/sayaskye/portfolio
demo: https://zares.dev
language: en
id: personal-portfolio
category: frontend
---

## Design Philosophy: "Less but Better"

The goal of this project was to create a platform that serves as a personal benchmark for code quality. It is not just a static site; it is a design system optimized for delivery speed and maintainability.

### Content Architecture and DX

Instead of hardcoding views, I utilized **Astro Content Collections** to manage projects and blog posts.

- **Type-Safety:** Defined schemas using **Zod** to validate Markdown frontmatter, ensuring zero type errors during the build process.
- **Scalability:** Clear separation between presentation logic and content data, allowing for new projects to be added simply by creating a new `.md` file.

### User Experience & Modern Web APIs

Despite its simple aesthetic, the portfolio integrates modern APIs to elevate navigation:

- **View Transitions API:** Implementation of fluid page transitions without the overhead of a heavy SPA framework, maintaining visual state persistence.
- **i18n Strategy:** Native internationalization system managing dynamic routes for multi-language support without sacrificing SEO.
- **Dynamic Theming:** Light/Dark theme engine built with modern CSS variables, ensuring accessible contrast and preventing Flash of Unstyled Content (FOUC).

### Performance Optimization

The portfolio is architected to achieve perfect Lighthouse scores:

- **Minimal JS by Default:** Leveraging Astro components to ship the absolute minimum amount of JavaScript to the client.
- **Asset Optimization:** WebP image formats by default for better performance.
- **Responsive Design:** Fluid layout using a CSS-first approach with Tailwind CSS, eliminating the need for heavy UI libraries.

---

## Integrated Features

- **Landing Page:** Hero section with a clear Call to Action (CTA) leading to the featured project.
- **Experience & About:** Executive summary of my professional trajectory and technical stack.
- **Project & Blog Engine:** Tag-based filtering and RSS feed management for technical articles.
- **Contact:** Functional form with client-side validation to streamline networking opportunities.
