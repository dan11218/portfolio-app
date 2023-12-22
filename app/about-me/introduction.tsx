import Image from "next/image";

export default function Introduction() {
  return (
    <div className="inline-flex h-[600px] w-full justify-center border-2 border-solid border-orange-600">
      <div className="flex w-full max-w-6xl flex-row justify-between border-2 border-solid border-red-600">
        <div className="flex h-full flex-col items-center border-2 border-solid border-green-600">
          <Image
            src="/images/portfolio_aboutme.png"
            width={475}
            height={300}
            alt="profile image"
          ></Image>
        </div>
        <div className="flex w-[500px] flex-col border-2 border-solid border-indigo-600 px-[25px]">
          <h2 className="font-semibold text-royal-blue">Hi, I&apos;m Danny!</h2>
          <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10"></hr>
          <p className="font-regular my-3">
            I&apos;m a UX Designer based in Queens, New York. I found my passion
            for design and software when I was an Event Coordinator working at a
            boutique hotel in NYC. {<br />} One day, I had an idea for an app
            that would help planners stay organised and solve some of the pain
            points I felt in my experience. I wanted to learn more about
            software development on both the engineering and design sides of the
            process. When I&apos;m not working, I&apos;m either cooking, reading
            poetry, gaming/streaming, or trying out new restaurants NYC with my
            husband. I&apos;m also working on an indie-horror game built in
            Godot.
          </p>
        </div>
      </div>
    </div>
  );
}
