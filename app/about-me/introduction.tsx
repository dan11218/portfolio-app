import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex w-screen flex-col items-center bg-slate-100 px-[20px] dark:bg-slate-950">
      <div className="flex w-full max-w-6xl flex-wrap justify-center py-[80px]">
        <div className="mx-6 mb-4 flex h-full flex-col items-center">
          <Image
            src="/profile/portfolio_aboutme.png"
            width={475}
            height={300}
            alt="profile image"
          ></Image>
        </div>
        <div className="mx-6 flex w-[500px] flex-col border-l-2 border-solid border-slate-200 px-[25px]">
          <h2 className="font-semibold text-royal-blue dark:text-slate-50">
            Hi, I&apos;m Danny!
          </h2>
          <hr className="my-2 mr-auto h-1 w-48 rounded border-0 bg-sky-300 md:my-4 dark:bg-gray-700"></hr>
          <p className="my-3 dark:text-slate-50">
            I&apos;m a UX Designer based in Queens, New York. I found my passion
            for design and software when I was an Event Coordinator working at a
            boutique hotel in NYC.
          </p>
          <p className="my-3 dark:text-slate-50">
            One day, I had an idea for an app that would help planners stay
            organised and solve some of the pain points I felt in my experience.
            I wanted to learn more about software development on both the
            engineering and design sides of the process.{" "}
          </p>
          <p className="my-3 dark:text-slate-50">
            When I&apos;m not working, I&apos;m either cooking, reading poetry,
            gaming/streaming, or trying out new restaurants NYC with my husband.
            I&apos;m also working on an indie-horror game built in Godot.
          </p>
        </div>
      </div>
    </div>
  );
}
