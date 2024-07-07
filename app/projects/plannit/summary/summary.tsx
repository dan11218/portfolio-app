import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import Highlights from "./highlights";

export default function Summary() {
  return (
    <section
      id="summary"
      className="flex h-fit w-screen flex-col items-center py-16"
    >
      <Highlights />
      <ProjectDetails />
      <div className="flex w-full max-w-6xl flex-col md:flex-row">
        <Problem />
        <Solution />
        <Requirements />
      </div>
    </section>
  );
}
