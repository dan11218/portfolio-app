import Image from "next/image";
import Header from "@/app/components/header";

export default function Overview() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-10">
      <div className="mb-24 flex w-full max-w-4xl flex-col items-center">
        <Header
          title={`Overview`}
          largeFont={true}
          color={`from-sky-500 to-cyan-300`}
        />
        <div className="mb-16 flex w-full flex-col items-center justify-between md:flex-row">
          <p className={"mb-8 md:mb-0 md:mr-8"}>
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
            src="/static/gift-shop-demo/screens/post_payment_campaign.png"
            width={500}
            height={500}
            alt="screenshot of survey modal"
          />
        </div>
      </div>
    </section>
  );
}
