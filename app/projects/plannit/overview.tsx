import Image from "next/image";

export default function Overview() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pb-10 pt-14">
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
            I designed Plannit, a mobile platform that allows event planners to
            stay up-to-date on upcoming events, keep track of contacts, such as
            clients, vendors, and venues, and manage tasks for each event.
          </p>
        </div>
        <ul className="justify-left flex flex-wrap bg-amber-50 p-4">
          <li className="mb-2 mr-6">
            <h4 className="mb-1 font-medium">My Role</h4>
            <p>UX Design Lead</p>
          </li>
          <li className="mb-2 mr-6">
            <h4 className="mb-1 font-medium">Timeline</h4>
            <p>September 2023 – November 2023</p>
          </li>
          <li className="mb-2 mr-6">
            <h4 className="mb-1 font-medium">Project Type</h4>
            <p>Mobile design exercise</p>
          </li>
          <li className="mb-2 mr-6">
            <h4 className="mb-1 font-medium">Tools</h4>
            <p>Figma</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col"></div>
    </section>
  );
}
