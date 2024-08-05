import Problem from "./problem";
import ProjectDetails from "./project-details";
import Solution from "./solution";
import Requirements from "./requirements";
import PreviousDesigns from "./previous-designs";
import Highlights from "./highlights";
import { inter } from "@/app/fonts";
import Link from "next/link";

export default function Summary() {
  return (
    <section id="summary" className="flex h-fit w-screen flex-col items-center">
      <div className="mb-8 flex w-full flex-col items-center">
        <div className={`flex w-full max-w-4xl flex-col items-center py-36`}>
          <h3 className={`${inter.className} mb-4`}>
            {`We redesigned the FreshDirect app to make it`}
            <span className="font-bold text-[#558537] dark:text-[#639B40]">{` easier than ever `}</span>
            {`to search your favorite items and filter your searches. Checkout is now simpler thanks a redesigned flow with the User in mind.`}
          </h3>
        </div>
        <Problem />
        <PreviousDesigns />
        <Solution />
        <Highlights />
        <ProjectDetails />
      </div>
      <div className="mb-16 flex max-w-4xl flex-row items-center rounded-xl border border-slate-400 bg-white p-8 dark:bg-slate-700">
        <h4 className="mr-4">⚠️</h4>
        <p>
          {`Note: this page is still under construction. Full project and design process is coming soon! If you'd like to learn more, send me a message `}
          <Link
            href={"mailto:danielgraugnard@gmail.com"}
            className="underline hover:text-sky-500"
          >{`here!`}</Link>
        </p>
      </div>
    </section>
  );
}
