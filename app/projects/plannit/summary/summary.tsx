import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import { inter } from "@/app/fonts";

export default function Summary() {
  return (
    <section
      id="summary"
      className="flex h-fit w-screen flex-col items-center bg-slate-100 px-8 py-24 dark:bg-slate-700"
    >
      <div className="flex w-full flex-col items-center">
        <h2
          className={`mb-16 font-semibold ${inter.className}`}
        >{`Summary`}</h2>
        <div className="mb-8 flex w-full max-w-6xl flex-col md:flex-row">
          <Problem />
          <Solution />
          <Requirements />
        </div>
        <ProjectDetails />
      </div>
    </section>
  );
}
