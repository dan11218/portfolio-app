import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex h-fit w-screen flex-col items-center bg-white px-6 pb-8 pt-36">
      <div className="mb-16 flex w-full max-w-6xl flex-col items-center justify-center md:flex-row">
        <Image
          src="/static/cl-photography/cl_logo.jpeg"
          width={100}
          height={100}
          alt="screenshot of Today View"
          className="mx-10 mb-6 max-w-40 md:max-w-60"
        ></Image>
        <div className="flex h-fit w-fit flex-col border-l-2 border-solid border-slate-300 px-[25px]">
          <h1 className="font-medium text-slate-600">{`Christian Lange Photography`}</h1>
          <h3 className="text-xl font-light text-slate-600 md:text-3xl">
            {`Commercial photography`}
          </h3>
        </div>
      </div>
      <div className="flex w-full max-w-6xl flex-col items-center justify-center">
        <Image
          src="/static/cl-photography/cl mockup.png"
          width={800}
          height={800}
          alt="screenshot of Cart screen"
          className=""
        ></Image>
      </div>
    </section>
  );
}
