import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex w-screen flex-col items-center bg-slate-50">
      <div
        id="section_1"
        className="flex w-full max-w-6xl flex-wrap justify-center py-16"
      >
        <div className="mx-6 mb-6 flex h-full flex-col items-center">
          <Image
            src="/static/profiles/profile_no_background.png"
            width={475}
            height={300}
            alt="profile image"
          ></Image>
        </div>
        <div className="mx-6 flex w-[500px] flex-col border-l-2 border-solid border-slate-200 px-[25px]">
          <div className="flex flex-col">
            <h2 className="text-royal-blue dark:text-slate-50">
              {`Hi, I'm Danny! 👋`}
            </h2>
            <hr className="my-2 mr-auto h-1 w-48 rounded border-0 bg-sky-300 md:my-4 dark:bg-indigo-800"></hr>
          </div>
          <div>
            <p>
              {`I'm a web developer with a passion for both Software Engineering and UX Design. I thrive on collaboration as a developer, focusing primarily on Product Design and Problem Solving. I find great excitement in extracting user needs through thorough research, and designing solutions to meet these needs. `}
            </p>
            <br />
            <p>
              {`My expertise in Front-end technologies, UX Design, and Customer Support help me communicate my ideas clearly among various teams, whether they're clients, users, engineering teams, and product teams. `}
            </p>
            <br />
            <p>
              {`When I'm not working, I'm either cooking up a new dish, reading
              fiction and poetry, gaming/streaming, or trying out new restaurants NYC with my partner. On my spare time, I'm studying game design and working on an indie-horror game built in Godot. I'd love to share these projects with you soon! `}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
