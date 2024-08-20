import Image from "next/image";
import { inter } from "../fonts";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-6 pb-48 pt-64">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-24 flex h-fit w-fit flex-col items-center">
          <h1 className={`${inter.className}`}>
            {`Welcome to `}
            <span className="font-bold text-rose-400">{`Plannit`}</span>
          </h1>
          <h4
            className={`mb-16 ${inter.className} font-light`}
          >{`Your next event is ready for take-off. 🚀`}</h4>
          <Link
            href={`https://www.figma.com/proto/V1LLfmALneuerhGoq7hATw/Plannit-App?node-id=0-1&t=XoKPzPKgY1GCa0G6-1`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {"Open prototype"}
          </Link>
        </div>
        <div
          className={`flex h-full w-full max-w-7xl flex-col items-center justify-center md:flex-row`}
        >
          <div className="flex w-full flex-col px-8">
            <Image
              src="/static/plannit/mockups/choose account type.png"
              width={500}
              height={500}
              layout="responsive"
              alt="screenshot of sign up"
            />
          </div>
          <div className="flex h-full w-full flex-col px-8">
            <Image
              src="/static/plannit/mockups/home - events.png"
              width={500}
              height={500}
              layout="responsive"
              alt="screenshot of Today View"
            />
          </div>
          <div className="flex h-full w-full flex-col px-8">
            <Image
              src="/static/plannit/mockups/venue page.png"
              width={500}
              height={500}
              layout="responsive"
              alt="screenshot of venue page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
