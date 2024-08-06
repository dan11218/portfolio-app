import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex w-screen flex-col items-center px-8 pb-24 pt-80">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center">
        <Image
          src="/static/freshdirect-redesign/logos/freshdirect-logo.png"
          width={500}
          height={500}
          alt="logo"
        ></Image>
        <div className="my-10 flex h-fit w-fit flex-col px-[25px]">
          <h1 className="font-medium text-[#639B40]">{`Mobile Redesign`}</h1>
        </div>
      </div>
      <div className="flex w-full max-w-4xl flex-col">
        <Image
          src="/static/freshdirect-redesign/mockups/search results angled.png"
          width={500}
          height={500}
          layout="responsive"
          alt="screenshot of sign up"
        />
      </div>
    </section>
  );
}
