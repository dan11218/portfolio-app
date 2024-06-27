import Image from "next/image";
import Button from "./components/button";

export default function Hero() {
  return (
    <section className="relative flex h-full w-screen flex-col items-center overflow-hidden bg-inherit">
      <div
        className={`flex h-full w-full max-w-7xl flex-col items-center justify-center bg-inherit py-32 sm:h-[1100px] md:py-72`}
      >
        <Image
          src={`/static/graphics/Cube_Name.png`}
          width={500}
          height={500}
          alt={`spiral graphics`}
          className={`z-30 py-32`}
        />
        <div
          className={`z-30 flex w-full max-w-6xl flex-col items-center bg-inherit p-8 text-center`}
        >
          <h2 className={`mb-12 font-[500]`}>
            {`Product Designer + Front-End Developer creating intuitive web and mobile interfaces for startups`}
            .
          </h2>
          <Button
            url={`mailto:danielgraugnard@gmail.com`}
            text={`danielgraugnard@gmail.com`}
          />
        </div>
      </div>
      <Image
        src={`/static/graphics/spiral-design.svg`}
        width={700}
        height={700}
        alt={`spiral graphics`}
        className={`absolute -right-[20%] top-[20%] z-10 sm:-top-[15%]`}
      />
      <Image
        src={`/static/graphics/particles.svg`}
        width={600}
        height={600}
        alt={`particle graphics`}
        className={`absolute -bottom-[15%] -left-[10%] z-0`}
      />
    </section>
  );
}
