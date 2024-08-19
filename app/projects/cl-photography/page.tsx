import Summary from "./summary/summary";
import Hero from "./hero";
import Overview from "./overview";

export default function Page() {
  return (
    <div className="w-screen flex-col">
      <Hero />
      <Summary />
      {/* <Overview /> */}
    </div>
  );
}
