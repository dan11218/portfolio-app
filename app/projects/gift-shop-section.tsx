import Image from "next/image";
import Link from "next/link";

export default function GiftShopSection() {
  return (
    <div
      id={`highlight-2`}
      className="mb-16 flex h-full w-full max-w-[1400px] flex-col-reverse items-center rounded-3xl border border-slate-400 bg-sky-50 p-16 md:flex-row dark:text-slate-800"
    >
      <div className={`flex flex-col justify-center`}>
        <div className="w-full max-w-2xl">
          <h2 className={`mb-2 font-[500]`}>{"Usabilla Feedback"}</h2>
          <p className={`mb-12`}>
            {`A gift shop built in React and integrated with SurveyMonkey's Feedback Button to analyze the customer journey.`}
          </p>
          <Link
            href={`/projects/gift-shop-demo`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
          >
            {"Learn more"}
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-col">
        <Image
          src={`/static/gift-shop-demo/mockups/Mac Studio.png`}
          width={700}
          height={700}
          layout="responsive"
          alt={`device mockups`}
        />
      </div>
    </div>
  );
}
