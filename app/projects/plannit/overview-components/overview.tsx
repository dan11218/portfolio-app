import Image from "next/image";
import Link from "next/link";
import { space_mono, kalam } from "@/app/fonts";
import ProjectDetails from "./projectDetails";
import Problem from "./problem";

export default function Overview() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <div className="fle mb-16 flex flex-col">
          <h1 className="mb-16 text-center">Overview</h1>
          <p>
            Plannit is an event management tool that allows users to quickly
            view upcoming events, manage tasks, and connect with a wide network
            of clients and vendors.
          </p>
        </div>
        <Link
          href="https://www.figma.com/proto/V1LLfmALneuerhGoq7hATw/Plannit-App?page-id=0%3A1&type=design&node-id=702-427&viewport=35%2C-512%2C0.71&t=AEP1ckLGHKcaCH2v-1&scaling=scale-down&starting-point-node-id=702%3A427"
          className="focus:shadow-outline my-12 flex h-16 w-fit items-center justify-center bg-slate-800 px-6 text-lg font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-600"
          target="_blank"
        >
          Open Prototype
          <svg
            className="mx-3 h-5 w-5 text-slate-50 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
        <Problem />
        <ProjectDetails />
      </div>
    </section>
  );
}
