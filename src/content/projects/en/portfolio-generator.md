---
title: Portfolio Generator CLI
description: A command-line tool that generates customizable portfolio websites from markdown files with multiple theme options.
publishDate: 2023-09-10
tags: [Node.js, CLI, Markdown, Static Site Generator]
featured: false
github: https://github.com/example/portfolio-generator
language: en
---

## Introduction

Portfolio Generator is a lightweight CLI tool that transforms markdown files into beautiful, responsive portfolio websites. Perfect for developers who want a simple, maintainable portfolio without the complexity of a full CMS.

## Installation

```bash
npm install -g portfolio-generator

# Or use with npx
npx portfolio-generator init my-portfolio
```

## Quick Start

1. **Initialize a new project**:

   ```bash
   portfolio-generator init my-portfolio
   cd my-portfolio
   ```

2. **Add your projects** as markdown files in the `projects/` directory

3. **Build your site**:

   ```bash
   portfolio-generator build
   ```

4. **Preview locally**:
   ```bash
   portfolio-generator serve
   ```

## Features

### Markdown-Based Content

Write your projects in simple markdown:

```markdown
---
title: My Awesome Project
date: 2023-09-01
tags: [React, TypeScript]
---

## Description

This is my awesome project...
```

### Multiple Themes

Choose from several built-in themes:

- **Minimal**: Clean and simple design
- **Modern**: Bold colors and animations
- **Classic**: Traditional portfolio layout
- **Dark**: Dark mode optimized

### Customization

Customize colors, fonts, and layout through a simple config file:

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

## Architecture

The tool is built with **Node.js** and uses:

- **Commander.js** for CLI interface
- **Marked** for markdown parsing
- **EJS** for templating
- **PostCSS** for CSS processing

### Plugin System

Extend functionality with plugins:

```javascript
// portfolio.config.js
module.exports = {
  plugins: [require('portfolio-plugin-analytics'), require('portfolio-plugin-sitemap')],
};
```

## Use Cases

- Personal developer portfolios
- Freelancer showcase sites
- Project documentation sites
- Simple business websites

## Contributing

Contributions are welcome! Check out the [contributing guide](https://github.com/example/portfolio-generator/blob/main/CONTRIBUTING.md) to get started.

## License

MIT License - feel free to use this tool for any purpose.
