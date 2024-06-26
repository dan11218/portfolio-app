import Image from "next/image";
import { inter } from "../../fonts";

export default function Hero() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-6 pb-8 pt-64">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center">
        <div className="mb-16 flex h-fit w-fit flex-col items-center">
          <h3
            className={`mb-8 ${inter.className} font-light`}
          >{`Your next event is ready for take-off. 🚀`}</h3>
        </div>
        <div
          className={`flex h-fit w-full flex-row items-center justify-center`}
        >
          <Image
            src="/static/plannit/mockups/choose account type.png"
            width={400}
            height={400}
            alt="screenshot of Today View"
            className="mr-16"
          />

          <Image
            src="/static/plannit/mockups/home - events.png"
            width={400}
            height={400}
            alt="screenshot of Today View"
            className="mr-16"
          />
          <Image
            src="/static/plannit/mockups/venue page.png"
            width={400}
            height={400}
            alt="screenshot of Today View"
            className="mr-16"
          />
        </div>
      </div>
    </section>
  );
}
