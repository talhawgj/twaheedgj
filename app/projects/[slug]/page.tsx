import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Logo from "../../components/Logo";
import ProjectPageClient from "../../components/ProjectPageClient";
import { projects, getProjectBySlug } from "../../data/projects";
import { generateBreadcrumbSchema, generateProjectSchema } from "../../lib/seo-schemas";

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
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

      {/* ─── Client Component Content ─────────────────────────── */}
      <ProjectPageClient
        project={project}
        currentIndex={currentIndex}
        prevProject={prevProject}
        nextProject={nextProject}
        relatedProjects={relatedProjects}
        categoryColors={CATEGORY_COLORS}
      />
    </div>
  );
}
