import Hero from "./hero";
import Summary from "./summary/summary";

export default function Page() {
  return (
    <main className="w-screen flex-col">
      <Hero />
      <Summary />
    </main>
  );
}
