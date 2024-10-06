import Designs from "./designs";
import Hero from "./hero";
import Overview from "./overview/section";

export default function Page() {
  return (
    <section
      id={`top`}
      className="flex w-screen flex-col bg-alice-blue dark:bg-slate-800"
    >
      <Hero />
      <Overview />
      <Designs />
    </section>
  );
}
