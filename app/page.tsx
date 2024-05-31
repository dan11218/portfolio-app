import AboutMe from "./about-me";
import Hero from "./hero";
import ProjectSection from "./projectSection";

// Home page

export default function Page() {
  return (
    <main className="w-screen flex-col bg-inherit">
      <Hero />
      <ProjectSection />
      <AboutMe />
    </main>
  );
}
