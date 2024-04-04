import FinalDesign from "./final-designs/finalDesign";
import Hero from "./hero";
import Overview from "./overview/overview";
import DesignProcess from "./design-process/design-process";

export default function GiftShopDemo() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Hero />
      <Overview />
      <DesignProcess />
      <FinalDesign />
    </main>
  );
}
