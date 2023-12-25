import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex w-screen flex-col items-center border-b-2 border-solid border-slate-300 bg-slate-50 px-[20px] shadow-lg dark:bg-slate-950">
      <div className="inline-flex w-full max-w-7xl items-start justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center justify-center py-2"
        >
          <Image
            src="/logos/black_logo.png"
            width={200}
            height={100}
            alt="DG Logo"
          ></Image>
        </Link>
        <div className="flex w-[400px] flex-row justify-between self-stretch">
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center text-base text-slate-800 transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 dark:text-slate-50"
            href="/"
          >
            Projects
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center text-base text-slate-800 transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 dark:text-slate-50"
            href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing"
          >
            Resumé
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center text-base text-slate-800 transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 dark:text-slate-50"
            href="/about-me"
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
}
