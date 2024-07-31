import { inter } from "@/app/fonts";
import Image from "next/image";

export default function PreviousDesigns() {
  return (
    <section className={`flex h-full w-full flex-col py-16`}>
      <div className="flex w-full flex-col items-center justify-center px-8 py-16 md:flex-row ">
        <div className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 md:mr-24`}>
          <h4
            className={`${inter.className} mb-4 font-medium`}
          >{`Poor user control in navigation elements.`}</h4>
          <p>{`Horizontal scrolling in these menus does not align with best UX practices and standards/existing mental models, as well as the fact that entire sections of info and options could be missed by the user.`}</p>
        </div>
        <div className="w-full max-w-xs">
          <Image
            src="/static/freshdirect-redesign/deprecated-designs/home screen.png"
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
            src="/static/freshdirect-redesign/deprecated-designs/results screen.png"
            width={500}
            height={500}
            layout="responsive"
            alt="screenshot of deprecated results screen"
          />
        </div>
        <div className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 `}>
          <h4
            className={`${inter.className} mb-4 font-medium`}
          >{`Inconsistencies in visual hierarchy.`}</h4>
          <p>{`Various areas of the app can be improved visually by enforcing a consistent line heights and alignment.`}</p>
        </div>
      </div>
    </section>
  );
}
