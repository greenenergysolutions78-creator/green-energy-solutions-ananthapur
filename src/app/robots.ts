import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://greenenergysolutions.in'; // Default/placeholder URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/setup/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
