import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import Highlights from "./highlights";
import { inter } from "@/app/fonts";

export default function Summary() {
  return (
    <section
      id="summary"
      className="flex h-fit w-screen flex-col items-center py-16"
    >
      <Highlights />
      <ProjectDetails />
      <div className="flex w-full flex-col items-center bg-sky-50 py-16">
        <h2 className={`font-bold ${inter.className}`}>{`Overview`}</h2>
        <div className="flex w-full max-w-6xl md:flex-row">
          <Problem />
          <Solution />
          <Requirements />
        </div>
      </div>
    </section>
  );
}
