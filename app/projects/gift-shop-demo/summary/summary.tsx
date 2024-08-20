import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Goals from "./goals";
import MyRole from "./my-role";
import Link from "next/link";

export default function Summary() {
  return (
    <section className="mb-32 flex h-fit w-screen flex-col items-center bg-slate-600 px-4 py-16">
      <div className="flex h-fit w-full max-w-6xl flex-col items-center rounded-md bg-slate-50 p-16 shadow-md dark:text-slate-600">
        <div className="mb-8 flex w-full flex-col items-center">
          <h2>{`Summary`}</h2>
          <hr className="m-auto my-1 h-1 w-full max-w-32 rounded bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300" />
        </div>
        <div className="mb-8 flex w-full flex-col justify-between md:flex-row">
          <div className="flex w-fit max-w-[700px] grid-cols-2 grid-rows-2 flex-col gap-8 md:grid">
            <Problem />
            <Solution />
            <Goals />
            <MyRole />
          </div>
          <div className="max-w-96 px-4">
            <ProjectDetails />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <Link
            href={`https://demo-usabilla.netlify.app`}
            className={`w-fit border-2 border-current bg-slate-50 p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {`Open prototype`}
          </Link>
        </div>
      </div>
    </section>
  );
}
