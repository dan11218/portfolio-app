import DesignSystem from "./design-system/designSystem";
import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Overview from "./overview/overview";
import Research from "./research/research";
import Researc from "./research/research";

export default function Plannit() {
  return (
    <main className="w-screen flex-col">
      <Hero />
      <Overview />
      <Research />
      <DesignSystem />
      <FinalDesign />
    </main>
  );
}
