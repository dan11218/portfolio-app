import Problem from "./problem";
import Solution from "./solution";

export default function section() {
  return (
    <section id="overview" className="flex w-screen flex-col pb-24">
      <Problem />
      <Solution />
    </section>
  );
}
