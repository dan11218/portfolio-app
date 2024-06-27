import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Goals from "./goals";
import MyRole from "./my-role";
import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-8 py-16">
      <ProjectDetails />
      <Problem />
      <Solution />
    </section>
  );
}
