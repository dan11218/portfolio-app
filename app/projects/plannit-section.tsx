import Image from "next/image";
import Link from "next/link";

export default function PlannitSection() {
  return (
    <div
      id={`highlight-1`}
      className="mb-16 flex h-full w-full max-w-[1400px] flex-col-reverse items-center rounded-3xl border border-slate-400 bg-rose-50 p-16 md:flex-row dark:text-slate-800"
    >
      <div className={`flex flex-col`}>
        <div className="w-full max-w-2xl">
          <h2 className={`mb-2 font-[500]`}>{"Plannit"}</h2>
          <p className={`mb-12`}>
            {`Collaborate with your team to organize events, create and manage tasks, and connect with a wide network of clients and vendors to plan the perfect event.`}
          </p>
          <Link
            href={`/projects/plannit`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {"Learn more"}
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-col">
        <Image
          src={`/static/plannit/mockups/plannit mockup.png`}
          width={500}
          height={500}
          layout="responsive"
          alt={`device mockups`}
        />
      </div>
    </div>
  );
}
