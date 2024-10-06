import { inter } from "@/app/fonts";
import Image from "next/image";

export default function Problem() {
  return (
    <section id="problem" className="flex w-full flex-col">
      <div className="flex w-fit flex-col justify-center border-b-8 border-rose-400 pb-2 pl-16">
        <h2 className={`font-bold ${inter.className}`}>{`Problem`}</h2>
      </div>
      <div className={`flex w-full flex-col items-center px-8`}>
        <div className={`flex w-full max-w-4xl flex-col items-center py-16`}>
          <h4 className={`${inter.className}`}>
            {`Planning an event and finding catering, photography, or other services can be `}
            <span className="text-rose-500">{`stressful and overwhelming.`}</span>
            {` Planners struggle to with organizing tasks, `}
            <span className="text-rose-500">{`while also researching vendors and experts`}</span>
            {` to collaborate and execute successful events.`}
          </h4>
        </div>
        <div
          className={`flex w-full max-w-5xl flex-col items-center border-2 border-stone-200 bg-white px-8 py-16 text-slate-800 md:px-16`}
        >
          <h4>
            {`Many event apps are useful in helping planners stay organized, but few, if not any, offer an easy way to`}
            <span className="text-rose-500">{` find the perfect venues, and connect with other services and professionals.`}</span>
          </h4>
        </div>
        <div className="flex w-full max-w-sm flex-col items-center py-8">
          <Image
            src={"/static/plannit/assets/Arrow.svg"}
            width={30}
            height={30}
            alt="icon"
          />
        </div>
        <div
          className={`flex w-full max-w-5xl flex-col items-center border-2 border-stone-200 bg-white px-8 py-16 text-slate-800 md:px-16`}
        >
          <h4 className="mb-4 font-medium">{`As a result...`}</h4>
          <h5>
            {`1. Planners often feel overwhelmed by the process due to juggling different work flows and apps to secure the venue, catering, staff, and guest management.`}
          </h5>
          <br />
          <h5>
            {`2. Freelancers who provide services for private events lack online presence and a direct way to work with their clients.`}
          </h5>
        </div>
      </div>
      <div
        className={`relative my-16 flex w-full flex-col items-center justify-center bg-stone-800 px-8 py-24  text-slate-50`}
      >
        <h3 className={`max-w-4xl font-medium`}>
          {`How can we streamline the planning process and connect planners with vendors `}
          <span className="text-rose-400">{`under one platform?`}</span>
        </h3>
      </div>
    </section>
  );
}
