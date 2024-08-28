import Image from "next/image";
import Link from "next/link";

export default function GiftShopSection() {
  return (
    <div
      id={`highlight-2`}
      className="flex w-full flex-col items-center px-8 py-24"
    >
      <div className="flex w-full max-w-6xl flex-col-reverse items-center md:ml-24 md:flex-row">
        <div className={`flex flex-col justify-center`}>
          <div className="w-full max-w-2xl">
            <h2 className={`mb-2 font-[500]`}>{"Usabilla Feedback"}</h2>
            <p className={`mb-12`}>
              {`A gift shop built in React and integrated with SurveyMonkey's Feedback Button to analyze the customer journey.`}
            </p>
            <Link
              href={`/gift-shop-demo`}
              className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-100 hover:bg-cyan-600 hover:text-slate-50`}
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
    </div>
  );
}
