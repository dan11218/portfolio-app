import Hero from "./hero";
import Overview from "./overview";

export default function Plannit() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <Hero />
      <Overview />
    </main>
  );
}
