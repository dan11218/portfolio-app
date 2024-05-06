import Image from "next/image";

export default function Hero() {
  return (
    <section className="mb-16 flex h-fit w-screen flex-col items-center bg-gradient-to-r from-rose-400 to-orange-300 px-6 pb-8 pt-28">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center md:flex-row">
        <Image
          src="/static/plannit/todayView.png"
          width={500}
          height={500}
          alt="screenshot of Today View"
          className="mx-10 mb-6 max-w-40 md:max-w-60"
        ></Image>
        <div className="flex h-fit w-fit flex-col border-l-2 border-solid border-slate-300 px-[25px]">
          <h1 className="font-medium text-slate-100">Plannit</h1>
          <h3 className="text-xl font-light text-slate-50 md:text-3xl">
            Your next event is ready for take off. 🚀
          </h3>
        </div>
      </div>
    </section>
  );
}
