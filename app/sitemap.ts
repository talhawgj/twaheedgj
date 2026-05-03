import type { MetadataRoute } from "next";

const BASE_URL = "https://twaheedgj.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: "2026-04-27",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects/geodetic-conversion-api`,
      lastModified: "2024-11-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/osrm-routing`,
      lastModified: "2024-09-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/elevation-profile`,
      lastModified: "2024-08-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/vector-tiles`,
      lastModified: "2023-12-05",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/burn-scar-api`,
      lastModified: "2023-10-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/blog-api`,
      lastModified: "2024-06-30",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/subscription-tracker`,
      lastModified: "2024-05-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/django-crm`,
      lastModified: "2023-11-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/sentiment-analysis`,
      lastModified: "2023-09-08",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/click-shapefile`,
      lastModified: "2022-12-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/event-scraper`,
      lastModified: "2023-07-25",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/carhub`,
      lastModified: "2026-04-25",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: "2026-05-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/burn-scar-detection-sentinel-2-landsat`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
