"use server";

import Design from "./design-process/section";
import FinalDesign from "./overview/designs/designs";
import Hero from "./hero";
import Research from "./research/section";
import Overview from "./overview/section";
import Introduction from "./overview/introduction";
import Prototype from "./overview/prototype";
import MyRole from "./overview/my-role";

export default async function Plannit() {
  return (
    <div className="w-screen flex-col bg-ivory dark:bg-stone-800">
      <Hero />
      <Overview />
      <Prototype />
      <Research />
      <Design />
    </div>
  );
}
