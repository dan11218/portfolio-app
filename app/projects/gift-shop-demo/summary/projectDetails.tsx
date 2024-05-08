export default function ProjectDetails() {
  return (
    <ul className="flex w-full flex-col bg-sky-100 px-6 py-3 md:flex-col">
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Team`}</h6>
        <ul className={`list-disc px-2`}>
          <li>
            <p>{`Danny Graugnard - React Developer`}</p>
          </li>
          <li>
            <p>{`Andrea Iori - UX Designer`}</p>
          </li>
        </ul>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Timeline`}</h6>
        <p>{`August 2020 – October 2020`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Project Type`}</h6>
        <p>{`Front-end coding exercise`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Skills`}</h6>
        <p>{`Sketch, Zeplin, React, Gatsby JS, Bootstrap`}</p>
      </li>
    </ul>
  );
}
