import Hero from "./hero";
import Highlights from "./highlights";
import OurApproach from "./our-approach";
import PreviousDesigns from "./previous-designs";
import Problem from "./problem";
import Solution from "./solution";
import Summary from "./summary/summary";

export default function Page() {
  return (
    <div className="w-screen flex-col">
      <Hero />
      <Summary />
      <Problem />
      <PreviousDesigns />
      <Solution />
      {/* <OurApproach /> */}
      <Highlights />
    </div>
  );
}
