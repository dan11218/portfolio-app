import Image from "next/image";
import Button from "./components/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-full w-full flex-col items-center overflow-hidden">
      <div
        className={`flex h-full w-full max-w-7xl flex-col items-center justify-center sm:h-[1100px] md:py-72`}
      >
        <Image
          src={`/static/graphics/Cube_Name.png`}
          width={500}
          height={500}
          alt={`spiral graphics`}
          className={`z-30 py-32`}
        />
        <div
          className={`z-30 flex w-fit max-w-5xl flex-col items-center px-8 text-center`}
        >
          <h2
            className={`dar:bg-stone-700 mb-12 bg-slate-50 text-3xl font-[500] md:text-4xl dark:bg-stone-900`}
          >
            {`Product Designer + Front-End Developer creating intuitive web and mobile interfaces for startups`}
            .
          </h2>

          <Link
            href={`mailto:danielgraugnard@gmail.com`}
            className={`w-fit border-2 border-current bg-slate-50 p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {`danielgraugnard@gmail.com`}
          </Link>
        </div>
      </div>
      <Image
        src={`/static/graphics/spiral-design.svg`}
        width={700}
        height={700}
        alt={`spiral graphics`}
        className={`absolute -right-[20%] top-[20%] z-10 sm:-top-[15%]`}
      />
      <Image
        src={`/static/graphics/particles.svg`}
        width={600}
        height={600}
        alt={`particle graphics`}
        className={`absolute -bottom-[12%] -left-[10%] z-0`}
      />
    </section>
  );
}
