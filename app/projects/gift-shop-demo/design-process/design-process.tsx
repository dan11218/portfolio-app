import DesignRequirements from "./design-requirements";
import TechnicalRequirements from "./technical-requirements copy";
import Handoff from "./handoff";
import Image from "next/image";
import Button from "@/app/components/button";

export default function DesignProcess() {
  return (
    <section className="mb-24 flex h-fit w-screen flex-col items-center px-10">
      <div className="flex w-full max-w-6xl flex-col items-center">
        <div className="items-center">
          <h1>Design Process</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-full max-w-32 rounded bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300" />
        </div>
        <div className="mb-16 flex max-w-4xl flex-col justify-between md:flex-row">
          <DesignRequirements />
          <TechnicalRequirements />
        </div>
        <div className="mb-16 flex flex-col-reverse items-center justify-center lg:flex-row">
          <Image
            src="/static/gift-shop-demo/code_sample.png"
            width={600}
            height={600}
            className="rounded-lg"
            alt="screenshot of code editor"
          />
          <Handoff />
        </div>
        <Button
          url={"https://github.com/dan11218/gatsby-e-commerce-demo"}
          text={"See the code"}
          showIcon={true}
        />
      </div>
    </section>
  );
}
