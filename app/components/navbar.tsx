import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex w-screen flex-col items-center bg-slate-50 px-[20px] shadow-lg dark:bg-slate-950">
      <div className="relative flex w-full max-w-7xl flex-row items-start justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center justify-center py-2"
        >
          <Image
            src="/static/logos/black_logo.png"
            width={200}
            height={100}
            alt="DG Logo"
            className="dark:invert"
          ></Image>
        </Link>
        <div className="flex w-[400px] flex-row justify-between self-stretch">
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-800"
            href="/"
          >
            Projects
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-800"
            href="https://drive.google.com/file/d/1LPzhMJ8_6KMt1RKehH_HlUSsz7umPXnw/view?usp=sharing"
            target="_blank"
          >
            Resumé
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-800"
            href="/about-me"
          >
            About me
          </Link>
        </div>
        {/* <div className="absolute right-0 flex h-full w-[60px] flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 md:invisible dark:hover:bg-slate-50 dark:hover:text-slate-800">
          <svg
            className="h-7 w-7"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div> */}
      </div>
    </nav>
  );
}
