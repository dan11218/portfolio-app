import CustomLink from "@/app/components/customLink";
import { Summary } from "../summary/summary";
import Background from "../research/background";

export default function Overview() {
  return (
    <section className="my-16 flex h-fit w-screen flex-col items-center">
      <Summary />
      <div className="flex w-full max-w-3xl flex-col items-center">
        <div>
          <h1>Overview</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        </div>
        <Background />
      </div>
    </section>
  );
}
