export default function MyRole() {
  return (
    <section
      id="my-role"
      className="flex flex-col items-center justify-center px-8 py-16"
    >
      <div className="flex max-w-4xl flex-col md:flex-row">
        <div className="mb-8 mr-0 flex flex-col lg:mb-0 lg:mr-16">
          <h4 className="mb-3 font-bold text-rose-500">{`My role`}</h4>
          <p>
            {`As the Lead UX Designer and Researcher, I conducted user interviews, synthesis sessions, and brainstorming sessions to refine ideas.`}
            <br />
            <br />
            {`I took charge of all the research and design activities, creating wireframes, high-fidelity designs, and interactive prototypes to gather user feedback and test ideas.`}
          </p>
        </div>
        <div className="flex h-fit w-full flex-col items-center border border-slate-700 bg-white p-8 shadow-[18px_18px_0px_0px_rgba(0,0,0)] dark:bg-slate-700">
          <ul className="flex w-full flex-col md:flex-col">
            <li className="m-2 w-full">
              <h6 className="mb-1 font-bold">{`Team 👨‍💻`}</h6>
              <p>{`Danny Graugnard, Alison Chu (Developer), Amber Medina (Developer)`}</p>
            </li>
            <li className="m-2 w-full">
              <h6 className="mb-1 font-bold">{`Timeline ⏰`}</h6>
              <p>{`September 2023 – present`}</p>
            </li>
            <li className="m-2 w-full">
              <h6 className="mb-1 font-bold">{`Skills 🕺`}</h6>
              <p>{`Figma, Procreate, React Native, Wireframes & prototyping, Personas`}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
