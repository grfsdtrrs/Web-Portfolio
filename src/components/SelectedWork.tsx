import { projects } from "../data/portfolio";
import { ArrowRight, ExternalLink, Play, Sparkles, Terminal, Activity, Database, Cpu } from "lucide-react";
import { Project } from "../types";

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export function SelectedWork({ onSelectProject, onViewAllProjects }: SelectedWorkProps) {
  const mkipProject = projects.find((p) => p.slug === "mkip") || projects[0];
  const atlasProject = projects.find((p) => p.slug === "atlas") || projects[1];
  const dianaProject = projects.find((p) => p.slug === "diana") || projects[2];

  const selectedProjects = [
    {
      project: mkipProject,
      badge: "FEATURED PROJECT",
      tagline: "Manufacturing Knowledge Hub",
      urlPath: "mkip.internal/knowledge-hub",
      engine: "Ollama + pgvector Active",
      icon: Database
    },
    {
      project: atlasProject,
      badge: "OJT PRACTICUM",
      tagline: "AI Training & Work Instruction Assistant",
      urlPath: "atlas.internal/ai-rag-stream",
      engine: "Groq + ChromaDB Active",
      icon: Cpu
    },
    {
      project: dianaProject,
      badge: "THESIS & ML",
      tagline: "Type 2 Diabetes Risk Prediction",
      urlPath: "diana-v2.vercel.app/cluster-model",
      engine: "Cluster K=4 Model Validated",
      icon: Activity
    }
  ];

  return (
    <section id="work" className="py-14 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Reference Image: — SELECTED WORK */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
              SELECTED PROJECTS
            </h2>
          </div>

          <button
            onClick={onViewAllProjects}
            className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors cursor-pointer group"
          >
            <span>View all projects ({projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Desktop Application Cards Grid (No Mobile Phones) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjects.map(({ project, badge, tagline, urlPath, engine, icon: IconComponent }) => (
            <article
              key={project.slug}
              className="rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div>
                {/* Header Tag and Type */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-700 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-500/30">
                    {badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.type}
                  </span>
                </div>

                {/* Desktop Web Browser Window Frame (Desktop UI, Not Mobile) */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-4">
                  {/* Window Title Bar */}
                  <div className="bg-slate-100 dark:bg-[#060c16] px-3.5 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    <div className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 text-[10px] truncate max-w-[170px] sm:max-w-[210px] text-center">
                      https://{urlPath}
                    </div>

                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" title="Live System" />
                  </div>

                  {/* Desktop Image Banner */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer bg-slate-950"
                    title={`View ${project.title} details`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} desktop preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Engine Status Overlay Badge */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-cyan-300 bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-cyan-500/30">
                      <span className="flex items-center gap-1.5 font-medium truncate">
                        <IconComponent className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{engine}</span>
                      </span>
                      <span className="text-emerald-400 text-[9px] shrink-0">ONLINE</span>
                    </div>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3
                  onClick={() => onSelectProject(project)}
                  className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug cursor-pointer mb-1"
                >
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-2 font-medium">
                  {tagline}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#0d1a2d] border border-slate-200 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-300"
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

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                >
                  <span>View project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-mono transition-colors"
                      title="Watch video demonstration"
                    >
                      <Play className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  )}

                  {project.repoUrl && project.repoUrl !== "#" && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-mono transition-colors"
                      title="Visit live deployment / repository"
                    >
                      <ExternalLink className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
