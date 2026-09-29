import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";
import { getPlayStoreInstalls } from "@/lib/playstore";

export const revalidate = 86400;

export default async function Home() {
  const playStoreIds = projects
    .map((p) => p.playStoreId)
    .filter((id): id is string => Boolean(id));

  const installCounts: Record<string, string | null> = {};
  await Promise.all(
    playStoreIds.map(async (id) => {
      installCounts[id] = await getPlayStoreInstalls(id);
    })
  );

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects installCounts={installCounts} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
