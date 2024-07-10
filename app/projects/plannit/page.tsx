"use server";

import DesignSystem from "./design-system/designSystem";
import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Overview from "./overview/overview";
import Research from "./research/research";
import Highlights from "./summary/highlights";
import Summary from "./summary/summary";

export default async function Plannit() {
  return (
    <main className="w-screen flex-col">
      <Hero />
      <Highlights />
      <Summary />
      {/* <Overview /> */}
      <Research />
      <DesignSystem />
      <FinalDesign />
    </main>
  );
}
