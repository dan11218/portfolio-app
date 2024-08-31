import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col items-center border-t-[1px] border-solid bg-slate-50 px-[20px] pb-6 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {`© 2022 — 2024 Daniel Graugnard`}
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li>
            <a href="/about-me" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/danielgraugnard/"
              className="me-4 hover:underline md:me-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dan11218"
              className="me-4 hover:underline md:me-6"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="mailto:danielgraugnard@gmail.com"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <p className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
        {`This portfolio was coded with ❤️ and ☕️. See the code `}
        <Link
          className="underline"
          href="https://github.com/dan11218/portfolio-app"
        >{`here!`}</Link>
      </p>
    </footer>
  );
}
