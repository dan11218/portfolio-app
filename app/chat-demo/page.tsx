import Hero from "./hero";
import Overview from "./overview/section";

export default function Page() {
  return (
    <section id={`top`} className="bg-alice-blue flex w-screen flex-col">
      <Hero />
      <Overview />
    </section>
  );
}
