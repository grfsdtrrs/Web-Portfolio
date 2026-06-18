import { AboutPreview } from "@/components/AboutPreview";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "About | BSCS Student Portfolio"
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <AboutPreview expanded />
      </main>
      <Footer />
    </>
  );
}
