import ProjectDetails from "./project-details";
import Introduction from "./introduction";

export default function Summary() {
  return (
    <section id="summary" className="flex w-screen flex-col items-center px-8">
      <div className="flex w-full flex-col items-center">
        <Introduction />
      </div>
    </section>
  );
}
