import Designs from "./designs/designs";
import Introduction from "./introduction";
import MyRole from "./my-role";
import Problem from "./problem";
import Solution from "./solution";

export default function section() {
  return (
    <section id="overview" className="flex w-screen flex-col">
      <Introduction />
      <MyRole />
      <Designs />
      <Problem />
      <Solution />
    </section>
  );
}
