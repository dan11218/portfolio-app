import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import { inter } from "@/app/fonts";

export default function section() {
  return (
    <section id="summary" className="flex w-screen flex-col pb-24">
      <div className="mb-16 flex w-fit flex-col justify-center bg-rose-400 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Overview`}</h2>
      </div>
      <div className="flex w-full flex-col justify-center px-16 md:flex-row">
        <div className="mb-8 flex w-full max-w-lg flex-col md:mb-0 md:mr-16">
          <Problem />
          <Solution />
          <Requirements />
        </div>
        <ProjectDetails />
      </div>
    </section>
  );
}
