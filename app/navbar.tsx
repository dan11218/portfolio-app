import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex w-screen flex-col items-center border-b-2 border-solid  border-slate-300 bg-slate-50 px-[20px] shadow-lg dark:border-none dark:bg-slate-950">
      <div className="relative flex w-full max-w-7xl flex-row items-start justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center justify-center py-2"
        >
          <Image
            src="/logos/black_logo.png"
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
            className="text-centertransition flex h-full w-full flex-col items-center justify-center duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-800"
            href="https://drive.google.com/file/d/1RO_wivepMED410EoNMQeD5jam5J7awYe/view?usp=share_link"
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
      </div>
    </nav>
  );
}
