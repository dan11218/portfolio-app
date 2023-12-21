import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex w-full flex-col items-center border-2 border-solid border-slate-200 bg-slate-50 py-[10px]">
      <div className="inline-flex w-full max-w-6xl items-start justify-between">
        <Link
          href="/"
          className="inline-flex w-[235px] items-center justify-center gap-2.5 self-stretch"
        >
          <Image
            src="/logos/black_logo.png"
            width={200}
            height={100}
            alt="DG Logo"
          ></Image>
          {/* <div className="font-bold text-xl text-slate-700">Danny Graugnard</div> */}
        </Link>
        <div className="flex w-[400px] flex-row items-center justify-between self-stretch">
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center text-base text-slate-800 transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="/"
          >
            Projects
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center text-base text-slate-800 transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing"
          >
            Resumé
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center text-base text-slate-800 transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="/about-me"
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
}
