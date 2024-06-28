import Image from "next/image";
import Link from "next/link";

export default function CLSection() {
  return (
    <div
      id={`highlight-3`}
      className="min-w-md flex h-[700px] w-full flex-col-reverse items-center justify-center overflow-hidden bg-stone-700 py-8 sm:flex-row "
    >
      <div className={`flex flex-col justify-center`}>
        <div className="w-full max-w-2xl px-16 py-8 text-slate-50 ">
          <h1 className={`mb-6 font-[500]`}>{"Christian Lange Photography"}</h1>
          <p className={`mb-12`}>
            {`A portfolio website for commercial photographer agency. Built with HTML, CSS, Javascript, and jQuery.`}
          </p>
          <Link
            href={`https://christianlange.com`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-50 hover:bg-slate-50 hover:text-slate-700`}
          >
            {"Learn more"}
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-2xl">
        <Image
          src={`/static/cl-photography/cl mockup.png`}
          width={700}
          height={700}
          layout="responsive"
          alt={`device mockups`}
        />
      </div>
    </div>
  );
}
