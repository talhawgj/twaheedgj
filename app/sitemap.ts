import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const BASE_URL = "https://twaheedgj.vercel.app";

// Helper to get typed changeFrequency
function getChangeFrequency(
  status: "complete" | "wip" | "archived"
): "yearly" | "monthly" | "weekly" {
  if (status === "archived") return "yearly";
  if (status === "wip") return "weekly";
  return "monthly";
}

// Helper to get priority
function getPriority(status: "complete" | "wip" | "archived"): number {
  if (status === "complete") return 0.8;
  if (status === "wip") return 0.6;
  return 0.3;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: getChangeFrequency(p.status),
    priority: getPriority(p.status),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
