import { OjtSection } from "@/components/Ojt";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "OJT | Your Name",
  description:
    "On-the-job training experience at Denso Ten Solutions Philippines Corporation, focused on building ATLAS, an AI-assisted document intelligence web application.",
};

export default function OjtPage() {
  return (
    <>
      <Header />
      <main className="ojt-page">
        <OjtSection expanded />
      </main>
      <Footer />
    </>
  );
}