"use server";

import Design from "./design/design";
import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Research from "./research/section";
import Overview from "./overview/section";
import Introduction from "./overview/introduction";

export default async function Plannit() {
  return (
    <div className="bg-floral-white w-screen flex-col dark:bg-stone-800">
      <Hero />
      <Introduction />
      <Overview />
      <Research />
      <Design />
      <FinalDesign />
    </div>
  );
}
