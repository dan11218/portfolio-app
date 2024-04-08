import { kalam } from "@/app/fonts";
import Solution from "../overview/my-role";
import DesignRequirements from "./design-requirements";
import TechnicalRequirements from "./technical-requirements copy";

export default function DesignProcess() {
  return (
    <section className="mb-16 flex h-fit w-screen flex-col items-center px-10">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <div>
          <h1>Design Process</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300" />
        </div>
        <div className="flex flex-row justify-between">
          <DesignRequirements />
          <TechnicalRequirements />
        </div>
      </div>
    </section>
  );
}
