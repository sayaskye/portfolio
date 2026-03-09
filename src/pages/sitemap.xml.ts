import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.SITE || 'https://example.com';

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');

  const urls = [
    { loc: `${SITE_URL}/en/`, lastmod: new Date().toISOString() },
    { loc: `${SITE_URL}/es/`, lastmod: new Date().toISOString() },
    { loc: `${SITE_URL}/en/contact/`, lastmod: new Date().toISOString() },
    { loc: `${SITE_URL}/es/contact/`, lastmod: new Date().toISOString() },
  ];

  for (const project of projects) {
    const slug = project.slug.replace(`${project.data.language}/`, '');
    urls.push({
      loc: `${SITE_URL}/${project.data.language}/projects/${slug}/`,
      lastmod: project.data.publishDate.toISOString(),
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
