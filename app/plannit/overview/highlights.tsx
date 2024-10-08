import { inter } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Highlights() {
  return (
    <section id="highlights" className={`flex h-full w-full flex-col`}>
      <div className="flex flex-col items-center py-24">
        <div className="mb-16 flex w-full max-w-5xl flex-col items-center justify-between md:mb-0 md:flex-row ">
          <div
            className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 md:mr-16`}
          >
            <h3
              className={`${inter.className} mb-4 font-medium`}
            >{`Ready for launch.`}</h3>
            <p>{`The Dashboard shows you all of your events for the day, and will let you know if you have any tasks due before the event. `}</p>
          </div>
          <div className="w-full max-w-[300px]">
            <Image
              src="/static/plannit/mockups/home - events.png"
              width={500}
              height={500}
              layout="responsive"
              alt="screenshot of Today View"
            />
          </div>
        </div>
        <div className="flex w-full max-w-5xl flex-col-reverse items-center justify-between md:flex-row">
          <div className="w-full max-w-[300px] md:mr-16">
            <Image
              src="/static/plannit/mockups/venue page.png"
              width={500}
              height={500}
              layout="responsive"
              alt="screenshot of Today View"
            />
          </div>
          <div className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 `}>
            <h3
              className={`${inter.className} mb-4 font-medium`}
            >{`Explore a vast marketplace of Spaces.`}</h3>
            <p>{`Use Plannit to explore a wide network of Spaces ready to host your event. Need an outdoor space? Want to bring your own catering? We'll filter venues to match your exact needs.`}</p>
          </div>
        </div>
        <div className="flex w-full flex-col-reverse items-center justify-center p-8 md:flex-row">
          <Link
            href={`https://www.figma.com/proto/V1LLfmALneuerhGoq7hATw/Plannit-App?node-id=0-1&t=XoKPzPKgY1GCa0G6-1`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {"Open prototype"}
          </Link>
        </div>
      </div>
    </section>
  );
}
