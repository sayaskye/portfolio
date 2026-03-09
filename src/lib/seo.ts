export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  lang: string;
  alternateLanguages?: {
    lang: string;
    url: string;
  }[];
}

export function generateMetaTags(metadata: SEOMetadata): string {
  const tags = [
    `<title>${metadata.title}</title>`,
    `<meta name="description" content="${metadata.description}" />`,
    `<link rel="canonical" href="${metadata.canonical}" />`,
    `<meta property="og:title" content="${metadata.ogTitle || metadata.title}" />`,
    `<meta property="og:description" content="${metadata.ogDescription || metadata.description}" />`,
    `<meta property="og:type" content="${metadata.ogType || 'website'}" />`,
    `<meta property="og:url" content="${metadata.canonical}" />`,
  ];

  if (metadata.ogImage) {
    tags.push(`<meta property="og:image" content="${metadata.ogImage}" />`);
  }

  if (metadata.alternateLanguages) {
    for (const alt of metadata.alternateLanguages) {
      tags.push(`<link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`);
    }
  }

  return tags.join('\n');
}
