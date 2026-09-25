import { useState, useMemo } from "react";
import { projects } from "../data/portfolio";
import { Project } from "../types";
//import { ExternalLink, Play, Github, Search, Filter, Layers, ArrowUpRight } from "lucide-react";

import { ExternalLink, Play, Search, ArrowUpRight } from "lucide-react";


interface ProjectsSectionProps {
  expanded?: boolean;
  onSelectProject: (project: Project) => void;
  onViewDemo: (project: Project) => void;
}

export function ProjectsSection({
  expanded = false,
  onSelectProject,
  onViewDemo
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "OJT Project", "Thesis & ML", "Web & Mobile", "Game Development"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter matching
      const matchesCategory =
        activeFilter === "All"
          ? true
          : activeFilter === "OJT Project"
          ? project.type.toLowerCase().includes("ojt")
          : activeFilter === "Thesis & ML"
          ? project.type.toLowerCase().includes("thesis") ||
            project.description.toLowerCase().includes("machine learning") ||
            project.stack.some((s) => ["Python", "TensorFlow Lite", "Chroma DB", "Groq API"].includes(s))
          : activeFilter === "Web & Mobile"
          ? project.type.toLowerCase().includes("payroll") ||
            project.type.toLowerCase().includes("personal") ||
            project.type.toLowerCase().includes("software engineering") ||
            project.stack.some((s) => ["React", "Kotlin", "Next.js", "ASP.NET"].includes(s))
          : activeFilter === "Game Development"
          ? project.type.toLowerCase().includes("game")
          : true;

      // Search filter matching
      const matchesSearch =
        searchQuery.trim() === ""
          ? true
          : project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const displayedProjects = expanded ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
                COMPLETE PROJECT CATALOG
              </h2>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Academic, OJT, and Personal Engineering Builds
            </h3>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#08101e] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_12px_rgba(6,182,212,0.35)]"
                  : "bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-[#0c1628] shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Media Banner */}
                <div className="relative h-48 w-full bg-slate-100 dark:bg-[#050b14] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 dark:opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#08101e] via-transparent to-transparent" />
                  
                  {/* Top Type Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-[#070b13]/85 backdrop-blur-md border border-cyan-400/40 dark:border-cyan-500/30 text-[10px] font-mono text-cyan-700 dark:text-cyan-300 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    <span>{project.type}</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                    {project.short}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#050c18] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 group-hover:border-cyan-400/30 group-hover:text-cyan-700 dark:group-hover:text-cyan-300/90 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-5 pt-0 mt-auto border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <button
                      onClick={() => onViewDemo(project)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span>Demo</span>
                    </button>
                  )}

                  {project.repoUrl && project.repoUrl !== "#" && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="View Repository / Link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Link</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 rounded-xl bg-white dark:bg-[#091120] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-sm">
            No projects matched your search criteria. Try clearing the filter.
          </div>
        )}
      </div>
    </section>
  );
}
