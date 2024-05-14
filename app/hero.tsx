import Link from "next/link";
import { kalam, albert_sans, space_mono } from "./fonts";
import Image from "next/image";
import CustomLink from "./components/customLink";

export default function Hero() {
  return (
    <section className="flex w-screen flex-col items-center justify-center bg-slate-200 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 pb-16 pt-24">
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
        <h2 className={`${kalam.className} py-5 text-center text-sky-100`}>
          {`I'm a Designer with a background in Software Engineering and
          Customer Support`}
        </h2>
        <Link
          href={`/#projects`}
          className={`text-slate-600s rounded-full bg-slate-100 p-3 shadow-xl transition-colors duration-150 hover:bg-slate-600`}
        >
          <p>{`Scroll to projects`}</p>
        </Link>
      </div>
    </section>
  );
}
