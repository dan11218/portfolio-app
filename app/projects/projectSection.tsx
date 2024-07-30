import Project from "./project";
import { promises as fs } from "fs";
import PlannitSection from "./plannit-section";
import FreshDirectSection from "./freshdirect-redesign-section";
import GiftShopSection from "./gift-shop-section";
import CLSection from "./cl-section";

async function getData() {
  const file = await fs.readFile(
    process.cwd() + "/app/projects/project_data.json",
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
      className="flex w-screen flex-col items-center justify-center bg-inherit px-8 pt-32"
    >
      <PlannitSection />
      <FreshDirectSection />
      <GiftShopSection />
      <CLSection />

      <div className="flex w-full flex-col items-center py-16">
        <h1 className="mb-16">Previous work</h1>
        <div
          id={`experience`}
          className="flex h-full w-full max-w-6xl flex-wrap justify-center"
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
      </div>
    </section>
  );
}
