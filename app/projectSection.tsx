import Project from "./project";
import { promises as fs } from "fs";
import PlannitSection from "./plannit-section";
import FreshDirectSection from "./freshdirect-redesign-section";
import GiftShopSection from "./gift-shop-section";

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
    <section id={`projects`} className="flex w-screen flex-col">
      <div className="flex w-full flex-col">
        {/* <PlannitSection />
        <FreshDirectSection />
        <GiftShopSection /> */}
      </div>
      <div
        id={`experience`}
        className="flex w-full flex-col items-center px-4 py-24"
      >
        <div className="max-w-[1600px] space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {data.map((project: any) => (
            <Project
              key={project.id}
              url={project.project_url}
              title={project.title}
              description={project.description}
              skills={project.skills}
              image_url={project.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
