import Hero from "./hero";
import ProjectSection from "./project-components/projectSection";

// Home page

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Hero />
      <ProjectSection />
    </main>
  );
}
