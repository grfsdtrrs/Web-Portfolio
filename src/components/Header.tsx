import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { navItems } from "../data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/85 dark:bg-[#070b13]/85 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          aria-label="Portfolio Home"
        >
          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-extrabold text-base tracking-wider shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-md dark:group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:border-cyan-500 transition-all duration-300">
            <img 
              src="src/images/Profile/GRFS.png"
              alt="Logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400/80 tracking-wide font-medium">
              BSCS • Full-Stack Dev
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const sectionKey = item.href.replace("#", "");
            const isActive = activeSection === sectionKey;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(sectionKey)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer rounded-md ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4] rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => handleNavClick("contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-cyan-400/60 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-800 dark:hover:text-cyan-200 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200 cursor-pointer"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070b13]/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-1 shadow-xl">
          {navItems.map((item) => {
            const sectionKey = item.href.replace("#", "");
            const isActive = activeSection === sectionKey;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(sectionKey)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-l-2 border-cyan-500 dark:border-cyan-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full mt-2 py-2.5 text-center text-xs font-semibold rounded-lg bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-400/50 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/25"
            >
              Let's talk →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
