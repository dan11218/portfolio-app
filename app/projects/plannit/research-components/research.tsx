import { kalam } from "@/app/fonts";
import BlockQuotes from "./blockQuotes";
import Solution from "./solution";

export default function Research() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <h1 className="mb-20">Research</h1>
        <BlockQuotes />
        <Solution />
      </div>
    </section>
  );
}
