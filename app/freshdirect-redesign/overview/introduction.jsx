import { inter } from "@/app/fonts";
import ProjectDetails from "./project-details";

export default function Introduction() {
  return (
    <div className={`flex w-full max-w-6xl flex-col items-center md:flex-row`}>
      <h3 className={`${inter.className} mb-16 md:mr-16`}>
        {`We've made it`}
        <span className="font-bold text-[#558537] dark:text-[#639B40]">{` easier than ever `}</span>
        {`to search your favorite items and filter your searches. And checkout is simpler thanks a redesigned flow with the User in mind.`}
      </h3>
      <ProjectDetails />
    </div>
  );
}
