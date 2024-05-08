"use server";

import DesignSystem from "./design-system/designSystem";
import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Overview from "./overview/overview";
import Research from "./research/research";
import Goals from "./summary/goals";
import MyRole from "./summary/my-role";
import Problem from "./summary/problem";
import ProjectDetails from "./summary/projectDetails";
import Solution from "./summary/solution";
import Summary from "./summary/summary";

export default async function Plannit() {
  return (
    <main className="w-screen flex-col">
      <Hero />
      {/*make props for color, team, timeline, project type, skills */}
      <Summary />
      <Overview />
      <Research />
      <DesignSystem />
      <FinalDesign />
    </main>
  );
}
