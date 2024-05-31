import Project from "./project";
import { promises as fs } from "fs";

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
      className="flex w-screen flex-col items-center bg-inherit px-8"
    >
      {/* <div
        id={`highlight-1`}
        className="flex h-full w-full flex-row content-start justify-center"
      >
        {`Image`}
        <div
          className={`flex w-full max-w-xl flex-col justify-center bg-stone-200 px-16 py-8 text-stone-700 shadow-[18px_18px_0px_0px_rgba(0,0,0)] sm:mb-0`}
        >
          <h2 className={`mb-6 leading-none md:leading-normal`}>{"Plannit"}</h2>
          <p className={`mb-12 font-light`}>
            {`An event management tool that allows users to quickly view upcoming events, manage tasks, and connect with a wide network of clients and vendors. Designed and developed a new dashboard interface, improving usability and customer satisfaction.`}
          </p>
        </div>
      </div> */}
      <div
        id={`experience`}
        className="flex w-full flex-wrap justify-center md:justify-start"
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
