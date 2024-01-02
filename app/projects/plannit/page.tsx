import Hero from "./hero";
import CaseStudy from "./caseStudy";

export default function Plannit() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Hero />
      <CaseStudy />
    </main>
  );
}
