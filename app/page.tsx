import AboutMe from "./about-me";
import Hero from "./hero";
import ProjectSection from "./projectSection";

// Home page

export default function Home() {
  return (
    <main className="w-screen flex-col">
      <Hero />
      <ProjectSection />
      <AboutMe />
    </main>
  );
}
