import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import PreviousDesigns from "./highlights";

export default function Summary() {
  return (
    <section
      id="summary"
      className="flex h-fit w-screen flex-col items-center bg-slate-100 px-8 py-24 dark:bg-slate-700"
    >
      <div className="mb-8 flex w-full max-w-6xl flex-col items-center">
        <ProjectDetails />
        <Problem />
        <PreviousDesigns />
        <Solution />
        <Requirements />
      </div>
    </section>
  );
}
