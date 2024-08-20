import Interviews from "./interviews";
import { CompetitiveAnalysis } from "./competitive-analysis";
import Personas from "./personas";
import { inter } from "@/app/fonts";

export default function Discovery() {
  return (
    <section className="flex h-fit w-screen flex-col">
      <div className="mb-16 flex w-fit flex-col justify-center bg-rose-400 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Research`}</h2>
      </div>
      <div className="flex w-full flex-col px-16">
        <CompetitiveAnalysis />
        <Interviews />
        {/* <Personas /> */}
      </div>
    </section>
  );
}
