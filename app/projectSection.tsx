import Project from "./project";
import { promises as fs } from "fs";
import Image from "next/image";
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

  // Debug: attempting to consume the app's own API below (ERR_INVALID_URL)

  // try {
  //   const res = await fetch("/api/projects", {
  //     headers: {
  //       Accept: "application/json",
  //       method: "GET",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }
}

export default async function ProjectSection() {
  const data = await getData();
  return (
    <section
      id={`projects`}
      className="flex w-screen flex-col items-center bg-inherit px-8 pt-32"
    >
      <div
        id={`highlight-1`}
        className="min-w-md mb-16 flex h-full w-full max-w-[1400px] flex-col-reverse items-center justify-center overflow-hidden rounded-2xl bg-red-200 py-8 sm:flex-row"
      >
        <div className={`flex flex-col justify-center`}>
          <div className="px-16 py-8">
            <h1 className={`mb-6 font-[500]`}>{"Plannit"}</h1>
            <p className={`mb-12`}>
              {`Collaborate with your team to organize events, create and manage tasks, and connect with a wide network of clients and vendors to plan the perfect event.`}
            </p>
            <Button url={`/projects/plannit`} text={`Learn more`} />
          </div>
        </div>
        <Image
          src={`/static/mockups/phone_no_events+calendar.png`}
          width={500}
          height={500}
          alt={`device mockups`}
          className={`h-full w-full`}
        />
      </div>
      <div
        id={`highlight-2`}
        className="min-w-md mb-16 flex h-full w-full max-w-[1400px] flex-col-reverse items-center justify-center overflow-hidden rounded-2xl bg-cyan-500 py-8 text-white sm:flex-row-reverse"
      >
        <div className={`flex flex-col justify-center`}>
          <div className="px-16 py-8">
            <h1 className={`mb-6 font-[500]`}>{"Usabilla Feedback"}</h1>
            <p className={`mb-12`}>
              {`A gift shop built in React and integrated with SurveyMonkey's Feedback Button to analyze the customer journey.`}
            </p>
            <Button url={`/projects/gift-shop-demo`} text={`Learn more`} />
          </div>
        </div>
        <Image
          src={`/static/gift-shop-demo/desktop.png`}
          width={500}
          height={500}
          alt={`device mockups`}
          className={`h-full w-full`}
        />
      </div>
      <div
        id={`highlight-3`}
        className="min-w-md mb-16 flex h-full w-full max-w-[1400px] flex-col-reverse items-center justify-center overflow-hidden rounded-2xl bg-stone-700 py-24 text-slate-50 sm:flex-row"
      >
        <div className={`flex w-full flex-col justify-center`}>
          <div className="px-16 py-8">
            <h1 className={`mb-6 font-[500]`}>
              {"Christian Lange Photography"}
            </h1>
            <p className={`mb-12`}>
              {`A portfolio website for commercial photographer agency. Built with HTML, CSS, Javascript, and jQuery.`}
            </p>
            <Button url={`/projects/plannit`} text={`Learn more`} />
          </div>
        </div>
        <Image
          src={`/static/cl-photography/cl mockup.png`}
          width={500}
          height={500}
          alt={`device mockups`}
          className={`h-full w-full`}
        />
      </div>
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
