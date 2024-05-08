export default function ProjectDetails() {
  return (
    <ul className="flex w-full flex-col bg-rose-100 px-6 py-3 md:flex-col">
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Team`}</h6>
        <p>
          {`Danny Graugnard -`} <br /> {`UX Designer/React Native Developer`}
        </p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Timeline`}</h6>
        <p>{`September 2023 – present`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Project Type`}</h6>
        <p>{`Mobile design exercise, coding exercise`}</p>
      </li>
      <li className="m-2">
        <h6 className="mb-1 font-bold">{`Skills`}</h6>
        <p>{`Figma, Photoshop, Procreate, Expo, React Native, auto-layouts, wireframes & prototyping, UX/UI Design Javascript, Expo, React Native`}</p>
      </li>
    </ul>
  );
}
