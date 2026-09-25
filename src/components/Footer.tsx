import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#050912] py-8 text-xs font-mono text-slate-500 dark:text-slate-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright matching Reference Image */}
        <div className="text-center sm:text-left">
          <p className="text-slate-700 dark:text-slate-300 font-medium">
            Copyright 2026 Sophia Nicole Grefaldo | all rights reserved
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
            Designed & Developed with Cyber High-Tech Architecture • BSCS
          </p>
        </div>

        {/* Social / Direct Links & Back-to-top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/grfsdtrrs"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/grefaldosophianicole/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:grefaldo.sophianicole@gmail.com"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[10px] hidden sm:inline font-semibold">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
