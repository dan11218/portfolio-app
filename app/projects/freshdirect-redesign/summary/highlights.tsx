import { inter } from "@/app/fonts";
import Image from "next/image";

export default function Highlights() {
  return (
    <section className={`flex h-full w-full flex-col py-16`}>
      <div className="flex w-full flex-col items-center justify-center px-8 py-16 md:flex-row ">
        <div className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 md:mr-24`}>
          <h4
            className={`${inter.className} mb-4 font-medium`}
          >{`All-new search results page.`}</h4>
          <p>{`Easily view all tags to refine your search. Updated product information is easier to read and more useful.`}</p>
        </div>
        <div className="w-full max-w-xs">
          <Image
            src="/static/freshdirect-redesign/mockups/search results.png"
            width={500}
            height={500}
            layout="responsive"
            alt="screenshot of deprecated home screen"
          />
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center px-8 py-16 md:flex-row">
        <div className="w-full max-w-xs md:mr-24">
          <Image
            src="/static/freshdirect-redesign/mockups/review order.png"
            width={500}
            height={500}
            layout="responsive"
            alt="screenshot of deprecated results screen"
          />
        </div>
        <div className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 `}>
          <h4
            className={`${inter.className} mb-4 font-medium`}
          >{`Re-designed checkout flow is now easier and quicker.`}</h4>
          <p>{`A new progress bar helps easily navigate the checkout flow, and now it's easier than ever to switch between Deliver and Pickup options.`}</p>
        </div>
      </div>
    </section>
  );
}
