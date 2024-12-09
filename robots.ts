import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/private/', '/resources/', '/_not-found/', '/api/sitemap/'],
      },
    ],
    sitemap: 'https://etmfoundation.com/sitemap.xml',
  };
}
