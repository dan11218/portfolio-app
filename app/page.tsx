import Hero from "./hero";
import ProjectSection from "./projectSection";

// Home page

export default function Page() {
  return (
    <div className="flex-col bg-inherit">
      <Hero />
      <ProjectSection />
    </div>
  );
}
