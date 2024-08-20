import DesignRequirements from "./design-requirements";
import TechnicalRequirements from "./technical-requirements copy";
import Handoff from "./handoff";
import Image from "next/image";
import Link from "next/link";

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
        <Link
          href={`https://github.com/dan11218/gatsby-e-commerce-demo`}
          className={`w-fit border-2 border-current bg-slate-50 p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
        >
          {`See the code`}
        </Link>
      </div>
    </section>
  );
}
