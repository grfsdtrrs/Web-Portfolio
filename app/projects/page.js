import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";

export const metadata = {
  title: "Projects | BSCS Student Portfolio"
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <ProjectsSection expanded />
      </main>
      <Footer />
    </>
  );
}
