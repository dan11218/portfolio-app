import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex h-[800px] w-screen flex-col items-center bg-[#edf7dc] px-6 pt-80">
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
    </section>
  );
}
