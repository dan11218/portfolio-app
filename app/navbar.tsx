"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  // set state
  const [show, setShow] = useState("opacity-0");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const router = useRouter();

  const showNavbar = () => {
    // set current position
    const position = window.scrollY;
    setScrollPosition(position);

    // if position is greater than the previous position, trigger animation and set the new scroll position
    if (position > scrollPosition) {
      // when scrolling down, hide the navbar
      setShow("opacity-0");
    } else {
      // when scrolling up, show the navbar
      setShow("opacity-100");
    }
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // when scrolling, trigger showNavbar function
    window.addEventListener("scroll", showNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", showNavbar);
    };
  }, [scrollPosition, currentPage]);

  return (
    <nav
      className={`${show} fixed top-0 z-40 flex h-fit w-screen flex-col items-center bg-inherit px-[20px] transition duration-300 ease-in-out`}
    >
      <div className="relative flex w-full max-w-7xl flex-row items-start justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center justify-center py-2"
        >
          <Image
            src="/static/icons & logos/black_logo.png"
            width={200}
            height={100}
            alt="DG Logo"
            className={`dark:invert`}
          ></Image>
        </Link>
        <div className="flex w-[400px] flex-row justify-between self-stretch">
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="https://drive.google.com/file/d/1gWSmphdd8nQio8K98L-znsjbQM_G9rUe/view?usp=sharing"
            target="_blank"
          >
            Resumé
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="mailto:danielgraugnard@gmail.com"
          >
            Contact
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
