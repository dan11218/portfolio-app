import Project from "./project";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/button";

async function getData() {
  const file = await fs.readFile(
    process.cwd() + "/app/project_data.json",
    "utf8",
  );
  const data = JSON.parse(file);
  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function ProjectSection() {
  const data = await getData();
  return (
    <section
      id={`projects`}
      className="flex w-screen flex-col items-center bg-inherit pt-32"
    >
      <div
        id={`highlight-1`}
        className="min-w-md flex h-[700px] w-full flex-col-reverse items-center justify-center overflow-hidden bg-rose-200 px-8 py-8 text-slate-700 sm:flex-row"
      >
        <div className={`flex flex-col justify-center`}>
          <div className="px-16 py-8">
            <h1 className={`mb-6 font-[500]`}>{"Plannit"}</h1>
            <p className={`mb-12`}>
              {`Collaborate with your team to organize events, create and manage tasks, and connect with a wide network of clients and vendors to plan the perfect event.`}
            </p>
            <Link
              href={`/projects/plannit`}
              className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50`}
            >
              {"Learn more"}
            </Link>
          </div>
        </div>
        <Image
          src={`/static/plannit/mockups/phone_no_events+calendar.png`}
          width={700}
          height={700}
          alt={`device mockups`}
        />
      </div>
      <div
        id={`highlight-2`}
        className="min-w-md flex h-[700px] w-full flex-col-reverse items-center justify-center overflow-hidden bg-cyan-500 py-8 text-white sm:flex-row-reverse"
      >
        <div className={`flex flex-col justify-center`}>
          <div className="px-16 py-8">
            <h1 className={`mb-6 font-[500]`}>{"Usabilla Feedback"}</h1>
            <p className={`mb-12`}>
              {`A gift shop built in React and integrated with SurveyMonkey's Feedback Button to analyze the customer journey.`}
            </p>
            <Link
              href={`/projects/gift-shop-demo`}
              className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-50 hover:bg-slate-50 hover:text-slate-700`}
            >
              {"Learn more"}
            </Link>
          </div>
        </div>
        <Image
          src={`/static/gift-shop-demo/desktop.png`}
          width={500}
          height={500}
          alt={`device mockups`}
        />
      </div>
      <div
        id={`highlight-3`}
        className="min-w-md mb-16 flex h-[700px] w-full flex-col-reverse items-center justify-center overflow-hidden bg-stone-700 py-32 text-slate-50 sm:flex-row"
      >
        <div className={`flex w-full flex-col justify-center`}>
          <div className="px-16 py-8">
            <h1 className={`mb-6 font-[500]`}>
              {"Christian Lange Photography"}
            </h1>
            <p className={`mb-12`}>
              {`A portfolio website for commercial photographer agency. Built with HTML, CSS, Javascript, and jQuery.`}
            </p>
            <Link
              href={`https://christianlange.com`}
              className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-50 hover:bg-slate-50 hover:text-slate-700`}
            >
              {"Learn more"}
            </Link>
          </div>
        </div>
        <Image
          src={`/static/cl-photography/cl mockup.png`}
          width={700}
          height={700}
          alt={`device mockups`}
        />
      </div>
      <h1 className="underline">Previous work</h1>
      <div
        id={`experience`}
        className="flex h-full w-full flex-wrap justify-center py-24"
      >
        {data.map((project: any) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            skills={project.skills}
            image_url={project.image_url}
            project_url={project.project_url}
            prototype_url={project.prototype_url}
          />
        ))}
      </div>
    </section>
  );
}
