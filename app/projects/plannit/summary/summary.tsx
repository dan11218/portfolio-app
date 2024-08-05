import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import { inter } from "@/app/fonts";

export default function Summary() {
  return (
    <section id="summary" className="flex h-fit w-screen flex-col pb-24">
      <div className="mb-16 flex w-fit flex-col justify-center bg-rose-400 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Summary`}</h2>
      </div>
      <div className="flex w-full flex-col items-center px-8">
        <div className="mb-16 flex w-full max-w-6xl flex-col justify-between md:flex-row">
          <Problem />
          <Solution />
          <Requirements />
        </div>
        <ProjectDetails />
      </div>
    </section>
  );
}
