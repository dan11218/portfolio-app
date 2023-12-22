import Link from "next/link";
import { kalam } from "./fonts";

export default function Jumbotron() {
  return (
    <div className="inline-flex h-[600px] w-screen justify-center bg-slate-200 py-[50px]">
      <div className="h-50 flex w-full max-w-6xl flex-col items-center justify-center px-[50px]">
        <h1 className="py-[5px] font-semibold text-slate-700">
          Hi, I&apos;m Danny! 👋
        </h1>
        <h2
          className={`${kalam.className} px-[60px] py-[20px] text-center text-sky-700`}
        >
          I&apos;m a designer with a background in Software Engineering and
          Customer Support
        </h2>
        <Link
          href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing"
          className="focus:shadow-outline flex h-10 w-fit items-center bg-slate-800 px-5 text-sm font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-600"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
}
