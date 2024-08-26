import Interviews from "./interviews";
import { CompetitiveAnalysis } from "./competitive-analysis/competitive-analysis";
import Personas from "./personas/personas";
import { inter } from "@/app/fonts";
import AffinityMap from "./affinity-map/affinity-map";

export default function Section() {
  return (
    <section className="flex h-fit w-screen flex-col">
      <div className="mb-16 flex w-fit flex-col justify-center bg-rose-700 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Research`}</h2>
      </div>
      <div className="flex w-full flex-col items-center">
        <CompetitiveAnalysis />
        <hr className="my-24 w-full max-w-3xl" />
        <Interviews />
        <hr className="my-24 w-full max-w-3xl" />
        {/* <AffinityMap />
        <hr className="my-24 w-full max-w-3xl" /> */}
        <Personas />
      </div>
    </section>
  );
}
