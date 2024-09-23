import Introduction from "./introduction";
import Problem from "./problem/problem";
import Prototype from "./prototype";
import Solution from "./solution/solution";

export default function Section() {
  return (
    <section id="summary" className="flex w-full flex-col">
      <div className="flex w-full flex-col items-center">
        <Introduction />
        <Prototype />
        <Problem />
        <Solution />
      </div>
    </section>
  );
}
