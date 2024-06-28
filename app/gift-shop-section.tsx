import Image from "next/image";
import Link from "next/link";

export default function GiftShopSection() {
  return (
    <div
      id={`highlight-2`}
      className="min-w-md flex h-[700px] w-full flex-col-reverse items-center justify-center overflow-hidden bg-cyan-500 py-8 sm:flex-row-reverse"
    >
      <div className={`flex flex-col justify-center`}>
        <div className="w-full max-w-2xl px-16 py-8 text-slate-50">
          <h1 className={`mb-6 font-[500]`}>{"Usabilla Feedback"}</h1>
          <p className={`mb-12`}>
            {`A gift shop built in React and integrated with SurveyMonkey's Feedback Button to analyze the customer journey.`}
          </p>
          <Link
            href={`/projects/gift-shop-demo`}
            className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-50 hover:bg-slate-50 hover:text-slate-700`}
          >
            {"Learn more"}
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-2xl">
        <Image
          src={`/static/gift-shop-demo/desktop.png`}
          width={700}
          height={700}
          layout="responsive"
          alt={`device mockups`}
        />
      </div>
    </div>
  );
}
