import Image from "next/image";
import Link from "next/link";

export default function Solution() {
  return (
    <div className="flex h-full w-full max-w-3xl flex-col items-center p-8">
      <h4 className="mb-4 font-semibold text-[#6F9848]">Solution</h4>
      <p>
        {` With`}{" "}
        <Link
          className="underline hover:text-sky-500"
          href="https://www.nngroup.com/articles/ten-usability-heuristics/"
        >{`Neilsen's Usability Heuristics`}</Link>
        {` in mind, we set out to redesign the Search and Checkout flows the FreshDirect mobile app for a user-friendly and intuitive experience. `}
      </p>
    </div>
  );
}
