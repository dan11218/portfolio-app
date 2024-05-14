import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Goals from "./goals";
import MyRole from "./my-role";
import CustomLink from "@/app/components/customLink";

export default function Summary() {
  return (
    <section className="mb-32 flex h-fit w-screen flex-col items-center bg-slate-600 px-4 py-16">
      <div className="flex h-fit w-full max-w-6xl flex-col items-center rounded-md bg-slate-50 p-16 shadow-md dark:text-slate-600">
        <div className="mb-8 flex w-full flex-col items-center">
          <h2>{`Summary`}</h2>
          <hr className="m-auto my-1 h-1 w-full max-w-32 rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        </div>
        <div className="mb-8 flex w-full flex-col items-center justify-between md:flex-row">
          <div className="mb-8 flex w-fit max-w-[700px] grid-cols-2 grid-rows-2 flex-col gap-8 md:mb-0 md:grid">
            <Problem />
            <Solution />
            <Goals />
            <MyRole />
          </div>
          <div className="w-full px-4 md:max-w-96">
            <ProjectDetails />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <CustomLink
            url={
              "https://www.figma.com/proto/V1LLfmALneuerhGoq7hATw/Plannit-App?page-id=0%3A1&type=design&node-id=702-427&viewport=35%2C-512%2C0.71&t=AEP1ckLGHKcaCH2v-1&scaling=scale-down&starting-point-node-id=702%3A427"
            }
            text={"Open prototype"}
            showIcon={true}
            bgColor={`transition-colors duration-150 bg-slate-800 hover:bg-slate-600`}
            textColor={`text-slate-50`}
          />
        </div>
      </div>
    </section>
  );
}
