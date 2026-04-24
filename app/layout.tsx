import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://twaheedgj.vercel.app";

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

  // ── Description (150-160 chars) ─────────────────────────────────────────────
  description:
    "Full-Stack GIS Developer specializing in mapping, spatial data, QGIS, ArcGIS Pro, PostGIS, and geospatial APIs. Building scalable applications.",

  // ── Keywords — long-tail + short-tail mix ──────────────────────────────────
  keywords: [
    // Name-based
    "Talha Waheed",
    "Talha Waheed GIS",
    "Talha Waheed developer",
    "Talha Waheed portfolio",
    // High-volume GIS keywords
    "GIS mapping",
    "GIS data",
    "GIS software",
    "GIS portal",
    "GIS mapping software",
    "Web GIS",
    "Geospatial data",
    "Geospatial software",
    "Geospatial analysis",
    "QGIS",
    "QGIS desktop",
    "QGIS download",
    "ArcGIS",
    "ArcGIS online",
    "ArcGIS Pro",
    "Mapping",
    "Map data",
    "Geographic information system",
    "Geographic information systems",
    // Role-based
    "Full-Stack GIS Developer",
    "GIS Developer Oman",
    "GIS Developer Pakistan",
    "Spatial Data Engineer",
    "Geospatial Software Engineer",
    "GIS Software Developer",
    "GIS Web Developer",
    "GIS Application Developer",
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
    "Supabase PostgreSQL developer",
    "React 19 developer",
    "Zod validation TypeScript",
    // General tech
    "Next.js developer",
    "TypeScript developer",
    "Python FastAPI developer",
    "Remote Sensing developer",
    "Full-Stack developer",
    "Supabase developer",
    "Geospatial portfolio",
    "GIS portfolio 2025",
    "GIS developer for hire",
    "hire GIS developer",
    "freelance GIS developer",
    "geospatial consultant",
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
  // NOTE: opengraph-image.tsx auto-generates the OG PNG — no manual url needed here.
  // Next.js 15+ App Router automatically sets the OG image from the file.
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Talha Waheed — GIS Developer Portfolio",
    title: "Talha Waheed | Full-Stack GIS Developer & Spatial Data Engineer",
    description:
      "Expert in GIS mapping, GIS software development, web GIS applications, and spatial data engineering. Building production-grade geospatial applications, coordinate conversion APIs, interactive mapping tools, QGIS plugins, and remote sensing pipelines.",
    locale: "en_US",
  },

  // ── Twitter Card ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Talha Waheed | Full-Stack GIS Developer",
    description:
      "GIS Mapping & Spatial Data Expert. FastAPI GIS APIs · Web GIS Portals · QGIS · ArcGIS Pro · Mapbox · PostGIS. Building geospatial software solutions.",
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

  // ── Verification ───────────────────────────────────────────────────────────
  verification: {
    google: "Jx4J_xJiw1QuzppLdKArtl0mfakwhsM2FOo-Jf1wQ0I",
  },

  // ── App / PWA hints ────────────────────────────────────────────────────────
  applicationName: "Talha Waheed Portfolio",
  category: "technology",

  // ── Additional SEO fields ──────────────────────────────────────────────────
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",

  // ── Geo tags ──────────────────────────────────────────────────────────────
  other: {
    "geo.placename": "Pakistan",
    "geo.region": "PK",
    ICBM: "24.8607, 67.0011", // Karachi coordinates
  },
};

// ─── Viewport (separate export required by Next.js App Router) ────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

// ─── JSON-LD Structured data ──────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Talha Waheed",
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
  },
  jobTitle: [
    "Full-Stack GIS Developer",
    "Spatial Data Engineer",
    "Geospatial Software Engineer"
  ],
  description:
    "Full-Stack GIS Developer specializing in geospatial APIs, coordinate conversion systems, interactive web mapping, remote sensing pipelines, ArcGIS Pro SDK customization, and PostGIS database engineering.",
  knowsAbout: [
    "GIS Development",
    "Geospatial APIs",
    "Mapbox GL JS",
    "PostGIS",
    "Supabase",
    "Supabase Storage",
    "FastAPI",
    "Next.js API Routes",
    "ArcGIS Pro SDK",
    "QGIS",
    "Coordinate Conversion",
    "Remote Sensing",
    "Python",
    "TypeScript",
    "Next.js",
    "Zod",
    "Axios",
    "Spatial Data Engineering",
    "Web GIS",
    "Vector Tiles",
    "Geospatial Analysis"
  ],
  alumniOf: [
    { "@type": "Organization", name: "WorldQuant University", url: "https://wqu.edu" },
    { "@type": "Organization", name: "Google Cloud" },
    { "@type": "Organization", name: "Coursera", url: "https://coursera.org" },
  ],
  sameAs: [
    "https://github.com/talhawgj",
    "https://www.linkedin.com/in/talha-waheed",
    "https://upwork.com/freelancers/talhaw",
  ],
  affiliation: {
    "@type": "Organization",
    name: "Self-employed GIS Developer",
  },
  homeLocation: {
    "@type": "City",
    name: "Karachi",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK"
    }
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Talha Waheed — GIS Developer",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
  },
  description:
    "Portfolio and services of Talha Waheed, a Full-Stack GIS Developer offering geospatial API development, web GIS solutions, and spatial data engineering.",
  sameAs: [
    "https://github.com/talhawgj",
    "https://www.linkedin.com/in/talha-waheed",
    "https://upwork.com/freelancers/talhaw",
  ],
  founder: {
    "@type": "Person",
    name: "Talha Waheed"
  },
  foundingDate: "2023",
  areaServed: ["PK", "GB", "US", "AE"],
  serviceType: [
    "Geospatial Software Development",
    "GIS Application Development",
    "Web GIS Portal Development",
    "Coordinate Conversion API",
    "Remote Sensing Solution",
    "Spatial Data Engineering"
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Talha Waheed | GIS Developer Portfolio",
  description:
    "Portfolio of Talha Waheed — Full-Stack GIS Developer & Spatial Data Engineer showcasing GIS projects, web mapping applications, and geospatial solutions.",
  author: { "@type": "Person", name: "Talha Waheed" },
  creator: { "@type": "Person", name: "Talha Waheed" },
  publisher: {
    "@type": "Person",
    name: "Talha Waheed"
  },
  isPartOf: {
    "@type": "Organization",
    name: "Talha Waheed — GIS Developer"
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/projects?search={search_term_string}`,
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
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Microsoft Clarity Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wdrl2owln2");
            `
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
