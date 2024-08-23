import PersonaA from "./persona-a";
import PersonaB from "./persona-b";

export default function Personas() {
  return (
    <section className={`flex w-full flex-col items-center`}>
      <div className="mb-8 flex w-full flex-col items-center px-8">
        <div className="mb-8 flex w-full max-w-2xl flex-col">
          <h3 className="mb-4 font-semibold text-rose-500">{`Personas`}</h3>
          <p>
            {`User personas were created to better understand the different types of users who would benefit from Plannit. There are two main stakeholders in this case: 1) the Event Planner, 2) the event space coordinator, and 3) the Vendor. These personas represent the key characteristics, needs, and pain points of our target audience, allowing us to design features that cater to their specific requirements:`}
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-5xl flex-col items-center">
        <PersonaA />
        <PersonaB />
      </div>
    </section>
  );
}
