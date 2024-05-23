import Image from "next/image";
import Header from "./components/header";
import CustomLink from "./components/customLink";

export default function AboutMe() {
  return (
    <section className="flex w-screen flex-col items-center bg-slate-50 text-slate-600">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center py-16 md:flex-row">
        <div className="mx-6 mb-6 flex h-full flex-col items-center">
          <Image
            src="/static/graphics/Cube_Name.png"
            width={475}
            height={300}
            alt="profile image"
          ></Image>
        </div>
        <div className="mx-6 flex w-full max-w-md flex-col border-l-2 border-solid border-slate-200 px-[25px]">
          <Header
            title={`About me`}
            color={`from-sky-500 to-cyan-300`}
            largeFont={false}
          />
          <div className="mb-8">
            <p>
              {`I'm a UI Designer with a passion for both Front-end technologies and graphic design. I find great excitement in extracting user needs through thorough research, and designing solutions to meet these needs. `}
            </p>
            <br />
            <p>
              {`My expertise in Front-end technologies, UX Design, and Customer Support help me communicate my ideas clearly among various teams, whether they're clients, users, engineering teams, and product teams. `}
            </p>
            <br />
            <p>
              {`When I'm not working, I'm either cooking up a new dish, reading
              fiction or poetry, gaming/streaming, or trying out new restaurants in NYC with my partner. On my spare time I study game design and contribute to on an indie-horror game I'm developing in Godot. `}
            </p>
          </div>
          <CustomLink
            url={
              "https://drive.google.com/file/d/1gWSmphdd8nQio8K98L-znsjbQM_G9rUe/view?usp=sharing"
            }
            text={"Download CV"}
            showIcon={false}
            bgColor="bg-slate-800 rounded-md transition-colors duration-150 hover:bg-slate-600"
            textColor={"text-slate-50 dark:text-white"}
          />
        </div>
      </div>
    </section>
  );
}
