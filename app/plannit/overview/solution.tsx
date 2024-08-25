import { inter } from "@/app/fonts";
import Highlights from "./highlights";
import ProjectDetails from "./projectDetails";
import MyRole from "./my-role";

export default function Solution() {
  return (
    <section className="flex w-full flex-col dark:bg-stone-800 dark:bg-none">
      <div className="flex w-fit flex-col justify-center bg-rose-400 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Solution`}</h2>
      </div>
      <div className={`flex w-full flex-col items-center`}>
        <div className={`flex w-full max-w-4xl flex-col items-center py-24`}>
          <h4 className={`${inter.className} mb-24`}>
            {`We designed `} <span className="text-rose-500">{`Plannit`}</span>
            {`, a mobile platform that allows event planners to stay up-to-date on upcoming events, keep track of contacts, such as clients, vendors, and venues, and manage tasks for each event.`}
          </h4>
          <ProjectDetails />
          <MyRole />
          <Highlights />
        </div>
      </div>
    </section>
  );
}
