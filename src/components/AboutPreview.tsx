import { useState } from "react";
import { profile } from "../data/portfolio";
import { Download, ArrowRight, Award, Code, Sparkles, Briefcase, Check } from "lucide-react";

interface AboutPreviewProps {
  expanded?: boolean;
  onExploreMore?: () => void;
}

export function AboutPreview({ expanded = false, onExploreMore }: AboutPreviewProps) {
  const [downloaded, setDownloaded] = useState(false);
  const highlightIcons = [Award, Code, Sparkles, Briefcase];
  const resumeUrl = new URL("../data/GREALDO_RESUME.pdf", import.meta.url).href;

  const handleDownloadCV = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section id="about" className="py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
              AI Full-Stack Software Engineer & CS Graduate Crafting Scalable, Data-Driven Software that Solves Real-World Problems.
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed text-justify">
              {profile.about}
            </p>

            {expanded && (
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800/80 text-justify">
                My academic and OJT journey has centered on transforming data into meaningful, practical solutions. 
                During my internship at Denso Ten Solutions, I developed AI-Powered Manufacturing Knowledge & Intelligence Platform (MKIP) 
                and Assisted Training, Learning and System (ATLAS) that implements RAG workflows, 
                embedding generation for document search, and vector database indexing with ChromaDB 
                to support knowledge retrieval and automated training. This builds upon my university projects in predictive modeling, 
                such as DIANA (a cluster-based model for Type 2 Diabetes risk using blood biomarkers) 
                and Palayon (a machine learning app for rice disease detection). 
                I enjoy working across the stack with Python, TypeScript, React, FastAPI, Go, and Kotlin. 
                I thrive in collaborative teams that value clean code, iterative feedback, and building software that 
                genuinely helps people.
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide bg-cyan-500 text-slate-950 shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_6px_25px_rgba(6,182,212,0.45)] hover:brightness-110 transition-all cursor-pointer"
                href={resumeUrl}
                download="GREFALDO_RESUME.pdf"
                onClick={handleDownloadCV}
                target="_blank"
                rel="noopener noreferrer"
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>CV Requested!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </>
                )}
              </a>

              {!expanded && onExploreMore && (
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all cursor-pointer"
                  onClick={onExploreMore}
                >
                  <span>More About Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Stats Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profile.highlights.map((item, idx) => {
              const IconComponent = highlightIcons[idx % highlightIcons.length];
              return (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-white dark:bg-[#091120]/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-[#0d182e] transition-all flex flex-col justify-between group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-2xl font-extrabold text-slate-900 dark:text-slate-100 font-mono group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.value}
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block font-medium">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
