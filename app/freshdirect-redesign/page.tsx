import Hero from "./hero";
import Overview from "./overview/section";

export default function Page() {
  return (
    <div className="bg-ivory w-screen flex-col dark:bg-stone-800">
      <Hero />
      <Overview />
    </div>
  );
}
