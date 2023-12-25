import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex w-screen flex-col bg-slate-50 dark:bg-slate-950">
      <div className="flex w-full max-w-[90rem] flex-row justify-center">
        <Link href="https://github.com/dan11218/portfolio-app">
          <p className="bottom-0 h-[30px] w-full text-center text-sm hover:text-sky-600 dark:text-slate-50">
            Made with Next.js and Tailwind CSS by Danny Graugnard ©2023
          </p>
        </Link>
      </div>
    </section>
  );
}
