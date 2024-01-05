import Jumbotron from "./components/jumbotron";
import ProjectSection from "./components/projectSection";

// Home page

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Jumbotron />
      <ProjectSection />
    </main>
  );
}
