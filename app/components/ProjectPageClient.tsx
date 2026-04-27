"use client";

import Link from "next/link";
import { useState } from "react";
import ContactDialog from "./ContactDialog";
import type { Project } from "../data/projects";

interface ProjectPageClientProps {
  project: Project;
  currentIndex: number;
  prevProject: Project | null;
  nextProject: Project | null;
  relatedProjects: Project[];
  categoryColors: Record<string, string>;
}

export default function ProjectPageClient({
  project,
  prevProject,
  nextProject,
  relatedProjects,
  categoryColors,
}: ProjectPageClientProps) {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const CATEGORY_COLORS = categoryColors;

  return (
    <>
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
            <div className="text-7xl sm:text-8xl flex-shrink-0 filter drop-shadow-2xl" aria-hidden="true">{project.icon}</div>
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 mb-6">{project.tagline}</p>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold transition-all"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Content ──────────────────────────────────────────── */}
      <div className="py-24 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left – main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-slate-400 text-lg leading-relaxed">{project.longDescription}</p>
            </section>

            {/* Features */}
            {project.features.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-yellow-400 font-bold text-lg mt-0.5">›</span>
                      <span className="text-slate-400 text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-8">Architecture & Tech Stack</h2>
                <div className="space-y-4">
                  {project.architecture.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8">
                      <span className="text-yellow-400 font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                      <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
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
              <button
                onClick={() => setIsContactDialogOpen(true)}
                className="w-full text-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold text-sm hover:opacity-90 transition-all"
              >
                Get in Touch
              </button>
            </div>
          </aside>
        </div>

        {/* ─── Related Projects ───────────────────────────────── */}
        {relatedProjects.length > 0 && (
          <section className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link key={related.slug} href={`/projects/${related.slug}`} className="group">
                  <article className="h-full flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                    <div className={`h-28 bg-gradient-to-br ${related.gradient} flex items-center justify-center`}>
                      <div className="text-4xl" aria-hidden="true">{related.icon}</div>
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
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ─── Pagination ───────────────────────────────────────── */}
        <div className="mt-24 max-w-5xl mx-auto flex gap-4 justify-between">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Previous</div>
                <div className="text-sm font-semibold group-hover:text-yellow-400 transition-colors">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-right">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Next</div>
                <div className="text-sm font-semibold group-hover:text-yellow-400 transition-colors">{nextProject.title}</div>
              </div>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Contact Dialog */}
      <ContactDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
      />
    </>
  );
}
