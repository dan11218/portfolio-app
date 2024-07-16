import BlockQuotes from "./blockQuotes";
import { DomainResearch } from "./domain-research";
import { inter } from "@/app/fonts";

export default function Discovery() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-8 py-24">
      <h2 className={`${inter.className} mb-16 font-semibold`}>
        {"Discovery and Research"}
      </h2>
      <div className="flex w-full max-w-6xl flex-col">
        <DomainResearch />
        <BlockQuotes />
      </div>
    </section>
  );
}
