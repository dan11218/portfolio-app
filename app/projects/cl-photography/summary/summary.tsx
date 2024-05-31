import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Requirements from "./requirements";
import MyRole from "./my-role";
import Button from "@/app/components/button";

export default function Summary() {
  return (
    <section className="flex h-fit w-screen flex-col items-center bg-stone-700 px-4 py-16">
      <div className="flex h-fit w-full max-w-7xl flex-col items-center p-16 text-slate-50">
        <div className="mb-8 flex w-full flex-col items-center">
          <h2>{`Summary`}</h2>
          <hr className="m-auto my-1 h-1 w-full max-w-32 rounded bg-red-600" />
        </div>
        <div className="mb-8 flex w-full flex-col items-center justify-between md:flex-row">
          <div className="mb-8 flex w-fit max-w-[700px] grid-cols-2 grid-rows-2 flex-col gap-8 md:mb-0 md:grid">
            <Problem />
            <Requirements />
            <MyRole />
          </div>
          <div className="w-full px-4 md:max-w-96">
            <ProjectDetails />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <Button
            url={"https://www.christianlange.com/"}
            text={"Go to site"}
            showIcon={true}
            bgColor={`transition-colors duration-150 bg-red-500 hover:bg-red-800`}
            textColor={`text-slate-50`}
          />
        </div>
      </div>
    </section>
  );
}
