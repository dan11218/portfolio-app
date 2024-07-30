import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex h-fit w-screen flex-col items-center bg-[#FDF9EF] px-6 pb-16 pt-64">
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
