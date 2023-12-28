import Link from "next/link";
import { kalam } from "../fonts";
import Image from "next/image";
import background from "../../public/backgrounds/Cube_Name.png";

export default function Jumbotron() {
  return (
    <section className="flex h-[600px] w-screen flex-col items-center justify-center bg-slate-200 py-[50px]">
      <div className="h-50 flex w-full max-w-6xl flex-col items-center justify-center px-[50px]">
        {/* <h1 className="py-3 text-4xl font-semibold text-slate-700 md:text-5xl">
          Danny Graugnard
        </h1> */}
        <Image
          src={background}
          width={500}
          height={500}
          alt="Daniel Graugnard"
        />
        <h2
          className={`${kalam.className} py-3 text-center text-base text-sky-700 md:text-2xl`}
        >
          I&apos;m a designer with a background in Software Engineering and
          Customer Support
        </h2>
        <Link
          href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing"
          className="focus:shadow-outline flex h-10 w-fit items-center bg-slate-800 px-5 py-3 text-sm font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-600"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}
