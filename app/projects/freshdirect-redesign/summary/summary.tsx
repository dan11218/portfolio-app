import Problem from "./problem";
import ProjectDetails from "./project-details";
import Solution from "./solution";
import Requirements from "./requirements";
import PreviousDesigns from "./previous-designs";
import Highlights from "./highlights";

export default function Summary() {
  return (
    <section
      id="summary"
      className="flex h-fit w-screen flex-col items-center px-8 py-24"
    >
      <div className="mb-8 flex w-full flex-col items-center">
        <div className="mb-16 flex flex-col items-center">
          <h2
            className="mb-4
           font-medium"
          >{`Overview`}</h2>
          <hr className={`w-32 border border-stone-400`} />
        </div>
        <Problem />
        <PreviousDesigns />
        <Solution />
        <Highlights />
        <ProjectDetails />
      </div>
    </section>
  );
}
