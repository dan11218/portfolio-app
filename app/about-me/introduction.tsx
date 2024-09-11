import Image from "next/image";

export default function Introduction() {
  return (
    <div
      className={`mb-16 flex w-full max-w-5xl flex-col items-center justify-center md:flex-row`}
    >
      <Image
        src={"/static/profiles/profile.png"}
        width={300}
        height={300}
        alt="profile picture"
        className={`mb-16 bg-stone-400 shadow-[18px_18px_0px_0px_rgba(0,0,0)] md:mb-0 md:mr-16`}
      />
      <div className="flex w-full max-w-md flex-col border-l-2 border-solid border-slate-300 pl-[25px]">
        <div className={"mb-8 flex w-fit flex-col items-center"}>
          <h1>{`Hi, I'm Danny 👋`}</h1>
          <hr className={`my-1 h-1 w-full rounded bg-gradient-to-r`} />
        </div>
        <div className="mb-8">
          <p>
            {`I'm a Product Designer and customer advocate based in New York City. With expertise in Front-end technologies and VoC (Voice of the Customer), I excel at clearly communicating ideas across diverse teams, including Users, Customer Success, Engineering, and Product.`}
          </p>
          <br />
          <p>
            {`Outside of work, I like experimenting with new cooking recipes, diving into fiction or poetry, gaming and streaming, or exploring NYC's culinary scene with friends and family.`}
          </p>
        </div>
        <a
          href={`https://drive.google.com/file/d/1XFg0UVYha7jFosUSwMQo7p6H9DTKpYeA/view?usp=sharing`}
          target="_blank"
          className={`w-fit border-2 border-current bg-slate-50 p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:bg-stone-900  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
        >
          {`Resume`}
        </a>
      </div>
    </div>
  );
}
