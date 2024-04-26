import Link from "next/link";
import { kalam, albert_sans, space_mono } from "./fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex w-screen flex-col items-center justify-center bg-slate-200 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 py-20">
      <div className="flex h-fit w-full flex-col items-center justify-center px-2 sm:max-w-6xl">
        <h2
          className={`${kalam.className} py-5 text-center text-2xl text-sky-100 sm:text-3xl`}
        >
          {`Hi there! I'm...`}
        </h2>
        <Image
          src={"/static/graphics/Cube_Name.png"}
          width={500}
          height={500}
          alt="Daniel Graugnard"
        />
        <h2
          className={`${kalam.className} py-5 text-center text-2xl text-sky-100 sm:text-3xl`}
        >
          {`I'm a Designer with a background in Software Engineering and
          Customer Support`}
        </h2>
        <Link
          href="https://drive.google.com/file/d/1d6gP1ji0WHuh4tYaNhQ_oFL7FH1gqRzH/view?usp=sharing"
          className="focus:shadow-outline my-3 flex h-16 w-fit items-center justify-center rounded bg-slate-800 px-6 py-3 text-lg font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-600"
          target="_blank"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}
