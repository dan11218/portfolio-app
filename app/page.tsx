import AboutMe from "./about-me/page";
import Hero from "./hero";
import ProjectSection from "./projects/projectSection";

// Home page

export default function Page() {
  return (
    <div className="flex-col bg-inherit">
      <Hero />
      <ProjectSection />
    </div>
  );
}
