import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Overview from "./overview/overview";
import DesignProcess from "./design-process/design-process";
import Summary from "./summary/summary";

export default function GiftShopDemo() {
  return (
    <main className="w-screen flex-col items-start justify-start">
      <Hero />
      <Summary />
      <Overview />
      <DesignProcess />
      <FinalDesign />
    </main>
  );
}
