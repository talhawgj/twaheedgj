import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://talhawaheed.dev/sitemap.xml",
    host: "https://talhawaheed.dev",
  };
}
