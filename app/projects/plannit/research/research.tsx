import BlockQuotes from "./blockQuotes";
import { DomainResearch } from "./domain-research";

export default function Research() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-8 pt-14">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <DomainResearch />
        <BlockQuotes />
      </div>
    </section>
  );
}
