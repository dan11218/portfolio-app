import Image from "next/image";
import { inter } from "../../fonts";
import Button from "@/app/components/button";

export default function Hero() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-6 pb-8 pt-64">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-24 flex h-fit w-fit flex-col items-center">
          <h1 className={`${inter.className}`}>
            {`Welcome to `}
            <span className="font-bold text-rose-400">{`Plannit`}</span>
          </h1>
          <h4
            className={`mb-16 ${inter.className} font-light`}
          >{`Your next event is ready for take-off. 🚀`}</h4>
          <Button
            url={
              "https://www.figma.com/proto/V1LLfmALneuerhGoq7hATw/Plannit-App?page-id=0%3A1&type=design&node-id=702-427&viewport=35%2C-512%2C0.71&t=AEP1ckLGHKcaCH2v-1&scaling=scale-down&starting-point-node-id=702%3A427"
            }
            text={"Open prototype"}
          />
        </div>
        <div
          className={`flex h-full w-full flex-col items-center justify-center md:flex-row`}
        >
          <div className="flex h-full w-full flex-col px-8">
            <Image
              src="/static/plannit/mockups/choose account type.png"
              width={500}
              height={500}
              layout="responsive"
              alt="screenshot of Today View"
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
              alt="screenshot of Today View"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
