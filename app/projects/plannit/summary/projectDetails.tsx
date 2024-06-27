export default function ProjectDetails() {
  return (
    <div className="px-8">
      <ul className="mb-24 flex w-full max-w-5xl flex-col justify-between border border-slate-700 p-8 shadow-[18px_18px_0px_0px_rgba(0,0,0)] md:flex-row">
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`My Role 👨‍💻`}</h6>
          <p>{`Product Designer + React Native Developer`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Timeline ⏰`}</h6>
          <p>{`September 2023 – present`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Project Type 📱`}</h6>
          <p>{`Mobile design exercise, coding exercise`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Skills 🕺`}</h6>
          <p>{`Figma, Procreate, React Native, Wireframes & prototyping, Personas`}</p>
        </li>
      </ul>
    </div>
  );
}
