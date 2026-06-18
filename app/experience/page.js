import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Experience | BSCS Student Portfolio"
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <ExperienceSection expanded />
      </main>
      <Footer />
    </>
  );
}
