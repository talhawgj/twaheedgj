import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Logo from "../../components/Logo";
import { projects, getProjectBySlug } from "../../data/projects";

// ─── Static generation ───────────────────────────────────────────────────────
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://twaheedgj.vercel.app";

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  const url = `${BASE_URL}/projects/${slug}`;
  const title = `${project.title} — Talha Waheed`;
  const description = project.description;
  const ogImage = {
    url: `/og-image.png`,
    width: 1200,
    height: 630,
    alt: `${project.title} — Talha Waheed GIS Developer`,
  };

  return {
    title,
    description,
    keywords: [
      project.title,
      ...project.tags,
      project.category,
      "Talha Waheed",
      "GIS Developer",
      "Geospatial projects",
    ],
    authors: [{ name: "Talha Waheed", url: BASE_URL }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Talha Waheed Portfolio",
      title,
      description,
      images: [ogImage],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: { index: true, follow: true },
  };
}


const CATEGORY_COLORS: Record<string, string> = {
  "GIS & Geospatial": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Remote Sensing": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Frontend: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Backend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Full Stack": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Data Science & ML": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Desktop GIS": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Data Engineering": "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const relatedProjects = projects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  // ─── Structured Data ────────────────────────────────────────────────────────
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/projects/${slug}`,
    codeRepository: project.github ?? undefined,
    programmingLanguage: project.tags,
    author: {
      "@type": "Person",
      name: "Talha Waheed",
      url: BASE_URL,
    },
    dateCreated: `${project.year}-01-01`,
    keywords: [...project.tags, project.category].join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${BASE_URL}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${BASE_URL}/projects/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ─── JSON-LD ───────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─── Nav ──────────────────────────────────────────────── */}
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
          <span className="text-slate-400 text-sm truncate max-w-xs">{project.title}</span>
          <div className="ml-auto">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Logo size={32} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── Hero Banner ──────────────────────────────────────── */}
      <div className={`relative bg-gradient-to-br ${project.gradient} pt-32 pb-20 px-5 sm:px-8 overflow-hidden`}>
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-[#080c14]/60 backdrop-blur-[2px]" />
        {/* Ambient light blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full bg-white/5 blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-full bg-black/20 blur-[60px]" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white border-white/20"}`}>
              {project.category}
            </span>
            <span className="text-white/40 text-sm">{project.year}</span>
            {project.status === "wip" && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
                In Progress
              </span>
            )}
          </div>

          <div className="flex items-start gap-6">
            <div className="text-7xl sm:text-8xl flex-shrink-0 filter drop-shadow-2xl">{project.icon}</div>
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl">{project.tagline}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                id={`github-link-${project.slug}`}
                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-xl shadow-black/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
              </a>
            )}

          </div>
        </div>
      </div>

      {/* ─── Main Content ─────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left – main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">
                  📋
                </span>
                Project Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            {/* Long Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">
                  💡
                </span>
                The Problem & Solution
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                {project.longDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
                  ✨
                </span>
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:bg-white/[0.05] transition-colors"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs font-bold mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture (if present) */}
            {project.architecture && project.architecture.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm">
                    🏗️
                  </span>
                  Architecture & Stack
                </h2>
                <div className="relative pl-6 border-l-2 border-white/10 space-y-6">
                  {project.architecture.map((layer, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-yellow-500 border-2 border-black" />
                      <p className="text-slate-300 text-sm leading-relaxed">{layer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right – sidebar */}
          <aside className="space-y-6">
            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Project Info</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-slate-500 uppercase tracking-wide mb-1">Category</dt>
                  <dd>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white border-white/20"}`}>
                      {project.category}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 uppercase tracking-wide mb-1">Year</dt>
                  <dd className="text-slate-300 text-sm font-medium">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 uppercase tracking-wide mb-1">Status</dt>
                  <dd>
                    <span className={`flex items-center gap-1.5 text-sm font-medium ${project.status === "complete" ? "text-emerald-400" : "text-yellow-400"}`}>
                      <span className={`w-2 h-2 rounded-full ${project.status === "complete" ? "bg-emerald-400" : "bg-yellow-400 animate-pulse"}`} />
                      {project.status === "complete" ? "Completed" : "In Progress"}
                    </span>
                  </dd>
                </div>
                {project.github && (
                  <div>
                    <dt className="text-xs text-slate-500 uppercase tracking-wide mb-1">Repository</dt>
                    <dd>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center gap-1.5 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20">
              <h3 className="text-base font-bold text-white mb-2">Interested?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Want to discuss a similar project or collaborate?
              </p>
              <a
                href="mailto:talhawaheed7807@gmail.com"
                className="block text-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold text-sm hover:opacity-90 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </aside>
        </div>

        {/* ─── Related Projects ───────────────────────────────── */}
        {relatedProjects.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-white mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link key={related.slug} href={`/projects/${related.slug}`} className="group">
                  <article className="h-full flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                    <div className={`h-28 bg-gradient-to-br ${related.gradient} flex items-center justify-center`}>
                      <div className="text-4xl">{related.icon}</div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-white mb-1.5 group-hover:text-yellow-300 transition-colors text-sm">
                        {related.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">
                        {related.tagline}
                      </p>
                      <span className="text-xs text-yellow-400 font-semibold flex items-center gap-1">
                        View Project
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── Prev / Next Navigation ─────────────────────────── */}
        <div className="mt-20 pt-10 border-t border-white/8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all"
            >
              <span className="text-2xl">{prevProject.icon}</span>
              <div>
                <div className="text-xs text-slate-500 mb-1">← Previous</div>
                <div className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all text-right"
            >
              <div>
                <div className="text-xs text-slate-500 mb-1">Next →</div>
                <div className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                  {nextProject.title}
                </div>
              </div>
              <span className="text-2xl">{nextProject.icon}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to all projects */}
        <div className="mt-10 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
