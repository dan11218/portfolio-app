import { kalam } from "@/app/fonts";
import BlockQuotes from "./blockQuotes";

export default function Research() {
  return (
    <section className="flex h-fit w-screen flex-col items-center pt-14">
      <h1 className="mb-20">Research</h1>
      <div className="mb-16 flex flex-col">
        <h3 className="mb-3">User Interviews</h3>
        <p>
          When users were asked about their experience planning events, here’s
          what they said...
        </p>
      </div>
      <BlockQuotes />
    </section>
  );
}
