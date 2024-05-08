export default function ProjectDetails() {
  return (
    <ul className="flex h-fit w-full flex-col bg-slate-100 px-6 py-3 text-slate-600 md:flex-col">
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Team`}</h6>
        <ul className={`list-disc px-6`}>
          <li>
            <p>{`Danny Graugnard - Web Developer`}</p>
          </li>
        </ul>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Timeline`}</h6>
        <p>{`March 2018 – March 2018`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Project Type`}</h6>
        <p>{`Web Design, Web development`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Skills`}</h6>
        <p>{`Figma, HTML, CSS, Javascript, jQuery`}</p>
      </li>
    </ul>
  );
}
