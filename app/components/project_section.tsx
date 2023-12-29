import Project from "./project";
import { promises as fs } from "fs";
import { kalam } from "../fonts";

// Get project data

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
  <section className="flex w-screen flex-col items-center px-3">
      <h1 className={`m-6 ${kalam.className}`}>Projects</h1>
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
