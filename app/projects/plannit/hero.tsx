import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex h-fit w-screen flex-col items-center bg-gradient-to-r from-rose-400 to-orange-300 px-6 pb-8 pt-28">
      <div className="flex w-full max-w-6xl flex-wrap items-center justify-center">
        <Image
          src="/plannit/todayView.png"
          width={310}
          height={500}
          alt="hero image"
          className="mx-10 mb-6"
        ></Image>
        <div className="flex h-fit w-fit flex-col border-l-2 border-solid border-slate-300 px-[25px]">
          <h1 className="font-medium text-slate-100">Plannit</h1>
          <h3 className="font-light text-slate-200 dark:text-slate-50">
            Your next event is ready for take off. 🚀
          </h3>
        </div>
      </div>
    </div>
  );
}
