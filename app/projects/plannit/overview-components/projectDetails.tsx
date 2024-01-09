export default function ProjectDetails() {
  return (
    <ul className="flex h-fit w-full max-w-72 flex-col justify-around bg-slate-200 py-2 text-stone-700 sm:max-w-3xl sm:flex-row dark:bg-blue-900 dark:text-slate-50">
      <li className="m-2">
        <h4 className="text-md mb-1 font-medium md:text-2xl">My Role</h4>
        <p>UX Design Lead</p>
      </li>
      <li className="m-2">
        <h4 className="text-md mb-1 font-medium md:text-2xl">Timeline</h4>
        <p>
          September 2023–
          <br />
          November 2023
        </p>
      </li>
      <li className="m-2">
        <h4 className="text-md mb-1 font-medium md:text-2xl">Project Type</h4>
        <p>Mobile design exercise</p>
      </li>
      <li className="m-2">
        <h4 className="text-md mb-1 font-medium md:text-2xl">Tools</h4>
        <p>Figma</p>
      </li>
    </ul>
  );
}
