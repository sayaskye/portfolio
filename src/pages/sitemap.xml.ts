import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { getSupportedLanguages } from '@/i18n';

const SITE_URL = import.meta.env.SITE || 'https://zares.dev';

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');
  const blogs = await getCollection('blog');
  const languages = getSupportedLanguages();

  // Base URLs for all supported languages
  const baseUrls = languages.map((lang) => `${SITE_URL}/${lang}/`);

  // Project index URLs
  const projectsIndexUrls = languages.map((lang) => `${SITE_URL}/${lang}/projects/`);

  // Blog index URLs
  const blogIndexUrls = languages.map((lang) => `${SITE_URL}/${lang}/blog/`);

  // Project URLs
  const projectUrls = projects.map((project) => {
    const lang = project.data.language;
    const slug = project.slug.replace(`${lang}/`, '');
    return `${SITE_URL}/${lang}/projects/${slug}/`;
  });

  // Blog URLs
  const blogUrls = blogs.map((blog) => {
    const lang = blog.data.language;
    const slug = blog.slug.replace(`${lang}/`, '');
    return `${SITE_URL}/${lang}/blog/${slug}/`;
  });

  const allUrls = [
    ...baseUrls,
    ...projectsIndexUrls,
    ...blogIndexUrls,
    ...projectUrls,
    ...blogUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${languages.some((lang) => url === `${SITE_URL}/${lang}/`) ? '1.0' : '0.8'}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
