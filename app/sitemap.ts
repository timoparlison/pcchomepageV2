import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://parlison-code-couture.cloud';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/plattformen',
    '/plattformen/erp',
    '/plattformen/vermietung',
    '/vermittlung',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    }
  }

  return sitemap;
}
