import Image from "next/image";

export default function Solution() {
  return (
    <div className="flex h-full w-full flex-col justify-center p-8">
      <h4 className="mb-4 text-rose-400">Solution</h4>
      <p>
        {` I designed Plannit, a mobile platform that allows event planners to `}
        <mark className="bg-yellow-100">
          <u className="decoration-yellow-500">{`stay
        up-to-date on upcoming events`}</u>
        </mark>
        {`, `}
        <mark className="bg-yellow-100">
          <u className="decoration-yellow-500">{`keep track of contacts,`}</u>
        </mark>
        {` such as clients,
        vendors, and venues, and`}
        <mark className="bg-yellow-100">
          <u className="decoration-yellow-500">{` manage tasks for each event.`}</u>
        </mark>
      </p>
    </div>
  );
}
