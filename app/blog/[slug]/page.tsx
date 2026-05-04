import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Logo from "../../components/Logo";
import { blogPosts, getBlogPostBySlug } from "../../data/blogs";
import type { BlogSection } from "../../data/blogs";
import { generateArticleSchema } from "../../lib/seo-schemas";

// ─── Static generation ────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://twaheedgj.vercel.app";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${BASE_URL}/blog/${slug}`;
  const title = `${post.title} — Talha Waheed`;

  return {
    title,
    description: post.metaDescription,
    keywords: [
      post.focusKeyword,
      ...post.tags,
      "Talha Waheed",
      "GIS Developer",
      "Remote Sensing",
    ],
    authors: [{ name: "Talha Waheed", url: BASE_URL }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Talha Waheed Portfolio",
      title,
      description: post.metaDescription,
      locale: "en_US",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseText(text: string | undefined): React.ReactNode {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-white font-semibold">{parseText(part.slice(2, -2))}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="text-white italic">{parseText(part.slice(1, -1))}</em>;
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} target="_blank" rel="noreferrer" className="text-yellow-400 hover:underline">
          {parseText(linkMatch[1])}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// ─── Content Renderer ─────────────────────────────────────────────────────────
function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading2":
      return (
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-5 leading-snug flex items-center gap-3">
          <span className="w-1 h-8 rounded-full bg-gradient-to-b from-yellow-400 to-orange-500 flex-shrink-0" />
          {section.text}
        </h2>
      );
    case "heading3":
      return (
        <h3 className="text-xl font-semibold text-slate-200 mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-5">
          {parseText(section.text)}
        </p>
      );
    case "formula":
      return (
        <div className="my-6 rounded-xl bg-black/60 border border-yellow-500/20 p-5 text-center overflow-x-auto">
          <code className="text-yellow-300 text-lg sm:text-xl font-mono font-semibold tracking-wide">
            {section.text}
          </code>
        </div>
      );
    case "bulletList":
      return (
        <ul className="space-y-3 mb-6 ml-2">
          {section.items?.map((item, i) => {
            const hasMarkdownBold = item.includes("**");
            
            if (hasMarkdownBold) {
              return (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
                  <span className="flex-1">{parseText(item)}</span>
                </li>
              );
            }

            const hasColon = item.includes(":");
            if (hasColon) {
              const colonIndex = item.indexOf(":");
              const boldPart = item.slice(0, colonIndex);
              const rest = item.slice(colonIndex + 1);
              return (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
                  <span className="flex-1">
                    <strong className="text-white font-semibold">{boldPart}:</strong>
                    {rest}
                  </span>
                </li>
              );
            }
            return (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
                <span className="flex-1">{item}</span>
              </li>
            );
          })}
        </ul>
      );
    case "callout":
      const variantMap = {
        info: {
          border: "border-blue-500/30",
          bg: "bg-blue-500/5",
          icon: "💡",
          label: "Note",
          labelColor: "text-blue-400",
        },
        tip: {
          border: "border-emerald-500/30",
          bg: "bg-emerald-500/5",
          icon: "✅",
          label: "Pro Tip",
          labelColor: "text-emerald-400",
        },
        warning: {
          border: "border-yellow-500/30",
          bg: "bg-yellow-500/5",
          icon: "⚠️",
          label: "Warning",
          labelColor: "text-yellow-400",
        },
      };
      const v = variantMap[section.variant ?? "info"];
      return (
        <div className={`my-6 rounded-xl border ${v.border} ${v.bg} p-5`}>
          <div className={`flex items-center gap-2 text-sm font-semibold mb-2 ${v.labelColor}`}>
            <span>{v.icon}</span>
            {v.label}
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{section.text}</p>
        </div>
      );
    case "conclusion":
      return (
        <div className="mt-12 p-7 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-orange-600/5 border border-yellow-500/20">
          <h2 className="text-xl font-bold text-yellow-400 mb-3">Conclusion</h2>
          <p className="text-slate-300 leading-relaxed">{section.text}</p>
        </div>
      );
    case "image":
      return (
        <figure className="my-10">
          <img src={section.src} alt={section.alt} className="w-full h-auto rounded-xl border border-white/10" />
          {section.caption && <figcaption className="text-center text-sm text-slate-500 mt-3">{section.caption}</figcaption>}
        </figure>
      );
    case "table":
      return (
        <div className="overflow-x-auto my-8 border border-white/10 rounded-xl bg-white/[0.02]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                {section.headers?.map((h, i) => (
                  <th key={i} className="border-b border-white/10 py-4 px-5 font-semibold text-white bg-white/[0.03] text-sm tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors last:border-b-0">
                  {row.map((cell, j) => (
                    <td key={j} className="py-4 px-5 text-slate-300 text-sm leading-relaxed">{parseText(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  // JSON-LD schema
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: "Talha Waheed",
    content: post.excerpt,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${slug}`,
      },
    ],
  };

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ─── JSON-LD ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─── Nav ─────────────────────────────────────────────────── */}
      <nav className="fixed w-full z-50 top-0 left-0 nav-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Blog
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-slate-400 text-sm truncate max-w-xs">{post.title}</span>
          <div className="ml-auto">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Logo size={32} />
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">

          {/* ─── Hero Header ─────────────────────────────────────── */}
          <header className="mb-12 relative">
            {/* Ambient glow */}
            <div
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-orange-600/8 blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative">
              {/* Category badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-orange-500/10 text-orange-400 border-orange-500/20">
                  {post.category}
                </span>
                <span className="text-slate-600 text-sm">{formatDate(post.publishedAt)}</span>
                <span className="text-slate-700">·</span>
                <span className="text-slate-600 text-sm flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg text-slate-400 leading-relaxed mb-8 border-l-2 border-yellow-500/40 pl-4">
                {post.excerpt}
              </p>

              {/* Author strip */}
              <div className="flex items-center gap-3 pb-8 border-b border-white/8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  TW
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Talha Waheed</div>
                  <div className="text-xs text-slate-500">GIS Developer · Remote Sensing Engineer</div>
                </div>
                <div className="ml-auto flex gap-2">
                  <a
                    href="https://github.com/talhawgj"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-yellow-400 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/talhawgj/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-yellow-400 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* ─── Tags ────────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ─── Article Body ─────────────────────────────────────── */}
          <article className="prose-custom">
            {post.content.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
          </article>

          {/* ─── Related Project CTA ──────────────────────────────── */}
          <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-600/20 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
              🔥
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                Related Project
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">
                Burn Scar Mapping API
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                The production API behind this pipeline — FastAPI, Sentinel Hub,
                AWS S3, and Firebase.
              </p>
            </div>
            <Link
              href="/projects/burn-scar-api"
              id="blog-related-project-cta"
              className="px-5 py-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold hover:bg-yellow-500/20 transition-colors flex-shrink-0"
            >
              View Project →
            </Link>
          </div>

          {/* ─── Post Navigation ──────────────────────────────────── */}
          {(prevPost || nextPost) && (
            <div className="mt-12 grid grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-white/20 transition-all"
                >
                  <div className="text-xs text-slate-600 mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Previous
                  </div>
                  <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug">
                    {prevPost.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-white/20 transition-all text-right"
                >
                  <div className="text-xs text-slate-600 mb-2 flex items-center justify-end gap-1">
                    Next
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug">
                    {nextPost.title}
                  </div>
                </Link>
              )}
            </div>
          )}

          {/* ─── Back to blog ────────────────────────────────────── */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-yellow-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
