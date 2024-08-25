import { inter } from "@/app/fonts";

export default function Problem() {
  return (
    <section className="flex w-full flex-col dark:bg-stone-800 dark:bg-none">
      <div className="flex w-fit flex-col justify-center bg-rose-400 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Problem`}</h2>
      </div>
      <div className={`flex w-full flex-col items-center`}>
        <div className={`flex w-full max-w-4xl flex-col items-center py-24`}>
          <h4 className={`${inter.className}`}>
            {`Planning an event and finding catering, photography, or other services can be `}
            <span className="text-rose-500">{`stressful and overwhelming.`}</span>
            {` Planners struggle to with organizing tasks, `}
            <span className="text-rose-500">{`while also researching vendors and experts`}</span>
            {` to collaborate and execute successful events.`}
          </h4>
        </div>
        <div className="mb-8 flex w-full max-w-3xl flex-col justify-center">
          <h5 className="mb-4 font-medium">{`What is the current flow when planning an event?`}</h5>
          <p>
            {`1. Gathering details for the event, and answering questions such as: `}
            <mark className="bg-yellow-100 dark:bg-yellow-500">{`how many guests do I want to invite? What kind of venue do I want to host my event in? What are food and beverage needs?`}</mark>
          </p>
          <br />
          <p>
            {`2. Researching which venue is the best fit for the event, and reaching out to Sales teams to get`}
            <mark className="bg-yellow-100 dark:bg-yellow-500">{` pricing and other information.`}</mark>
          </p>
          <br />
          <p>
            {`3. For events that require catering, and in cases where in-house catering is not an option, `}
            <mark className="bg-yellow-100 dark:bg-yellow-500">{`then third-party catering is needed.`}</mark>
          </p>
          <br />
          <p>
            {`4. To make memorable events, other third-party vendors like `}
            <mark className="bg-yellow-100 dark:bg-yellow-500">
              {`photographers, performers, or musicians`}
            </mark>
            {`, are needed and require additional searching.`}
          </p>
        </div>
        <div className={`flex w-full max-w-4xl flex-col items-center py-24`}>
          <h4 className={`${inter.className}`}>
            {`Many event apps are useful in helping planners stay organized, but few, if not any, offer an easy way to`}
            <span className="text-rose-500">{` find the perfect venues, and connect with other services and professionals.`}</span>
          </h4>
        </div>
        <div className="mb-8 flex w-full max-w-3xl flex-col justify-center">
          <h5 className="mb-4 font-medium">{`As a result...`}</h5>
          <p>
            {`1. Planners often feel overwhelmed by the process due to juggling different work flows and apps to secure the venue, catering, staff, and guest management.`}
          </p>
          <br />
          <p>
            {`2. Freelancers who provide services for private events lack online presence and a direct way to work with their clients.`}
          </p>
        </div>
        <div
          className={`relative flex w-full max-w-4xl flex-col items-center py-24`}
        >
          <h3 className={`${inter.className}`}>
            {`How can we streamline the planning process and connect planners with vendors `}
            <span className="text-rose-500">{`under one platform?`}</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
