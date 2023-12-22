import Project from "./project";
import { promises as fs } from "fs";

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
    <div className="flex w-screen flex-col items-center px-[20px]">
      <div className="flex w-full max-w-[90rem] flex-wrap content-start justify-center py-[20px]">
        {data.map((project: any) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            skills={project.skills}
            image_url={project.image_url}
            case_study_url={project.case_study_url}
            prototype_url={project.prototype_url}
          />
        ))}
      </div>
    </div>
  );
}
