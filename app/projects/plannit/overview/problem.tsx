import Paragraph from "@/app/components/paragraph";
import { kalam } from "@/app/fonts";

export default function Problem() {
  return (
    <div className="mb-16 flex flex-col">
      <div className="flex w-full flex-col">
        <h3 className="mb-3 font-bold text-rose-400">Problem</h3>
        <p>
          {`Planners work with a vast network of clients, vendors, and venues. It can be difficult to keep track of all the details, such as which vendors are assigned to which events, contacting venues for availability, or remembering to complete specific tasks for each event, among other duties.`}
        </p>
      </div>
      <ul className="mt-16 w-fit max-w-2xl list-inside list-disc px-14">
        <li className={`m-2 inline-flex text-xl ${kalam.className}`}>
          {`Planners need a way to view upcoming events and tasks at a quick
          glance.`}
        </li>
        <li className={`text-xl ${kalam.className} m-2 inline-flex`}>
          {`There are a lot of different vendors that planners work with, but no
          directory to easily search for them.`}
        </li>
      </ul>
    </div>
  );
}
