"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  // set state
  const [show, setShow] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Set element ref

  const ref = useRef<any>(null);

  // Detect router
  const router = useRouter();

  //Show navbar when scrolling up, hide when scrolling down
  const showNavbar = () => {
    // set current position
    const position = window.scrollY;
    setScrollPosition(position);

    // if position is greater than the previous position, trigger animation and set the new scroll position
    if (position > scrollPosition) {
      // when scrolling down, hide the navbar
      setShow(false);
      setToggle(false);
    } else {
      // when scrolling up, show the navbar
      setShow(true);
    }
    if (position === 0) {
      setShow(true);
    }
    setScrollPosition(window.scrollY);
  };

  const toggleNavbar = (toggle: boolean) => {
    setToggle(!toggle);
  };

  const collapseNavbar = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    // when scrolling, trigger showNavbar function
    window.addEventListener("scroll", showNavbar);

    window.addEventListener("click", collapseNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", showNavbar);
      window.removeEventListener("click", collapseNavbar);
    };
  }, [scrollPosition, currentPage]);

  return (
    <nav
      id={`navbar`}
      ref={ref}
      className={`${
        show ? "opacity-100" : "opacity-0"
      } fixed top-0 z-40 flex h-fit w-screen flex-col items-center bg-inherit px-[20px] transition duration-300 ease-in-out`}
    >
      <div className="relative flex w-full max-w-7xl flex-row items-center justify-between bg-inherit">
        <Link
          href="/"
          className="inline-flex w-fit items-center justify-center py-2"
        >
          <Image
            src="/static/icons & logos/black_logo.png"
            width={200}
            height={200}
            alt="DG Logo"
            className={`dark:invert`}
          ></Image>
        </Link>
        <div className="invisible flex w-[400px] flex-row justify-between self-stretch md:visible">
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="/#projects"
          >
            {`Projects`}
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="https://drive.google.com/file/d/1gE9Svb30xNVzfpjrIXlJMEb3SJsTSeGZ/view?usp=sharing"
            target="_blank"
          >
            {`Resumé`}
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="/about-me"
          >
            {`About me`}
          </Link>
          <Link
            className="flex h-full w-full flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
            href="mailto:danielgraugnard@gmail.com"
          >
            {`Contact`}
          </Link>
        </div>
        <div
          onClick={() => toggleNavbar(toggle)}
          className={`absolute right-0 flex h-full w-[60px] flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50 md:invisible dark:hover:bg-slate-50 dark:hover:text-slate-800`}
        >
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
        </div>
      </div>
      <div
        id={`mobile-nav`}
        className={`${
          !toggle ? "max-h-0" : "max-h-[600px]"
        } flex w-full flex-col justify-between overflow-hidden bg-inherit transition-all duration-500 ease-in-out`}
      >
        <Link
          className="flex h-full w-full flex-col items-center justify-center py-6 text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
          href="/#projects"
        >
          {`Projects`}
        </Link>
        <Link
          className="flex h-full w-full flex-col items-center justify-center py-6 text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
          href="https://drive.google.com/file/d/1gE9Svb30xNVzfpjrIXlJMEb3SJsTSeGZ/view?usp=sharing"
          target="_blank"
        >
          {`Resumé`}
        </Link>
        <Link
          className="flex h-full w-full flex-col items-center justify-center py-6 text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
          href="/about-me"
        >
          {`About me`}
        </Link>
        <Link
          className="flex h-full w-full flex-col items-center justify-center py-6 text-center transition duration-300 ease-in-out hover:bg-slate-800 hover:text-slate-50"
          href="mailto:danielgraugnard@gmail.com"
        >
          {`Contact`}
        </Link>
      </div>
    </nav>
  );
}
