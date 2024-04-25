import { kalam } from "@/app/fonts";
import BlockQuotes from "./blockQuotes";
import Solution from "../overview/solution";
import Background from "./background";

export default function Research() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <h1>Research</h1>
        <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        <Background />
        <BlockQuotes />
      </div>
    </section>
  );
}
