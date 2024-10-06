"use server";

import Design from "./designs/section";
import FinalDesign from "./designs/designs";
import Hero from "./hero";
import Research from "./research/section";
import Overview from "./overview/section";
import Introduction from "./introduction";
import Prototype from "./prototype";
import MyRole from "./my-role";

export default async function Plannit() {
  return (
    <div className="w-screen flex-col bg-ivory dark:bg-stone-800">
      <Hero />
      <Introduction />
      <MyRole />
      <FinalDesign />
      <Overview />
      <Prototype />
      <Research />
      <Design />
    </div>
  );
}
