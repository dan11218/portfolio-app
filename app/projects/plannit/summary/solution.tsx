import Image from "next/image";

export default function Solution() {
  return (
    <div className="flex h-full w-full max-w-6xl flex-col items-center justify-between py-8 md:flex-row">
      <div className="mb-16 flex w-full max-w-xl flex-col px-16 md:mb-0">
        <h4 className="mb-3 font-bold text-rose-400">Solution</h4>
        <p>
          {` I designed Plannit, a mobile platform that allows event planners to stay
        up-to-date on upcoming events, keep track of contacts, such as clients,
        vendors, and venues, and manage tasks for each event.`}
        </p>
      </div>
      <div className="flex h-fit w-full max-w-[300px]">
        <Image
          src={`/static/plannit/mockups/home - events.png`}
          width={500}
          height={500}
          layout="responsive"
          alt="home screen mockups"
        />
      </div>
    </div>
  );
}
