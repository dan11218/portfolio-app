import Hero from "./hero";
import ProjectSection from "./project-components/projectSection";

// Home page

export default function Home() {
  return (
    <main className="w-screen flex-col">
      <Hero />
      <ProjectSection />
    </main>
  );
}
