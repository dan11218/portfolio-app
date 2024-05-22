import Link from "next/link";
import { playfair_display, albert_sans } from "./fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex h-fit w-screen flex-col items-center bg-slate-50 px-24 py-32 dark:bg-stone-900">
      <div
        className={`flex h-full w-full flex-col items-center bg-inherit sm:flex-row`}
      >
        <div
          className={`${playfair_display.className} z-20 mb-8 flex w-full flex-col justify-center bg-inherit`}
        >
          <h1 className={`mb-4 font-bold`}>{`Hi, I'm Danny 👋`}</h1>
          <h3 className={`mb-12`}>
            {`UI Designer for SaaS companies with a background in Software Engineering and CX.`}
          </h3>
          <Link
            href={`mailto:danielgraugnard@gmail.com`}
            className={`w-fit rounded-md bg-stone-950 p-3 font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-300 hover:text-slate-600 dark:bg-stone-50 dark:text-slate-800 ${albert_sans.className}`}
          >
            <p>{`danielgraugnard@gmail.com`}</p>
          </Link>
        </div>
        <div
          className={`mb-8 flex h-fit w-full flex-col items-center justify-end px-16 sm:mb-0`}
        >
          <Image
            src={"/static/profiles/profile_bw.png"}
            width={400}
            height={400}
            alt="Daniel Graugnard"
            className={`z-10 bg-stone-400`}
          />
          <Image
            src={`/static/graphics/jumbotron-graphics.svg`}
            width={700}
            height={700}
            alt={`background graphics`}
            className={`absolute z-0`}
          />
        </div>
      </div>
    </section>
  );
}
