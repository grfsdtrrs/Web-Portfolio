import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";

export const metadata = {
  title: "Skills | BSCS Student Portfolio"
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <SkillsSection expanded />
      </main>
      <Footer />
    </>
  );
}
