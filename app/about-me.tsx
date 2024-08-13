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
              {`I'm a Product Designer and customer advocate based in New York City. With expertise in Front-end technologies and Voice of Customer, I excel at clearly communicating ideas across diverse teams, including Users, Customer Success, Engineering, and Product.`}
            </p>
            <br />
            <p>
              {`Outside of work, you'll find me experimenting with new recipes, diving into fiction or poetry, gaming and streaming, or exploring NYC's culinary scene with my partner. In my spare time, I study game design and contribute to the development of an indie-horror game using Godot.`}
            </p>
          </div>
          <Button
            url={
              "https://drive.google.com/file/d/1zTV_s-LzmS49zfU0djrCXV4lLI3CQBv4/view?usp=sharing"
            }
            text={"Download CV"}
          />
        </div>
      </div>
    </section>
  );
}
