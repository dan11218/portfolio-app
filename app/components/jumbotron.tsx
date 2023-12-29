import Link from "next/link";
import { kalam } from "../fonts";
import Image from "next/image";
import background from "../../public/graphics/Cube_Name.png";

export default function Jumbotron() {
  return (
    <section className="flex h-fit w-screen py-2 flex-col items-center justify-center bg-slate-200">
        <div className="h-fit flex w-full sm:max-w-6xl px-2 flex-col items-center justify-center">
        <Image
          src={background}
          width={500}
          height={500}
          alt="Daniel Graugnard"
        />
        <h2
        className={`${kalam.className} py-3 text-center text-sky-700 text-2xl sm:text-3xl`}
        >
          I&apos;m a designer with a background in Software Engineering and
          Customer Support
        </h2>
        <Link
          href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing"
          className="focus:shadow-outline flex h-16 w-fit justify-center items-center bg-slate-800 px-6 py-3 my-3 text-lg font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-600"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}
