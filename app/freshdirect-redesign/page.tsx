import Hero from "./hero";
import Overview from "./overview/section";

export default function Page() {
  return (
    <div className="w-screen flex-col">
      <Hero />
      <Overview />
    </div>
  );
}
