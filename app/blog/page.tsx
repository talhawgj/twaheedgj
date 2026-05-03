import type { Metadata } from "next";
import Link from "next/link";
import Logo from "../components/Logo";
import { blogPosts } from "../data/blogs";

const BASE_URL = "https://twaheedgj.vercel.app";

export const metadata: Metadata = {
  title: "GIS & Remote Sensing Blog — Talha Waheed",
  description:
    "Technical writing on GIS development, remote sensing pipelines, satellite imagery analysis, and cloud-native geospatial architecture by Talha Waheed.",
  keywords: [
    "GIS blog",
    "remote sensing",
    "burn scar detection",
    "Sentinel-2",
    "Landsat",
    "geospatial python",
    "Talha Waheed",
    "satellite imagery",
    "wildfire mapping",
  ],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/blog`,
    siteName: "Talha Waheed Portfolio",
    title: "GIS & Remote Sensing Blog — Talha Waheed",
    description:
      "Technical writing on GIS development, remote sensing pipelines, and cloud-native geospatial architecture.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIS & Remote Sensing Blog — Talha Waheed",
    description:
      "Technical writing on GIS, remote sensing, satellite imagery analysis, and spatial data engineering.",
  },
  robots: { index: true, follow: true },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Remote Sensing": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "GIS & Geospatial": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Backend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Full Stack": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Data Science & ML": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ─── Nav ────────────────────────────────────────────────── */}
      <nav className="fixed w-full z-50 top-0 left-0 nav-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-slate-400 text-sm">Blog</span>
          <div className="ml-auto">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Logo size={32} />
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-24 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">

          {/* ─── Header ─────────────────────────────────────────── */}
          <div className="mb-16 relative">
            {/* Ambient glow */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-yellow-600/8 blur-[100px] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-400 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                Technical Writing
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                <span className="text-white">GIS &amp; Remote</span>{" "}
                <span className="gradient-text">Sensing Blog</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                In-depth technical articles on geospatial development, satellite
                imagery pipelines, and cloud-native GIS architecture. Written
                from real production experience.
              </p>
            </div>
          </div>

          {/* ─── Stats strip ─────────────────────────────────────── */}
          <div className="grid grid-cols-3 gap-4 mb-16 p-6 rounded-2xl bg-white/[0.02] border border-white/8">
            {[
              { value: String(blogPosts.length), label: "Articles Published" },
              { value: String(categories.length), label: "Topic Areas" },
              { value: "8 min", label: "Avg. Read Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ─── Blog Cards ──────────────────────────────────────── */}
          <div className="space-y-8">
            {blogPosts.map((post, i) => {
              const catColor =
                CATEGORY_COLORS[post.category] ??
                "bg-slate-500/10 text-slate-400 border-slate-500/20";

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  id={`blog-card-${i}`}
                  className="group block rounded-2xl bg-white/[0.02] border border-white/8 hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1"
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-red-500 to-orange-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="p-8">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${catColor}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-slate-600 text-xs">
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-slate-600 text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-yellow-50 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ─── Footer CTA ──────────────────────────────────────── */}
          <div className="mt-20 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Want to discuss geospatial technology or collaborate?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-yellow-500/40 transition-all duration-200 text-sm font-semibold"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
