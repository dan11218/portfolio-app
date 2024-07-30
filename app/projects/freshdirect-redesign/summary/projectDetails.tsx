import Link from "next/link";

export default function ProjectDetails() {
  return (
    <div className="mb-16 flex max-w-5xl flex-col items-center border border-slate-700 bg-slate-50 p-8 shadow-[18px_18px_0px_0px_rgba(0,0,0)] dark:bg-slate-700">
      <ul className="mb-4 flex h-full w-full flex-col justify-between  md:flex-row">
        <li className="m-2 w-full text-nowrap">
          <h6 className="mb-1 font-bold">{`Team 👨‍💻`}</h6>
          <p>{`Daniel Graugnard - UX/UI Designer`}</p>
          <p>{`Eric Lemaire - UX/UI Designer`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Timeline ⏰`}</h6>
          <p>{`February 2024 – present`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Project Type 📱`}</h6>
          <p>{`Mobile design exercise, coding exercise`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Skills 🕺`}</h6>
          <p>{`Figma, Procreate, React Native, Wireframes & prototyping`}</p>
        </li>
      </ul>
    </div>
  );
}
