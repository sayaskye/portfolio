import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.SITE || 'https://zares.dev';

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
