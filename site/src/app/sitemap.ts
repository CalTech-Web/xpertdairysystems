import type { MetadataRoute } from "next";

const SITE_URL = "https://xpertdairysystems.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/dealer-partners`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, priority: 0.7 },
  ];
}
