import BlockQuotes from "./blockQuotes";
import Background from "./background";
import { DomainResearch } from "./domain-research";

export default function Research() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <h1>Research</h1>
        <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        <Background />
        <BlockQuotes />
        {/* <DomainResearch /> */}
      </div>
    </section>
  );
}
