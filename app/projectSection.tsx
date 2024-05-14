import Header from "./components/header";
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
      id={"projects"}
      className="flex w-screen flex-col items-center px-3 py-8"
    >
      <Header
        largeFont={true}
        color={`bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300`}
        title={`Projects`}
      />
      <div className="flex w-full flex-wrap content-start justify-center">
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
