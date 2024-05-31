import Image from "next/image";
import Button from "./components/button";

export default function AboutMe() {
  return (
    <section
      id={`about-me`}
      className="flex w-screen flex-col items-center bg-inherit px-4"
    >
      <div className="flex w-full max-w-5xl flex-col items-center py-16 md:flex-row">
        <div className="mb-6 flex h-full w-full flex-col">
          <Image
            src="/static/graphics/Cube_Name.png"
            width={500}
            height={500}
            alt="profile image"
          ></Image>
        </div>
        <div className="flex w-full max-w-md flex-col border-l-2 border-solid border-slate-300 pl-[25px]">
          {/* <div className={"mb-8 flex w-fit flex-col items-center"}>
            <h3>{`Hey again!`}</h3>
            <hr className={`my-1 h-1 w-full rounded bg-gradient-to-r`} />
          </div> */}
          <div className="mb-8">
            <p>
              {`I'm a NY based UI Designer with a passion for web design. My expertise in Front-end technologies, UX Design, and CX help me communicate my ideas clearly among various teams, whether they're Users, Customer Success, Engineering, and Product teams. `}
            </p>
            <br />
            <p>
              {`When I'm not working, I'm either cooking up a new dish, reading
              fiction or poetry, gaming/streaming, or trying out new restaurants in NYC with my partner. On my spare time I study game design and contribute to on an indie-horror game I'm developing in Godot. `}
            </p>
          </div>
          <Button
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
