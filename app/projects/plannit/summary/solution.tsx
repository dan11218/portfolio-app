import Image from "next/image";

export default function Solution() {
  return (
    <div className="flex h-full w-full flex-col justify-center p-8">
      <h4 className="mb-4 font-bold text-rose-400">Solution</h4>
      <p>
        {` I designed Plannit, a mobile platform that allows event planners to stay
        up-to-date on upcoming events, keep track of contacts, such as clients,
        vendors, and venues, and manage tasks for each event.`}
      </p>
    </div>
  );
}
