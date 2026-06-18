import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Contact | BSCS Student Portfolio"
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <ContactSection expanded />
      </main>
      <Footer />
    </>
  );
}
