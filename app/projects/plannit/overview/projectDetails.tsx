export default function ProjectDetails() {
  return (
    <ul className="mb-16 flex w-full flex-col bg-rose-50 px-6 py-3 text-stone-700 md:flex-row dark:bg-slate-600 dark:text-slate-50">
      <li className="m-2">
        <h6 className="mb-1 font-bold">Team</h6>
        <p>
          {`Danny Graugnard -`} <br /> {`UX Designer/React Native Developer`}
        </p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">Timeline</h6>
        <p>{`September 2023 – present`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">Project Type</h6>
        <p>{`Mobile design exercise`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">Tools</h6>
        <p>{`Figma, React Native`}</p>
      </li>
    </ul>
  );
}
