"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  icon: string;
  gradient: string;
  year: string;
  status: "complete" | "wip" | "archived";
  live?: string;
  github?: string;
  features: string[];
  architecture?: string[];
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

export default function ProjectList({ projects, categories }: { projects: Project[]; categories: string[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {["All", ...categories].map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                isActive
                  ? cat === "All"
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/20"
                    : CATEGORY_COLORS[cat]?.replace("text-", "bg-").replace(/\/\d+/, "") +
                      " text-white border-transparent shadow-lg object-none shadow-white/10"
                  : CATEGORY_COLORS[cat]
                  ? `${CATEGORY_COLORS[cat]} hover:bg-white/10`
                  : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No projects found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <article className="h-full flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1">
                {/* Card header gradient */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl filter drop-shadow-xl">{project.icon}</div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                        CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white border-white/20"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white/40 text-xs font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-xs text-slate-500 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-xs text-slate-600 font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                      View Details
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                    {project.github && (
                      <span className="text-xs text-slate-600 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        Open Source
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
