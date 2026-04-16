import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://talhawaheed.dev";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ─── Base SEO metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  title: {
    default: "Talha Waheed | Full-Stack GIS Developer & Spatial Data Engineer",
    template: "%s | Talha Waheed",
  },

  // ── Description (155 chars max) ────────────────────────────────────────────
  description:
    "Talha Waheed is a Full-Stack GIS Developer and Spatial Data Engineer based in Oman, specialising in FastAPI geospatial APIs, Mapbox GL JS, PostGIS, ArcGIS Pro SDK, coordinate conversion tools, remote sensing pipelines, and interactive mapping applications.",

  // ── Keywords — long-tail + short-tail mix ──────────────────────────────────
  keywords: [
    // Name-based
    "Talha Waheed",
    "Talha Waheed GIS",
    "Talha Waheed developer",
    "Talha Waheed portfolio",
    // Role-based
    "Full-Stack GIS Developer",
    "GIS Developer Oman",
    "Spatial Data Engineer",
    "Geospatial Software Engineer",
    "GIS Software Developer",
    "GIS Web Developer",
    // Tech-specific
    "FastAPI GIS",
    "Mapbox GL JS developer",
    "PostGIS developer",
    "ArcGIS Pro SDK C#",
    "QGIS developer",
    "Pyproj GDAL",
    "GeoPandas Shapely",
    "Coordinate Conversion API",
    "WGS84 UTM conversion",
    "EGM2008 geoid height",
    "OSRM routing Next.js",
    "Elevation Profile Mapbox",
    "vector tiles PostGIS",
    "Sentinel-2 burn scar API",
    // General tech
    "Next.js developer",
    "TypeScript developer",
    "Python FastAPI developer",
    "Remote Sensing developer",
    "Geospatial portfolio",
    "GIS portfolio 2024",
  ],

  // ── Author ─────────────────────────────────────────────────────────────────
  authors: [{ name: "Talha Waheed", url: BASE_URL }],
  creator: "Talha Waheed",
  publisher: "Talha Waheed",

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Talha Waheed — GIS Developer Portfolio",
    title: "Talha Waheed | Full-Stack GIS Developer & Spatial Data Engineer",
    description:
      "Portfolio of Talha Waheed — building production-grade geospatial applications, coordinate conversion APIs, interactive mapping tools, and remote sensing pipelines.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talha Waheed — Full-Stack GIS Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Talha Waheed | Full-Stack GIS Developer",
    description:
      "Building geospatial APIs, interactive maps, and spatial data tools. FastAPI · Mapbox · PostGIS · ArcGIS Pro SDK · Next.js.",
    images: ["/og-image.png"],
    creator: "@talhawaheed",
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification (add when deploying) ──────────────────────────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  // },

  // ── App / PWA hints ────────────────────────────────────────────────────────
  applicationName: "Talha Waheed Portfolio",
  category: "technology",
};

// ─── JSON-LD Structured data ──────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Talha Waheed",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.png`,
  jobTitle: "Full-Stack GIS Developer & Spatial Data Engineer",
  description:
    "Talha Waheed is a Full-Stack GIS Developer specialising in geospatial APIs, coordinate conversion, interactive mapping, remote sensing, and ArcGIS Pro SDK customization.",
  knowsAbout: [
    "GIS Development",
    "Geospatial APIs",
    "Mapbox GL JS",
    "PostGIS",
    "FastAPI",
    "ArcGIS Pro SDK",
    "QGIS",
    "Coordinate Conversion",
    "Remote Sensing",
    "Python",
    "TypeScript",
    "Next.js",
    "Spatial Data Engineering",
  ],
  alumniOf: [
    { "@type": "Organization", name: "WorldQuant University" },
    { "@type": "Organization", name: "Google (Coursera)" },
  ],
  sameAs: [
    "https://github.com/talhawgj",
    "https://www.linkedin.com/in/talha-waheed",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_URL,
  name: "Talha Waheed | GIS Developer Portfolio",
  description:
    "Portfolio of Talha Waheed — Full-Stack GIS Developer & Spatial Data Engineer.",
  author: { "@type": "Person", name: "Talha Waheed" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/projects/{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── Root layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
