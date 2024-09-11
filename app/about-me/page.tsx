import Introduction from "./introduction";
import QA from "./q-a";
import MyJourney from "./my-journey";

export default function AboutMe() {
  return (
    <section id={`about-me`} className="flex w-screen flex-col">
      <div className="flex w-full flex-col items-center px-16 pt-36">
        <Introduction />
        <MyJourney />
        <QA />
      </div>
    </section>
  );
}
