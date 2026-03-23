# Personal Portfolio & Blog

A high-performance, SEO-optimized personal portfolio and blog built with Astro 5 and Tailwind CSS 4. This project features a modern, accessible, and ultra-fast web experience with a focus on visual excellence and smooth interactions.

## Key Features

- **Fast Performance:** Leverages Astro's static site generation (SSG) for near-instant load times and perfect Lighthouse scores.
- **Dark/Light Mode:** Seamless theme switching with persistent user preference and flash prevention.
- **Internationalization (i18n):** Native multi-language support (English & Spanish) with dynamic routing and custom translation engine.
- **Smooth Transitions:** Implements Astro View Transitions for a seamless feel between page navigations.
- **Content Collections:** Type-safe management of projects, blog posts, and work experience using Astro's Content Collections API.
- **Modern Styling:** Built with Tailwind CSS 4.0, utilizing native CSS variables, container queries, and modern typography.
- **SEO Optimized:** Automated metadata generation, canonical URLs, alternate language links, and sitemap/robots.txt support.
- **Integrated Contact Form:** Functional contact form powered by Formspree with full internationalization.

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4 + @tailwindcss/typography
- **Runtime & Package Manager:** Bun
- **Content:** Markdown & MDX with Astro Content Collections
- **Icons:** Google Material Symbols
- **Fonts:** Inter & Outfit (via Google Fonts)

## Project Structure

```bash
/
├── .vscode/          # VS Code configuration
├── public/           # Static assets (fonts, icons, etc.)
├── src/
│   ├── assets/       # Optimized images & design assets
│   ├── components/   # Reusable Astro components
│   │   ├── home/     # Section-specific components
│   │   ├── layout/   # Core page structure components (Header, Footer, etc.)
│   │   └── ui/       # Foundational UI elements (Buttons, Cards, etc.)
│   ├── config/       # Global constants & external links
│   ├── content/      # Markdown data (blog, projects, experience)
│   ├── i18n/         # Custom translation logic & locales
│   ├── lib/          # Utilities, SEO helpers & shared logic
│   ├── pages/        # File-based routing (index redirects to [lang])
│   ├── styles/       # Global CSS & Tailwind configuration
│   └── types/        # Global TypeScript interfaces
└── astro.config.mjs  # Astro configuration
```

## Getting Started

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the root directory:

   ```env
   PUBLIC_FORMSPREE_ID=your_id
   ```

3. **Start the development server:**
   ```bash
   bun dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

## Commands

| Command           | Action                             |
| :---------------- | :--------------------------------- |
| `bun dev`         | Start development server           |
| `bun build`       | Build for production               |
| `bun preview`     | Preview production build locally   |
| `bun astro check` | Run type & component health checks |
| `bun run lint`    | Run ESLint check                   |
| `bun run format`  | Format code with Prettier          |
