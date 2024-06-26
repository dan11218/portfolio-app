import Image from "next/image";
import Button from "./components/button";

export default function AboutMe() {
  return (
    <section
      id={`about-me`}
      className="flex w-screen flex-col items-center bg-inherit px-4"
    >
      <div className="flex w-full max-w-5xl flex-col items-center justify-center py-16 md:flex-row">
        <Image
          src={"/static/profiles/profile_bw.png"}
          width={300}
          height={300}
          alt="profile picture"
          className={`mb-16 bg-stone-400 shadow-[18px_18px_0px_0px_rgba(0,0,0)] md:mb-0 md:mr-16`}
        />
        <div className="flex w-full max-w-md flex-col border-l-2 border-solid border-slate-300 pl-[25px]">
          <div className={"mb-8 flex w-fit flex-col items-center"}>
            <h2>{`Hi, I'm Danny 👋`}</h2>
            <hr className={`my-1 h-1 w-full rounded bg-gradient-to-r`} />
          </div>
          <div className="mb-8">
            <p>
              {`I'm a UI Designer and customer champion based in New York City. My expertise in Front-end technologies and Voice of Customer help me communicate my ideas clearly among various teams, whether they're Users, Customer Success, Engineering, and Product teams. `}
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
          />
        </div>
      </div>
    </section>
  );
}
