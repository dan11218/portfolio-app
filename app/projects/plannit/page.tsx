import FinalDesign from "./finalDesign";
import Hero from "./hero";
import Overview from "./overview-components/overview";
import Research from "./research-components/research";

export default function Plannit() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Hero />
      <Overview />
      <Research />
      <FinalDesign />
    </main>
  );
}
