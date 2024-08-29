import Hero from "./hero";
import Overview from "./overview/section";

export default function Page() {
  return (
    <div className="w-screen flex-col bg-[#FCFDFC] dark:bg-stone-800">
      <Hero />
      <Overview />
    </div>
  );
}
