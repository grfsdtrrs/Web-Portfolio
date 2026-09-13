import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DemoPage } from "@/components/DemoPage";

export const metadata = {
  title: "Project Demo | BSCS Student Portfolio"
};

export default async function ProjectDemoRoute({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const slug = resolvedSearchParams?.slug;

  return (
    <>
      <Header />
      <main className="page-shell">
        <DemoPage slug={slug} />
      </main>
      <Footer />
    </>
  );
}