"use client";

import { useRef, useState } from "react";
import { AboutPreview } from "@/components/AboutPreview";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export function PortfolioHome() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null);

  function revealContent() {
    setShowContent(true);
    window.setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <>
      <Header />
      <main>
        <Hero landingOnly={!showContent} onViewMore={revealContent} />

        {showContent ? (
          <div ref={contentRef} className="portfolio-content is-revealed">
            <AboutPreview />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <ContactSection />
          </div>
        ) : null}
      </main>
      {showContent ? <Footer /> : null}
    </>
  );
}
