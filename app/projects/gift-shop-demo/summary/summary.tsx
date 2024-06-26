import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Goals from "./goals";
import MyRole from "./my-role";
import Button from "@/app/components/button";

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
          <Button
            url={"https://demo-usabilla.netlify.app"}
            text={"Open prototype"}
            showIcon={true}
            bgColor="bg-slate-800 transition-colors duration-150 hover:bg-slate-600"
            textColor={"text-slate-50 dark:text-white"}
          />
        </div>
      </div>
    </section>
  );
}
