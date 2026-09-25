import { useState } from "react";
import { skills } from "../data/portfolio";
import { Cpu, Code2, Database, Terminal, Palette, Bot, Sparkles } from "lucide-react";

interface SkillsSectionProps {
  expanded?: boolean;
}

export function SkillsSection({ expanded = false }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    if (title.includes("Programming")) return Code2;
    if (title.includes("Web")) return Terminal;
    if (title.includes("Database")) return Database;
    if (title.includes("Software")) return Cpu;
    if (title.includes("Multimedia")) return Palette;
    if (title.includes("AI Tools")) return Bot;
    return Sparkles;
  };

  return (
    <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
                SKILLS & TECH STACK
              </h2>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Core tools and concepts for full-stack and AI development.
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === null
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              All
            </button>
            {skills.map((group) => (
              <button
                key={group.title}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === group.title ? null : group.title
                  )
                }
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === group.title
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                }`}
              >
                {group.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills
            .filter(
              (group) =>
                selectedCategory === null || group.title === selectedCategory
            )
            .map((group) => {
              const IconComp = getCategoryIcon(group.title);
              return (
                <article
                  key={group.title}
                  className="p-5 rounded-xl bg-white dark:bg-[#091120]/80 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-[#0d172c] shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {group.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-[#050b14] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{group.items.length} Technologies</span>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
