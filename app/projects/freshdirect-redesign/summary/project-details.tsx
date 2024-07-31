import Link from "next/link";

export default function ProjectDetails() {
  return (
    <div className="mb-16 flex max-w-5xl flex-col items-center rounded-xl border border-slate-700 bg-white p-8 dark:bg-slate-700">
      <ul className="mb-4 flex h-full w-full flex-col justify-between  md:flex-row">
        <li className="m-2 w-full text-nowrap">
          <h6 className="mb-1 font-bold">{`Team 👨‍💻`}</h6>
          <p>
            <Link
              className="underline hover:text-sky-500"
              href={"https://www.linkedin.com/in/danielgraugnard"}
            >{`Daniel Graugnard`}</Link>
            {` - UX/UI Designer`}
          </p>
          <p>
            <Link
              className="underline hover:text-sky-500"
              href={"https://www.linkedin.com/in/elemaire"}
            >{`Eric Lemaire`}</Link>
            {` - UX/UI Designer`}
          </p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Timeline ⏰`}</h6>
          <p>{`February 2024 – present`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Project Type 📱`}</h6>
          <p>{`Mobile redesign`}</p>
        </li>
        <li className="m-2 w-full">
          <h6 className="mb-1 font-bold">{`Skills 🕺`}</h6>
          <p>{`Figma, Wireframes & prototyping, React Native`}</p>
        </li>
      </ul>
    </div>
  );
}
