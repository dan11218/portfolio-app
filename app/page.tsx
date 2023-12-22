import Jumbotron from "./jumbotron";
import ProjectSection from "./project_section";

// Home page

export default async function Home() {
  return (
    <main className="w-full flex-col items-start justify-start bg-slate-50">
      <Jumbotron />
      <ProjectSection />
      <p className="bottom-0 h-[30px] w-full bg-slate-300 text-center text-sm">
        Made with Next.js and Tailwind CSS by Danny Graugnard ©2023
      </p>
    </main>
  );
}
