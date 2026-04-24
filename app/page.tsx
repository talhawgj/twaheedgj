import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import NavBar from "./components/NavBar";
import { projects } from "./data/projects";
import ProjectList from "./components/ProjectList";
import { LazySatelliteOrbitAnimation, LazyDataFlowMapAnimation } from "./components/LazyAnimations";
import { ScrollReveal } from "./components/ScrollReveal";
import { AnimatedCard } from "./components/AnimatedCard";
import DeferredDecorations from "./components/DeferredDecorations";

export const metadata: Metadata = {
  title: "Talha Waheed — Full-Stack GIS Developer | GIS Mapping & Spatial Data",
  description:
    "Full-Stack GIS Developer specializing in mapping, spatial data, QGIS, ArcGIS Pro, and geospatial APIs for real-world impact. Explore portfolio of 5+ GIS projects.",
  openGraph: {
    title: "Talha Waheed | Full-Stack GIS Developer",
    description:
      "Full-Stack GIS Developer specializing in geospatial APIs, coordinate conversion, web GIS portals, and spatial data engineering.",
    url: "https://twaheedgj.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Waheed | GIS Developer",
    description:
      "Full-Stack GIS Developer. Geospatial APIs, Web GIS, Coordinate Conversion, Remote Sensing.",
  },
};

