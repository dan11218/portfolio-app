import Jumbotron from "./components/jumbotron";
import ProjectSection from "./components/project_section";

// Home page

export default async function Home() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Jumbotron />
      <ProjectSection />
    </main>
  );
}
