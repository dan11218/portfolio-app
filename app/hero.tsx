import Link from "next/link";
import { playfair_display, albert_sans } from "./fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex h-fit w-screen flex-col items-center overflow-hidden bg-slate-50 px-8
    pb-32 dark:bg-stone-900"
    >
      <div
        className={`relative flex h-full w-full max-w-6xl flex-col items-center overflow-hidden bg-inherit py-32 sm:flex-row`}
      >
        <div
          className={`${playfair_display.className} z-20 mb-16 flex w-fit max-w-lg flex-col justify-center sm:mb-0`}
        >
          <h1
            className={`mb-4 font-bold leading-none md:leading-normal`}
          >{`Hi, I'm Danny 👋`}</h1>
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
        <div className={`relative flex h-fit w-full flex-col items-center`}>
          <Image
            src={"/static/profiles/profile_bw.png"}
            width={300}
            height={300}
            alt="Daniel Graugnard"
            className={`z-10 bg-stone-400`}
          />
          {/* <Image
            src={`/static/graphics/jumbotron-graphics.svg`}
            width={1000}
            height={1000}
            alt={`background graphics`}
            className={`absolute z-0`}
          /> */}
          <Image
            src={`/static/graphics/spiral-design.svg`}
            width={500}
            height={500}
            alt={`background graphics`}
            className={`absolute -right-64 -top-24 z-0`}
          />
          <Image
            src={`/static/graphics/particles.svg`}
            width={500}
            height={500}
            alt={`background graphics`}
            className={`absolute -bottom-72 -left-12 z-0`}
          />
        </div>
      </div>
    </section>
  );
}
