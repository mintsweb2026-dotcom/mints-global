import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mintsglobal.ae';

  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/cyber-security',
    '/digital-marketing',
    '/software-development',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
