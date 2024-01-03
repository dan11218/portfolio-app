import { kalam } from "@/app/fonts";

export default function Overview() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] py-8">
      <h1 className="mb-10">Overview</h1>
      <div className="flex w-full max-w-3xl flex-col">
        <div className="mb-8 flex flex-col">
          <h3 className="mb-3">Problem</h3>
          <p>
            Planners work with a vast network of clients, vendors, and venues.
            It can be difficult to keep track of all the details, such as which
            vendors are assigned to which events, contacting venues for
            availability, or remembering to complete specific tasks for each
            event, among other duties.
          </p>
        </div>
        <div className="mb-8 flex flex-col">
          <h3 className="mb-3">Solution</h3>
          <p>
            To solve this, I designed Plannit, a mobile platform that allows
            event planners to stay up-to-date on upcoming events, keep track of
            contacts, such as clients, vendors, and venues, and manage tasks for
            each event.
          </p>
        </div>
        <div className="mb-8 flex flex-col">
          <h4 className="mb-3">My Role</h4>
          <p>UX Design Lead</p>
        </div>
      </div>
      <div className="flex flex-col"></div>
    </section>
  );
}
