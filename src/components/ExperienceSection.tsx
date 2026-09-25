import { experience } from "../data/portfolio";
import { Briefcase, Calendar, CheckCircle2, Milestone } from "lucide-react";

interface ExperienceSectionProps {
  expanded?: boolean;
}

export function ExperienceSection({ expanded = false }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
            EXPERIENCE & CAREER MILESTONES
          </h2>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-10">
          Education, training, and practical learning milestones.
        </h3>

        {/* Cyber Glowing Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-blue-400/40 before:to-slate-300 dark:before:to-slate-800">
          {experience.map((item, index) => (
            <article
              key={item.title + index}
              className="relative group"
            >
              {/* Timeline Glowing Dot */}
              <div className="absolute -left-6 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#070b13] border-2 border-cyan-500 dark:border-cyan-400 shadow-[0_0_10px_#06b6d4] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-200" />
              </div>

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#091120]/80 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-[#0c1628] shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-200 dark:border-cyan-500/30 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Milestone 0{index + 1}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
