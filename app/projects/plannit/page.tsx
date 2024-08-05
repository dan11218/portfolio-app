"use server";

import Design from "./design/design";
import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Research from "./research/research";
import Highlights from "./summary/highlights";
import Summary from "./summary/summary";
import Introduction from "./summary/introduction";

export default async function Plannit() {
  return (
    <main className="w-screen flex-col">
      <Hero />
      <Introduction />
      <Summary />
      <Highlights />
      <Research />
      <Design />
      <FinalDesign />
    </main>
  );
}
