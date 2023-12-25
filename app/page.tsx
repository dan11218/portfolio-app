import Jumbotron from "./jumbotron";
import ProjectSection from "./project_section";

// Home page

export default async function Home() {
  return (
    <main className="w-full flex-col items-start justify-start bg-slate-50">
      <Jumbotron />
      <ProjectSection />
    </main>
  );
}
