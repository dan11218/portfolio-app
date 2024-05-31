import Image from "next/image";
import Button from "./components/button";

export default function Hero() {
  return (
    <section className="relative flex h-fit w-screen flex-col items-center overflow-hidden bg-inherit px-2">
      <div
        className={`relative flex h-full w-full max-w-6xl flex-col items-center bg-inherit py-32 sm:flex-row md:py-64`}
      >
        <div
          className={`z-30 mb-8 flex w-full flex-col bg-inherit px-16 py-8 md:mb-0 md:mr-6`}
        >
          <h1 className={`mb-6`}>{`Hey, I'm Danny 👋`}</h1>
          <h5 className={`mb-12 italic`}>
            {`UI Designer + Front-end Developer for SaaS companies with a background in CX.`}
          </h5>
          <Button
            url={`mailto:danielgraugnard@gmail.com`}
            text={`danielgraugnard@gmail.com`}
          />
        </div>
        <Image
          src={"/static/profiles/profile_bw.png"}
          width={350}
          height={350}
          alt="profile picture"
          className={`z-30 bg-stone-400 shadow-[18px_18px_0px_0px_rgba(0,0,0)]`}
        />
        <Image
          src={`/static/graphics/spiral-design.svg`}
          width={700}
          height={700}
          alt={`spiral graphics`}
          className={`absolute -right-[35%] top-[20%] z-10 sm:-top-[15%]`}
        />
        <Image
          src={`/static/graphics/particles.svg`}
          width={600}
          height={600}
          alt={`particle graphics`}
          className={`absolute -left-[5%] bottom-[5%] z-0`}
        />
      </div>
    </section>
  );
}
