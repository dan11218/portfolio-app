import { space_mono, kalam } from "@/app/fonts";
import ProjectDetails from "./projectDetails";
import Problem from "./problem";
import CustomLink from "@/app/components/customLink";
import Paragraph from "@/app/components/paragraph";
import Solution from "./solution";

export default function Overview() {
  const overviewCopy = `Plannit is a mobile platform that aims to connect Event Planners with
          clients, venues, and vendors—all in one place! Set reminders, and get
          notified on To-Do items for upcoming events. 🎉`;

  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <div>
          <h1>Overview</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        </div>
        <Problem />
        <Solution />
        <ProjectDetails />
        <CustomLink
          url={
            "https://www.figma.com/proto/V1LLfmALneuerhGoq7hATw/Plannit-App?page-id=0%3A1&type=design&node-id=702-427&viewport=35%2C-512%2C0.71&t=AEP1ckLGHKcaCH2v-1&scaling=scale-down&starting-point-node-id=702%3A427"
          }
          text={"Open prototype"}
          showIcon={true}
        />
      </div>
    </section>
  );
}
