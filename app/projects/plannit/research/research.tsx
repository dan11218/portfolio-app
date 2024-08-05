import BlockQuotes from "./blockQuotes";
import { CompetitiveAnalysis } from "./competitive-analysis";
import { inter } from "@/app/fonts";

export default function Discovery() {
  return (
    <section className="flex h-fit w-screen flex-col pb-24">
      <div className="mb-16 flex w-fit flex-col justify-center bg-rose-400 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Research`}</h2>
      </div>
      <div className="flex w-full flex-col items-center px-8">
        <CompetitiveAnalysis />
        <BlockQuotes />
      </div>
    </section>
  );
}
