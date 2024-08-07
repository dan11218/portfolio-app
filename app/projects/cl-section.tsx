import Image from "next/image";
import Link from "next/link";

export default function CLSection() {
  return (
    <div
      id={`highlight-3`}
      className="mb-16 flex h-full w-full max-w-[1400px] flex-col-reverse items-center rounded-3xl border border-slate-400 bg-slate-50 p-16 md:flex-row-reverse dark:text-slate-800"
    >
      <div className={`flex flex-col justify-center`}>
        <div className="w-full max-w-2xl">
          <h2 className={`mb-2 font-[500]`}>{"Christian Lange Photography"}</h2>
          <p className={`mb-12`}>
            {`A portfolio website for commercial photographer agency. Built with HTML, CSS, Javascript, and jQuery.`}
          </p>
          <Link
            href={`/projects/cl-photography`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {"Learn more"}
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-col">
        <Image
          src={`/static/cl-photography/cl mockup.png`}
          width={500}
          height={500}
          layout="responsive"
          alt={`device mockups`}
        />
      </div>
    </div>
  );
}
