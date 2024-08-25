import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import { inter } from "@/app/fonts";
import MyRole from "./my-role";

export default function section() {
  return (
    <section id="summary" className="flex w-screen flex-col pb-24">
      <Problem />
      <Solution />
    </section>
  );
}
