import Image from "next/image";

export default function Hero() {
  return (
    <div className="mb-16 flex h-fit w-screen flex-col items-center bg-gradient-to-r from-sky-300 to-cyan-600 px-6 pt-28">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center">
        <div className="my-10 flex h-fit w-fit flex-col px-[25px]">
          <h1 className="font-medium text-slate-100">
            Usabilla Gift Shop Demo
          </h1>
          <h3 className="text-xl font-light text-slate-50 md:text-2xl">
            An E-commerce experience designed with the Voice of Customer in
            mind.
          </h3>
        </div>
        <Image
          src="/static/gift-shop-demo/macbook-bezel.png"
          width={800}
          height={800}
          alt="screenshot of Cart screen"
          className=""
        ></Image>
      </div>
    </div>
  );
}
