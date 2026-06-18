import { CertificationsSection } from "@/components/CertificationsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Certifications | BSCS Student Portfolio"
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <CertificationsSection expanded />
      </main>
      <Footer />
    </>
  );
}
