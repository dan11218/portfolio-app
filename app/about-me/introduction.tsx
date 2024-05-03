import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex w-screen flex-col items-center px-[20px] py-20">
      <div
        id="section_1"
        className="flex w-full max-w-6xl flex-wrap justify-center py-[80px]"
      >
        <div className="mx-6 mb-6 flex h-full flex-col items-center">
          <Image
            src="/static/profiles/profile_background.png"
            width={475}
            height={300}
            alt="profile image"
          ></Image>
        </div>
        <div className="mx-6 flex w-[500px] flex-col border-l-2 border-solid border-slate-200 px-[25px]">
          <div className="flex flex-col">
            <h2 className="text-royal-blue dark:text-slate-50">
              Hi, I&apos;m Danny! 👋
            </h2>
            <hr className="my-2 mr-auto h-1 w-48 rounded border-0 bg-sky-300 md:my-4 dark:bg-indigo-800"></hr>
          </div>
          <div className="font-light">
            <p>
              {`I'm a developer based in Queens, New York. I found my
              passion for design and software when I was an Event Coordinator
              working at a boutique hotel in NYC.`}
            </p>
            <br />
            <p>
              {`One day, I had an idea for an app that would help planners stay
              organized and solve some of the pain points I felt in my
              experience. From then, I wanted to learn more about software development on
              both the engineering and design sides of the process.`}
            </p>
            <br />
            <p>
              {`When I'm not working, I'm either cooking, reading
              poetry, gaming/streaming, or trying out new restaurants NYC with
              my partner. I'm also working on an indie-horror game built in
              Godot.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
