import { kalam } from "@/app/fonts";
import Solution from "../overview/my-role";
import DesignRequirements from "./design-requirements";
import TechnicalRequirements from "./technical-requirements copy";
import CodeSample from "./code-sample";
import Image from "next/image";
import CustomLink from "@/app/components/customLink";

export default function DesignProcess() {
  return (
    <section className="mb-16 flex h-fit w-screen flex-col items-center px-10">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <div>
          <h1>Design Process</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300" />
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <DesignRequirements />
          <TechnicalRequirements />
        </div>
        <div className="mb-16 flex flex-col-reverse items-center justify-center md:flex-row">
          <Image
            src="/static/gift-shop-demo/code-sample.png"
            width={500}
            height={500}
            className="rounded-lg"
            alt="screenshot of code editor"
          />
          <CodeSample />
        </div>
        <CustomLink
          url={"https://github.com/dan11218/gatsby-e-commerce-demo"}
          text={"See the code"}
          showIcon={true}
        />
      </div>
    </section>
  );
}
