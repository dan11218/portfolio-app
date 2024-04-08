import { space_mono, kalam } from "@/app/fonts";
import ProjectDetails from "./projectDetails";
import Problem from "./problem";
import CustomLink from "@/app/app-components/customLink";
import Paragraph from "@/app/app-components/paragraph";
import MyRole from "./my-role";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="flex h-fit w-screen flex-col items-center">
      <div className="mb-16 flex w-full max-w-5xl flex-col items-center px-10">
        <div className={"mb-16 flex flex-col"}>
          <h1>Overview</h1>
          <hr className="m-auto my-1 h-1 w-[150px] rounded bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300" />
        </div>
        <div className="mb-16 flex w-full flex-col items-center justify-between md:flex-row md:items-start">
          <p className={"mb-8 w-full md:max-w-sm"}>
            {`Usabilla (acquired by `}
            <i>SurveyMonkey</i>
            {` and re-branded to `}
            <i>GetFeedback</i>
            {`) is
            a suite of feedback collection tools that allow you to collect and analyze user feedback improve features and solve pain-points in your app. Passive surveys can be initiated by the
            user via the Feedback Button, or you can actively show users
            targeted micro-surveys which are triggered based on certain events.
            The purpose of this project was design and develop an online Gift
            Shop where we can launch mock surveys to demo the capabilities of
            Usabilla.`}
            <br />
            <br />
            {`Using Sketch to design the screens, and React JS to develop
            the site, we created a working gift shop experience, where live
            surveys are launched during the checkout flow.`}
          </p>
          <Image
            src="/gift-shop-demo/payment-campaign.png"
            width={500}
            height={500}
            alt="screenshot of survey modal"
            className={"px-5"}
          />
        </div>
        <div className="mb-16 flex w-full flex-col items-center justify-between md:flex-row md:items-start">
          <div className={"mb-8 flex flex-col"}>
            {/* <Problem /> */}
            <MyRole />
          </div>
          <ProjectDetails />
        </div>
        <CustomLink
          url={"https://demo-usabilla.netlify.app"}
          text={"Open prototype"}
          showIcon={true}
        />
      </div>
    </section>
  );
}
