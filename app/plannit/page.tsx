"use server";

import Design from "./design/design";
import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Research from "./research/section";
import Overview from "./overview/section";
import Introduction from "./introduction";
import { inter } from "../fonts";
import Prototype from "./overview/prototype";

export default async function Plannit() {
  return (
    <div className="w-screen flex-col bg-floral-white dark:bg-stone-800">
      <Hero />
      <Introduction />
      <Prototype />
      <Overview />
      <Research />
      <Design />
      <FinalDesign />
    </div>
  );
}
