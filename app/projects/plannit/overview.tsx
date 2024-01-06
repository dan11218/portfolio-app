import Image from "next/image";
import Link from "next/link";

export default function Overview() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <h1 className="mb-10">Overview</h1>
      <div className="flex w-full max-w-3xl flex-col">
        <div className="mb-8 flex flex-col">
          <h3 className="mb-3">Problem</h3>
          <p>
            Planners work with a vast network of clients, vendors, and venues.
            It can be difficult to keep track of all the details, such as which
            vendors are assigned to which events, contacting venues for
            availability, or remembering to complete specific tasks for each
            event, among other duties.
          </p>
        </div>
        <div className="mb-8 flex flex-col">
          <h3 className="mb-3">Solution</h3>
          <p>
            I designed Plannit, a mobile platform that allows event planners to
            stay up-to-date on upcoming events, keep track of contacts, such as
            clients, vendors, and venues, and manage tasks for each event.
          </p>
        </div>
        <ul className="flex h-fit flex-row justify-around bg-amber-50 py-2 py-6 text-stone-700">
          <li className="mx-4 mr-6">
            <h4 className="text-md mb-1 font-medium md:text-2xl">My Role</h4>
            <p>UX Design Lead</p>
          </li>
          <li className="mx-4 mr-6">
            <h4 className="text-md mb-1 font-medium md:text-2xl">Timeline</h4>
            <p>
              September 2023–
              <br />
              November 2023
            </p>
          </li>
          <li className="mx-4 mr-6">
            <h4 className="text-md mb-1 font-medium">Project Type</h4>
            <p>Mobile design exercise</p>
          </li>
          <li className="mb-2 mr-6">
            <h4 className="mb-1 font-medium md:text-2xl">Tools</h4>
            <p>Figma</p>
          </li>
        </ul>
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
    </section>
  );
}
