import Image from "next/image";
import Link from "next/link";

export default function Solution() {
  return (
    <div className="flex w-full flex-col items-center bg-[#49662e] py-24">
      <div className="flex w-full max-w-3xl flex-col text-slate-50">
        <h3 className="mb-4 dark:text-slate-50">{`Solution`}</h3>
        <p>
          {` With`}{" "}
          <Link
            className="underline hover:text-sky-500"
            href="https://www.nngroup.com/articles/ten-usability-heuristics/"
          >{`Neilsen's Usability Heuristics`}</Link>
          {` in mind, we set out to redesign the Search and Checkout flows the FreshDirect mobile app for a user-friendly and intuitive experience. `}
        </p>
      </div>
    </div>
  );
}
