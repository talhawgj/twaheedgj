import Link from "next/link";
import type { Metadata } from "next";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import { projects } from "./data/projects";

export const metadata: Metadata = {
  title: "Talha Waheed — Full-Stack GIS Developer & Spatial Data Engineer",
  description:
    "Portfolio of Talha Waheed, a Full-Stack GIS Developer and Spatial Data Engineer building scalable web applications with satellite imagery, cloud platforms, and advanced spatial analytics.",
};

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

export default function Home() {
  const featuredProjects = projects.slice(0, 6);
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <main className="min-h-screen bg-[#080c14] text-white">
      <NavBar />


      {/* ─── Hero ────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-24 pb-20 overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-400 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>

          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight mb-6 leading-none">
            <span className="block text-white">Talha</span>
            <span className="block gradient-text">Waheed</span>
          </h1>

          <p className="text-lg sm:text-2xl text-blue-400 font-semibold mb-5 tracking-wide uppercase text-sm">
            Full-Stack GIS Developer & Spatial Data Engineer
          </p>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-12">
            Building scalable applications that bridge the gap between satellite imagery, cloud
            infrastructure, and the real world — from geodetic conversion APIs to interactive
            3D terrain viewers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:opacity-90 transition-all duration-200 shadow-xl shadow-blue-500/20 flex items-center gap-2"
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
      <section className="py-16 px-5 sm:px-8 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: `${projects.length}+`, label: "GitHub Projects" },
            { value: "4+", label: "Years Experience" },
            { value: "5+", label: "GIS Specializations" },
            { value: "100%", label: "Python & TypeScript" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Skills ──────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A full-stack toolkit spanning geospatial technologies, backend systems, cloud
              infrastructure, and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cat: "Geospatial & GIS",
                icon: "🌍",
                color: "border-emerald-500/30 hover:border-emerald-500/60",
                glow: "hover:shadow-emerald-500/10",
                skills: ["PostGIS & PostgreSQL", "Mapbox GL JS / CesiumJS", "Leaflet.js", "ArcGIS Pro & QGIS", "Pyproj & GDAL", "GeoPandas & Shapely", "Turf.js", "OSRM"],
              },
              {
                cat: "Backend & APIs",
                icon: "⚡",
                color: "border-blue-500/30 hover:border-blue-500/60",
                glow: "hover:shadow-blue-500/10",
                skills: ["FastAPI & Uvicorn", "Node.js & Express", "Django & DRF", "REST API Design", "JWT Authentication", "PostgreSQL", "MongoDB", "Docker & Compose"],
              },
              {
                cat: "Frontend",
                icon: "🎨",
                color: "border-violet-500/30 hover:border-violet-500/60",
                glow: "hover:shadow-violet-500/10",
                skills: ["Next.js 16 / React 19", "TypeScript", "Tailwind CSS", "Recharts & D3", "Mapbox GL JS", "Framer Motion", "Material-UI", "Vite"],
              },
              {
                cat: "Data Science & Cloud",
                icon: "🧠",
                color: "border-yellow-500/30 hover:border-yellow-500/60",
                glow: "hover:shadow-yellow-500/10",
                skills: ["Python & Pandas", "Scikit-learn", "BERT & LSTM (NLP)", "Rasterio", "AWS S3 / EC2", "Firebase", "Sentinel Hub API", "Scrapy & Playwright"],
              },
            ].map((category) => (
              <div
                key={category.cat}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Certifications ──────────────────────────────────── */}
      <section id="certifications" className="py-24 px-5 sm:px-8 border-y border-white/5 bg-white/[0.015]">
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
            <div className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1">
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
                    <span key={s} className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">{s}</span>
                  ))}
                </div>
                <a href="https://www.credly.com/badges/e3def220-e11a-46e3-a00d-bc7311532744/public_url" target="_blank" rel="noreferrer" id="badge-applied-ds"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                  Verify on Credly
                </a>
              </div>
            </div>

            {/* Google Data Analytics */}
            <div className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1">
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
            </div>

            {/* Tableau BI Analyst */}
            <a href="https://coursera.org/share/06f89c9b2306cb35c73f71e49941a216" target="_blank" rel="noreferrer" id="cert-tableau"
              className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1">
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

            {/* Machine Learning — Stanford & DeepLearning.AI */}
            <a href="https://coursera.org/share/3c4efb3607992bc92b8ed96ad6315803" target="_blank" rel="noreferrer" id="cert-ml-stanford"
              className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1">
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

            {/* Microsoft Python Development */}
            <a href="https://coursera.org/share/f0d9604ec8029e01b47a7da7e9a43f82" target="_blank" rel="noreferrer" id="cert-ms-python"
              className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1 md:col-span-2">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="p-7 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex items-center gap-3 sm:flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-xl">🐍</div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Microsoft · Specialization</div>
                    <div className="text-sm font-semibold text-slate-300">Coursera</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors sm:mx-4">Microsoft Python Development</h3>
                <div className="flex flex-wrap gap-2 sm:ml-auto">
                  {["Python", "Data Analysis", "Visualisation", "OOP"].map(s => (
                    <span key={s} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>


      {/* ─── Projects ────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-5 sm:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              {projects.length} projects spanning GIS, geospatial APIs, full-stack web, data science, and more.
            </p>
          </div>

          {/* Category filter row */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {["All", ...categories].map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border cursor-default ${
                  cat === "All"
                    ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                    : CATEGORY_COLORS[cat] ?? "bg-white/5 text-slate-400 border-white/10"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured 3-up grid (top 3 projects) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
                <article className="h-full flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1">
                  {/* Card header gradient */}
                  <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl filter drop-shadow-xl">{project.icon}</div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white border-white/20"}`}>
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white/40 text-xs font-medium">{project.year}</div>
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
                        <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-xs text-slate-500 font-medium">
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
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

          {/* Remaining projects - 2 column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.slice(3).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
                <article className="h-full flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1">
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-5xl filter drop-shadow-xl">{project.icon}</div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[project.category] ?? "bg-white/10 text-white border-white/20"}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-xs text-slate-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                      View Details
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

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

      {/* ─── Contact ─────────────────────────────────────────── */}
      <footer id="contact" className="py-28 px-5 sm:px-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Spatial</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Available for freelance projects, full-time roles, and consulting. Whether
            it&apos;s a GIS platform, geospatial API, or data pipeline — let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a
              href="mailto:talhawaheed7807@gmail.com"
              id="email-contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-all shadow-xl shadow-blue-500/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              talhawaheed7807@gmail.com
            </a>
            <a
              href="https://github.com/talhawgj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              github.com/talhawgj
            </a>
          </div>

          <div className="flex justify-center items-center gap-3 text-slate-500 mb-8">
            <span>📞 +92 309 6444416</span>
          </div>

          <div className="pt-8 border-t border-white/8 text-slate-600 text-sm">
            © {new Date().getFullYear()} Talha Waheed · Built with Next.js & Tailwind CSS
          </div>
        </div>
      </footer>
    </main>
  );
}