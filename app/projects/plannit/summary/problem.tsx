import Paragraph from "@/app/components/paragraph";
import { kalam } from "@/app/fonts";

export default function Problem() {
  return (
    <div className="flex flex-col">
      <h4 className="mb-3 font-bold text-rose-400">Problem</h4>
      <p>
        {`It can be difficult to keep track of all the details, such as which vendors are assigned to which events, contacting venues for availability, or remembering to complete specific tasks for each event, among other duties.`}
      </p>
    </div>
  );
}
