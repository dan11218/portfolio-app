export default function ProjectDetails() {
  return (
    <ul className="flex w-full max-w-md flex-col justify-between bg-slate-200 px-6 py-3 text-stone-700 dark:bg-blue-900 dark:text-slate-50">
      <li className="m-2">
        <h6 className="mb-1 font-bold">Team</h6>
        <p>{`Danny Graugnard - React Developer`}</p>
        <p>{`Andrea Iori - UX Designer`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">Timeline</h6>
        <p>{`August 2020 – September 2020`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">Project Type</h6>
        <p>{`Front-end coding exercise`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">Tools</h6>
        <p>{`Sketch, Zeplin, React, Gatsby JS`}</p>
      </li>
    </ul>
  );
}
