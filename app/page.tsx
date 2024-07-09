import AboutMe from "./about-me";
import Hero from "./hero";
import ProjectSection from "./projects/projectSection";

// Home page

export default function Page() {
  return (
    <main className="flex-col bg-inherit">
      <Hero />
      <ProjectSection />
      <AboutMe />
    </main>
  );
}
