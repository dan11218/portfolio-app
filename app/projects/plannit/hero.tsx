import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex h-fit w-screen flex-col items-center border-4 border-solid border-green-500 px-[20px] py-20">
      <div className="flex w-full max-w-6xl flex-wrap items-center justify-center border-4 border-solid border-purple-500">
        <Image
          src="/plannit/Venue.png"
          width={250}
          height={500}
          alt="hero image"
          className=""
        ></Image>
        <div className="mx-6 flex h-fit w-fit flex-col border-l-2 border-solid border-slate-200 px-[25px]">
          <h1 className="font-medium text-orange-600 dark:text-slate-50">
            Plannit
          </h1>
        </div>
      </div>
    </div>
  );
}
