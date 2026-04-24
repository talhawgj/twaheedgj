import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const BASE_URL = "https://twaheedgj.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: p.status === "archived" ? "yearly" : "monthly" as const,
    priority: p.status === "complete" ? 0.8 : p.status === "wip" ? 0.6 : 0.4,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Individual project pages (statically generated)
    ...projectRoutes,
  ];
}
