import { space_mono, kalam } from "@/app/fonts";
import ProjectDetails from "./projectDetails";
import Problem from "./problem";
import CustomLink from "@/app/app-components/customLink";
import Paragraph from "@/app/app-components/paragraph";
import Solution from "./solution";

export default function Overview() {
  const overviewCopy = `Plannit is a mobile platform that aims to connect Event Planners with
          clients, venues, and vendors—all in one place! Set reminders, and get
          notified on To-Do items for upcoming events. 🎉`;

  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <div className="mb-16 flex w-full max-w-3xl flex-col items-center">
        <Paragraph
          title={"Overview"}
          body={overviewCopy}
          showTitle={true}
          underlined={true}
          headerSize={"text-4xl"}
          textAlign={"text-center"}
        />
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
