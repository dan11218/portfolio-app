import Image from "next/image";
import Link from "next/link";

export default function FreshDirectSection() {
  return (
    <div
      id={`highlight-1`}
      className="min-w-md flex h-[700px] w-full flex-col-reverse items-center justify-center overflow-hidden py-8 sm:flex-row-reverse"
    >
      <div className={`flex flex-col justify-center`}>
        <div className="w-full max-w-2xl px-16 py-8">
          <h1 className={`mb-2 font-[500]`}>{"FreshDirect Redesign"}</h1>
          <p className={`mb-12`}>
            {`A fresh way to shop for your groceries with an improved check-out experience.`}
          </p>
          <Link
            href={`/projects/freshdirect-redesign`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {"Learn more"}
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-col">
        <Image
          src={`/static/freshdirect-redesign/mockups/search results.png`}
          width={500}
          height={500}
          layout="responsive"
          alt={`device mockups`}
        />
      </div>
    </div>
  );
}
