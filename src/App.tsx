import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { AboutPreview } from "./components/AboutPreview";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { OjtSection } from "./components/OjtSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { DemoModal } from "./components/DemoModal";
import { PortfolioChatbot } from "./components/PortfolioChatbot";
import type { Project } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [demoProject, setDemoProject] = useState<Project | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(true);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsRevealed(true);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Intersection observer to track active section while scrolling
  useEffect(() => {
    const sectionIds = ["home", "work", "about", "skills", "projects", "experience", "certifications", "ojt", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id === "work" ? "projects" : id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b13] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-200">
      {/* Top Cyber Navigation Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* HERO SECTION: Exactly matching Reference Image */}
        <Hero
          onExplore={() => handleNavigate("projects")}
          onConnect={() => handleNavigate("contact")}
          onViewMore={() => handleNavigate("about")}
          isRevealed={isRevealed}
        />

        {/* SELECTED WORK SECTION: Exactly matching Reference Image */}
        <SelectedWork
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => handleNavigate("projects")}
        />

        {/* FULL PORTFOLIO SECTIONS (Preserving all user data & features) */}
        <div id="portfolio-content" className="space-y-0">
          <AboutPreview
            expanded
            onExploreMore={() => handleNavigate("about")}
          />

          <SkillsSection expanded />

          <ProjectsSection
            expanded
            onSelectProject={(project) => setSelectedProject(project)}
            onViewDemo={(project) => setDemoProject(project)}
          />

          <ExperienceSection expanded />

          <CertificationsSection expanded />

          <OjtSection expanded />

          <ContactSection expanded />
        </div>
      </main>

      {/* Footer matching reference copyright & cyber links */}
      <Footer />

      {/* Project Detail / Demo Modal */}
      {(selectedProject || demoProject) && (
        <DemoModal
          project={selectedProject || demoProject}
          onClose={() => {
            setSelectedProject(null);
            setDemoProject(null);
          }}
        />
      )}

      {/* Floating Cyber Assistant Chatbot with API model placeholder */}
      
    </div>
  );
}
