import Problem from "./problem";
import ProjectDetails from "./projectDetails";
import Solution from "./solution";
import Goals from "./goals";
import MyRole from "./my-role";
import CustomLink from "@/app/components/customLink";

export default function Summary() {
  return (
    <section className="mb-16 flex h-fit w-screen flex-col items-center">
      <div className="flex h-fit w-full max-w-6xl flex-col rounded-3xl bg-white px-16 py-8">
        <div className="mb-8 w-fit">
          <h2>{`Summary`}</h2>
          <hr className="my-1 h-1 w-full rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        </div>
        <div className="mb-8 flex flex-col justify-between md:flex-row">
          <div className="flex w-full max-w-2xl grid-cols-2 grid-rows-2 flex-col gap-8 md:grid">
            <Problem />
            <Solution />
            <Goals />
            <MyRole />
          </div>
          <div>
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
          />
        </div>
      </div>
    </section>
  );
}
