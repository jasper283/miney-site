import type { MetadataRoute } from 'next';

import { source } from '@/lib/source';

export const dynamic = 'force-static';

const siteUrl =
  process.env.SITE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.CF_PAGES_URL ??
  'https://miney.app';

function absoluteUrl(path: string) {
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;

  return new URL(normalizedPath, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const docsRoutes = source.getPages().map((page) => page.url);
  const routes = ['/', ...docsRoutes];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
  }));
}
