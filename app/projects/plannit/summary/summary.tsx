import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import { inter } from "@/app/fonts";

export default function Summary() {
  return (
    <section
      id="summary"
      className="flex h-fit w-screen flex-col items-center px-8 py-16"
    >
      <div className="flex w-full flex-col items-center py-16">
        <h2
          className={`mb-16 font-semibold ${inter.className}`}
        >{`Overview`}</h2>
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
