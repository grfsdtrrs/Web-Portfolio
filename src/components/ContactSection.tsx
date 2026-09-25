import { useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  expanded?: boolean;
}

export function ContactSection({ expanded = false }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "grefaldo.sophianicole@gmail.com";
  const githubUrl = "https://github.com/grfsdtrrs";
  const linkedinUrl = "https://www.linkedin.com/in/grefaldosophianicole/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
            GET IN TOUCH
          </h2>
        </div>

        <div className="max-w-3xl mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            Let's build something intelligent and useful together.
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            I am currently open to full-time roles, software engineering internships, and collaborative machine learning projects. Connect with me directly through any of the channels below.
          </p>
        </div>

        {/* Retained 3 Channels: LinkedIn, GitHub, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 1. EMAIL CARD */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-cyan-500/50 hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                Email Address
              </h4>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 break-all select-all">
                {emailAddress}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 py-2.5 px-3 rounded-xl text-center text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Write Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="py-2.5 px-3 rounded-xl text-xs font-mono border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-400/40 transition-all cursor-pointer flex items-center gap-1"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="hidden sm:inline text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. LINKEDIN CARD */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-blue-500/50 hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                Professional Network
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                LinkedIn Profile
              </h4>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 break-all">
                linkedin.com/in/grefaldosophianicole
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.25)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3. GITHUB CARD */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-slate-400 dark:hover:border-cyan-500/40 hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-5 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Open Source & Code
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                GitHub Repositories
              </h4>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 break-all">
                github.com/grfsdtrrs
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
