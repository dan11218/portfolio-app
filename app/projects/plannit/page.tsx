import DesignSystem from "./design-system/designSystem";
import FinalDesign from "./final-designs-components/finalDesign";
import Hero from "./hero";
import Overview from "./overview-components/overview";
import Research from "./research-components/research";

export default function Plannit() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Hero />
      <Overview />
      <Research />
      {/* <DesignSystem /> */}
      <FinalDesign />
    </main>
  );
}
