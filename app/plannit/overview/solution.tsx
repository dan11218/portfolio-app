import Image from "next/image";

export default function Solution() {
  return (
    <div className="mb-8 flex h-full w-full flex-col justify-center">
      <h4 className="mb-4 font-semibold text-rose-500">{`Solution`}</h4>
      <p>
        {` I designed Plannit, a mobile platform that allows event planners to `}
        <mark className="bg-yellow-100 dark:bg-yellow-500">
          <u className="decoration-yellow-500">{`stay
        up-to-date on upcoming events`}</u>
        </mark>
        {`, `}
        <mark className="bg-yellow-100 dark:bg-yellow-500">
          <u className="decoration-yellow-500">{`keep track of contacts,`}</u>
        </mark>
        {` such as clients,
        vendors, and venues, and `}
        <mark className="bg-yellow-100 dark:bg-yellow-500">
          <u className="decoration-yellow-500">{`manage tasks for each event.`}</u>
        </mark>
      </p>
    </div>
  );
}
