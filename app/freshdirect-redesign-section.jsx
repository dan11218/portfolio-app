import Image from "next/image";
import Link from "next/link";

export default function FreshDirectSection() {
  return (
    <div
      id={`highlight-1`}
      className="flex w-full flex-col items-center px-8 py-24"
    >
      <div className="flex w-full max-w-6xl flex-col-reverse items-center md:mr-24 md:flex-row-reverse">
        <div className={`flex flex-col justify-center`}>
          <div className="w-full max-w-2xl">
            <h2 className={`mb-2 font-[500]`}>{"FreshDirect Redesign"}</h2>
            <p className={`mb-12`}>
              {`A fresh way to shop for your groceries with an improved check-out experience.`}
            </p>
            <Link
              href={`/freshdirect-redesign`}
              className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-100 hover:bg-[#49662e] hover:text-slate-50`}
            >
              {"Learn more"}
            </Link>
          </div>
        </div>
        <div className="flex w-full max-w-2xl flex-col">
          <Image
            src={`/static/freshdirect-redesign/mockups/search results angled.png`}
            width={500}
            height={500}
            layout="responsive"
            alt={`device mockups`}
          />
        </div>
      </div>
    </div>
  );
}
