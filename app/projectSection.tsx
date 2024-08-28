import Project from "./project";
import { promises as fs } from "fs";
import PlannitSection from "./plannit-section";
import FreshDirectSection from "./freshdirect-redesign-section";
import GiftShopSection from "./gift-shop-section";
import Link from "next/link";

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
        <PlannitSection />
        <FreshDirectSection />
        <GiftShopSection />
      </div>
      <div className="flex w-full flex-col items-center py-16">
        <h1 className="mb-16">Previous work</h1>
        <div
          id={`experience`}
          className="flex w-full max-w-[1600px] flex-wrap items-center px-16"
        >
          {data.map((project: any) => (
            <Link key={project.id} href={project.project_url}>
              <Project
                title={project.title}
                description={project.description}
                skills={project.skills}
                image_url={project.image_url}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
