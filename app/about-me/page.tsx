import Image from "next/image";
import Introduction from "./introduction";
import QA from "./q-a";

export default function AboutMe() {
  return (
    <section
      id={`about-me`}
      className="flex w-screen flex-col items-center bg-inherit"
    >
      <div className="flex w-full flex-col items-center px-16 py-16 pt-36">
        <Introduction />
        <QA />
      </div>
    </section>
  );
}
