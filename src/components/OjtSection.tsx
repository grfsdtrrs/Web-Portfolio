import { useState } from "react";
import { ojt } from "../data/portfolio";
import {
  Building2,
  Clock,
  MapPin,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Award,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  ArrowRight
} from "lucide-react";

interface OjtSectionProps {
  expanded?: boolean;
}

export function OjtSection({ expanded = false }: OjtSectionProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "atlas" | "mkip" | "challenges" | "reflection">(
    "overview"
  );
  const [isFullDetailsOpen, setIsFullDetailsOpen] = useState(expanded);

  return (
    <section id="ojt" className="py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
            ON-THE-JOB TRAINING PRACTICUM
          </h2>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-8">
          Enterprise Systems & AI Engineering at Denso Ten Solutions
        </h3>

        {/* Hero Card: OJT Overview Banner */}
        <div className="rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 mb-8 shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300">
                  {ojt.role}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {ojt.period}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {ojt.company}
              </h4>
              <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400/80 mt-1 font-medium">
                {ojt.department}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#050b14] border border-slate-200 dark:border-slate-800">
                <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Duration</span>
                </div>
                <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">{ojt.hours}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#050b14] border border-slate-200 dark:border-slate-800">
                <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Deployment</span>
                </div>
                <div className="font-bold text-slate-800 dark:text-slate-200 text-sm truncate">
                  Santa Rosa, Laguna
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#050b14] border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
                <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Core Focus</span>
                </div>
                <div className="font-bold text-cyan-700 dark:text-cyan-300 text-sm">
                  RAG & Knowledge AI
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-6">
            {ojt.overview}
          </p>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => setIsFullDetailsOpen(!isFullDetailsOpen)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>{isFullDetailsOpen ? "Collapse Full Practicum Dossier" : "Explore Full Practicum Dossier (ATLAS, MKIP, Challenges)"}</span>
              {isFullDetailsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Tabs & Dossier */}
        {isFullDetailsOpen && (
          <div className="space-y-8 animate-fadeIn">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                    : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm"
                }`}
              >
                Key Responsibilities & Background
              </button>
              <button
                onClick={() => setActiveTab("atlas")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === "atlas"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                    : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm"
                }`}
              >
                Project: ATLAS AI
              </button>
              <button
                onClick={() => setActiveTab("mkip")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === "mkip"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                    : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm"
                }`}
              >
                Project: MKIP Platform
              </button>
              <button
                onClick={() => setActiveTab("challenges")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === "challenges"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                    : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm"
                }`}
              >
                Challenges & Solutions
              </button>
              <button
                onClick={() => setActiveTab("reflection")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === "reflection"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                    : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm"
                }`}
              >
                Learnings & Accomplishments
              </button>
            </div>

            {/* TAB 1: OVERVIEW & RESPONSIBILITIES */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Company Background</span>
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ojt.companyBackground}
                  </p>
                </div>

                <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Practicum Responsibilities</span>
                  </h4>
                  <ul className="space-y-3">
                    {ojt.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 2: ATLAS PROJECT DEEP DIVE */}
            {activeTab === "atlas" && (
              <div className="space-y-6">
                {(() => {
                  const atlas = ojt.projects.find((p) => p.key === "atlas")!;
                  return (
                    <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                      <div>
                        <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-500/30">
                          AI-Assisted System
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">{atlas.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">{atlas.description}</p>
                      </div>

                      {/* Objectives */}
                      <div>
                        <h5 className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 font-semibold">
                          Project Objectives
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {atlas.objectives.map((obj, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#050c18] border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Modules */}
                      <div>
                        <h5 className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 font-semibold">
                          Architected Modules ({atlas.modules.length})
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                          {atlas.modules.map((m, idx) => {
                            const [name, desc] = m.split(" – ");
                            return (
                              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#050c18] border border-slate-200 dark:border-slate-800">
                                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block mb-1">{name}</span>
                                <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight block">{desc}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div>
                        <h5 className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                          Technology Stack
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {atlas.techStack.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#0d1a2d] border border-slate-200 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* TAB 3: MKIP PROJECT DEEP DIVE */}
            {activeTab === "mkip" && (
              <div className="space-y-6">
                {(() => {
                  const mkip = ojt.projects.find((p) => p.key === "mkip")!;
                  return (
                    <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                      <div>
                        <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-500/30">
                          Phase 1 & Phase 2 Full-Stack Platform
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">{mkip.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">{mkip.description}</p>
                      </div>

                      {/* Contributions */}
                      {mkip.contributions && (
                        <div>
                          <h5 className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 font-semibold">
                            Key Full-Stack Contributions
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {mkip.contributions.map((c, idx) => (
                              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#050c18] border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-1.5 shrink-0" />
                                <span>{c}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Modules */}
                      <div>
                        <h5 className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 font-semibold">
                          Platform Modules ({mkip.modules.length})
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                          {mkip.modules.map((m, idx) => {
                            const [name, desc] = m.split(" – ");
                            return (
                              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#050c18] border border-slate-200 dark:border-slate-800">
                                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block mb-1">{name}</span>
                                <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight block">{desc}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div>
                        <h5 className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                          Technology Stack
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {mkip.techStack.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#0d1a2d] border border-slate-200 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* TAB 4: CHALLENGES & ENGINEERING SOLUTIONS */}
            {activeTab === "challenges" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ojt.challenges.map((c, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-mono font-medium">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Challenge 0{idx + 1}</span>
                    </div>
                    <h5 className="text-base font-bold text-slate-900 dark:text-slate-100">{c.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-800/80">
                      <strong className="text-cyan-600 dark:text-cyan-400 font-mono">Solution: </strong>
                      {c.solution}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 5: REFLECTION & ACCOMPLISHMENTS */}
            {activeTab === "reflection" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Practicum Accomplishments</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {ojt.accomplishments.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                    <h5 className="text-sm font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-2 font-mono">
                      <Lightbulb className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Key Learnings</span>
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ojt.learnings}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                    <h5 className="text-sm font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-2 font-mono">
                      <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Professional Realization</span>
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ojt.realization}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#050c18] border border-cyan-300 dark:border-cyan-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed shadow-sm">
                  <strong className="text-cyan-700 dark:text-cyan-400 font-mono block mb-1 font-bold">Conclusion:</strong>
                  {ojt.conclusion}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
