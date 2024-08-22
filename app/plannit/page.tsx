"use server";

import Design from "./design/design";
import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Research from "./research/section";
import Highlights from "./overview/highlights";
import Overview from "./overview/section";
import Introduction from "./overview/introduction";

export default async function Plannit() {
  return (
    <div className="w-screen flex-col">
      <Hero />
      <Introduction />
      <Overview />
      <Highlights />
      <Research />
      <Design />
      <FinalDesign />
    </div>
  );
}