export default function Home() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  // ─── JSON-LD Schemas ───────────────────────────────────────────────────────
  const projectCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "GIS Projects Portfolio",
    description:
      "A comprehensive portfolio of GIS development projects by Talha Waheed, showcasing expertise in geospatial software, web mapping, and spatial data engineering.",
    url: "https://twaheedgj.vercel.app",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
        url: `https://twaheedgj.vercel.app/projects/${project.slug}`,
        image: `https://twaheedgj.vercel.app/og-image.svg`,
      })),
    },
  };

  return (
    <>
      <Script
        id="project-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectCollectionSchema) }}
        strategy="afterInteractive"
      />

      <DeferredDecorations />

      <main className="min-h-screen bg-black text-white">
        <NavBar />


        {/* ─── Hero ────────────────────────────────────────────── */}
        <section
          id="about"
          className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-24 pb-20 overflow-hidden bg-gradient-to-b from-black via-black to-yellow-600/5"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-yellow-600/10 blur-[120px]" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-yellow-600/8 blur-[100px]" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 hero-grid opacity-[0.03] pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Satellite Orbit Animation - deferred, never blocks LCP */}
            <div
              className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-full max-w-3xl">
                <LazySatelliteOrbitAnimation />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-400 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight mb-6 leading-none">
              <span className="block text-white">Talha</span>
              <span className="block gradient-text">Waheed</span>
            </h1>

            <p className="text-lg sm:text-2xl text-yellow-400 font-semibold mb-5 tracking-wide uppercase text-sm">
              Full-Stack GIS Developer & Spatial Data Engineer
            </p>

            <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-12">
              Specializing in GIS mapping, GIS software development, and geospatial data analysis. Building scalable web GIS
              applications that bridge satellite imagery, cloud infrastructure, and real-world intelligence — from geodetic conversion
              APIs to interactive GIS portals and 3D terrain visualization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#projects"
                className="group px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:opacity-90 transition-all duration-200 shadow-xl shadow-yellow-500/30 flex items-center gap-2"
              >
                View My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://github.com/talhawgj"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:talhawaheed7807@gmail.com"
                className="px-8 py-3.5 rounded-full font-semibold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-200"
              >
                Email Me
              </a>
              <a
                href="https://upwork.com/freelancers/talhaw"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.58,6.86A5.25,5.25,0,0,0,13.26,9.1V2.6H10.42V13.88a3.17,3.17,0,1,1-6.33,0V6.86H1.25v7.2a6,6,0,0,0,12,0V11a2.4,2.4,0,0,1,4.36,1.42c0,3-4.52,7.31-4.52,7.31L15.3,21.8l3.6-5.83A5.13,5.13,0,0,0,20.42,12C20.42,8.91,19.34,6.86,17.58,6.86Z" />
                </svg>
                Upwork
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs">
            <span>Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
          </div>
        </section>

        {/* ─── Stats ───────────────────────────────────────────── */}
        <ScrollReveal>
          <section className="defer-paint relative py-16 px-5 sm:px-8 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { value: `${projects.length}+`, label: "GitHub Projects" },
                { value: "3+", label: "Years Experience" },
                { value: "5+", label: "Specializations" },
                { value: "100%", label: "Python & TypeScript" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-extrabold gradient-text mb-2">{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ─── Skills ──────────────────────────────────────────── */}
        <ScrollReveal>
          <section id="skills" className="defer-paint relative py-24 px-5 sm:px-8 overflow-hidden">
            {/* Data Flow Map Animation Background */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
              <LazyDataFlowMapAnimation />
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Technical Arsenal</h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  A full-stack toolkit spanning GIS software, geospatial data technologies, web GIS platforms, cloud
                  infrastructure, and advanced spatial analytics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    cat: "Geospatial & GIS",
                    icon: "🌍",
                    color: "border-emerald-500/30 hover:border-emerald-500/60",
                    glow: "hover:shadow-emerald-500/10",
                    skills: ["QGIS Desktop & Web GIS", "ArcGIS Pro & Online", "PostGIS & PostgreSQL", "Mapbox GL JS / Cesium", "GeoServer & Web Services", "Pyproj & GDAL", "GeoPandas & Shapely", "OSRM Routing Engine"],
                  },
                  {
                    cat: "Backend & APIs",
                    icon: "⚡",
                    color: "border-yellow-500/30 hover:border-yellow-500/60",
                    glow: "hover:shadow-yellow-500/10",
                    skills: ["FastAPI & Uvicorn", "Next.js API Routes", "Supabase (PostgreSQL)", "Supabase Storage", "Zod Schema Validation", "SQLAlchemy", "JWT Authentication", "Docker & Compose"],
                  },
                  {
                    cat: "Frontend",
                    icon: "🎨",
                    color: "border-yellow-500/30 hover:border-yellow-500/60",
                    glow: "hover:shadow-yellow-500/10",
                    skills: ["Next.js 16 / React 19", "TypeScript", "Tailwind CSS", "Axios", "Recharts & D3", "Mapbox GL JS", "Framer Motion", "Vite"],
                  },
                ].map((category, index) => (
                  <AnimatedCard
                    key={category.cat}
                    index={index}
                    className={`p-6 rounded-2xl bg-white/[0.03] border ${category.color} transition-all duration-300 shadow-xl ${category.glow}`}
                  >
                    <div className="text-3xl mb-4">{category.icon}</div>
                    <h3 className="text-base font-bold text-white mb-5">{category.cat}</h3>
                    <ul className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}

                {/* Data Science & ML card simplified */}
                <AnimatedCard
                  index={3}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 shadow-xl hover:shadow-yellow-500/10"
                >
                  <div className="text-3xl mb-4">🧠</div>
                  <h3 className="text-base font-bold text-white mb-5">Data Science & ML</h3>
                  <ul className="space-y-2.5">
                    {["Python & Pandas", "Scikit-learn", "Google Earth Engine", "Rasterio", "AWS S3 / EC2", "Firebase", "Sentinel Hub API", "Selenium Web Scraping"].map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ─── Certifications ──────────────────────────────────── */}
        <ScrollReveal>
          <section id="certifications" className="defer-paint py-24 px-5 sm:px-8 border-y border-white/5 bg-white/[0.015]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Certifications</h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Industry-recognised credentials verifying applied data science and analytics expertise.
                </p>
              </div>

              {/* Flat unified grid — all 5 certs, no sub-sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Applied Data Science Lab */}
                <AnimatedCard index={0} className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1">
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">🎓</div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Issued by</div>
                        <div className="text-sm font-semibold text-slate-300">WorldQuant University</div>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Verified
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">Applied Data Science Lab</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Completed 8 end-to-end data science projects — from SQL/NoSQL data access and ETL pipelines to ML model building and visualisation for non-technical audiences.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Python", "SQL & NoSQL", "ETL Pipelines", "Scikit-learn", "Supervised ML", "Unsupervised ML", "Data Visualisation", "Feature Engineering"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs font-medium">{s}</span>
                      ))}
                    </div>
                    <a href="https://www.credly.com/badges/e3def220-e11a-46e3-a00d-bc7311532744/public_url" target="_blank" rel="noreferrer" id="badge-applied-ds"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                      Verify on Credly
                    </a>
                  </div>
                </AnimatedCard>

                {/* Google Data Analytics */}
                <AnimatedCard index={1} className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1">
                  <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-green-500/20 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">🏅</div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Issued by</div>
                        <div className="text-sm font-semibold text-slate-300">Google</div>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Verified
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                      Google Data Analytics
                      <span className="ml-2 text-sm font-medium text-slate-500">Professional Certificate</span>
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Demonstrated proficiency in preparing, processing, analysing, and sharing data using spreadsheets, SQL, Tableau, and R.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["SQL", "R", "Tableau", "Spreadsheets", "Data Cleaning", "Data Analysis", "Data Visualisation", "Business Intelligence"].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs font-medium">{s}</span>
                      ))}
                    </div>
                    <a href="https://www.credly.com/badges/64f6168c-71cc-42a5-84d7-d5322a13a9a3/public_url" target="_blank" rel="noreferrer" id="badge-google-analytics"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                      Verify on Credly
                    </a>
                  </div>
                </AnimatedCard>

                {/* Tableau BI Analyst */}
                <AnimatedCard index={2}>
                  <a href="https://coursera.org/share/06f89c9b2306cb35c73f71e49941a216" target="_blank" rel="noreferrer" id="cert-tableau"
                    className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1 h-full">
                    <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 to-blue-600" />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">📊</div>
                        <div>
                          <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Tableau · Specialization</div>
                          <div className="text-sm font-semibold text-slate-300">Coursera</div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">Tableau Business Intelligence Analyst</h3>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {["Tableau Desktop", "Data Visualisation", "BI Dashboards", "Data Analysis"].map(s => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                </AnimatedCard>

                {/* Machine Learning — Stanford & DeepLearning.AI */}
                <AnimatedCard index={3}>
                  <a href="https://coursera.org/share/3c4efb3607992bc92b8ed96ad6315803" target="_blank" rel="noreferrer" id="cert-ml-stanford"
                    className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1 h-full">
                    <div className="h-1.5 w-full bg-gradient-to-r from-red-500 to-orange-500" />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">🤖</div>
                        <div>
                          <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Stanford & DeepLearning.AI · Specialization</div>
                          <div className="text-sm font-semibold text-slate-300">Coursera</div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Machine Learning Specialization</h3>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {["Supervised ML", "Neural Networks", "Decision Trees", "Recommender Systems"].map(s => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                </AnimatedCard>

                {/* Microsoft Python Development */}
                <AnimatedCard index={4} className="md:col-span-2">
                  <a href="https://coursera.org/share/f0d9604ec8029e01b47a7da7e9a43f82" target="_blank" rel="noreferrer" id="cert-ms-python"
                    className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1 h-full">
                    <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    <div className="p-7 flex flex-col lg:flex-row lg:items-center gap-5">
                      <div className="flex items-center gap-3 lg:flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-xl">🐍</div>
                        <div>
                          <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Microsoft · Specialization</div>
                          <div className="text-sm font-semibold text-slate-300">Coursera</div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors lg:flex-1">Microsoft Python Development</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Data Analysis", "Visualisation", "OOP"].map(s => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="projects" className="defer-paint py-24 px-5 sm:px-8 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">GIS Projects & Geospatial Solutions</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  {projects.length} projects featuring GIS mapping, spatial data analysis, web GIS portals, geospatial software, QGIS tools, ArcGIS integrations, and full-stack applications.
                </p>
              </div>

              <ProjectList projects={projects} categories={categories} />

              {/* GitHub CTA */}
              <div className="text-center">
                <a
                  href="https://github.com/talhawgj"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  See All Repositories on GitHub
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ─── Contact ────────────────────────────────────────────── */}
        <ScrollReveal>
          <footer id="contact" className="defer-paint py-28 px-5 sm:px-8 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-yellow-600/10 blur-[100px]" />
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Let&apos;s Build a GIS Solution{" "}
                  <span className="gradient-text">Together</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  Available for GIS development, geospatial projects, web GIS applications, spatial data engineering, and consulting. Whether
                  it&apos;s a GIS mapping platform, geospatial API, data pipeline, or custom GIS software — let&apos;s discuss your next project.
                </p>
              </div>

              {/* Contact Icons - Minimal Design */}
              <div className="flex justify-center items-center gap-6 mb-20">
                {/* Email */}
                <a
                  href="mailto:talhawaheed7807@gmail.com"
                  id="email-contact"
                  className="group p-4 rounded-2xl bg-white/10 hover:bg-yellow-500 text-white hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
                  aria-label="Send email"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923096444416?text=Hi%20Talha%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you."
                  target="_blank"
                  rel="noreferrer"
                  id="whatsapp-contact"
                  className="group p-4 rounded-2xl bg-white/10 hover:bg-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                  aria-label="Contact via WhatsApp"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={32} height={32} className="w-8 h-8" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/talhawgj"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/50"
                  aria-label="GitHub profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/talhawgj/"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-white/10 hover:bg-blue-600 text-white hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="LinkedIn profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>

              <div className="pt-8 border-t border-white/8 text-center text-slate-600 text-sm">
                © {new Date().getFullYear()} Talha Waheed · GJ
              </div>
            </div>
          </footer>
        </ScrollReveal>

      </main>
    </>
  );
}