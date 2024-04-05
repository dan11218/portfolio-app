import Paragraph from "@/app/app-components/paragraph";
import { kalam } from "@/app/fonts";

export default function Problem() {
  return (
    <div className="mb-16 flex w-full flex-col">
      <h3 className="mb-3">Problem</h3>
      <p>
        {`Solutions Engineers and Sales Representatives need a way to efficiently showcase the features of the Product suite in a realistic demo. Not having access to this demo disrupts the demo and might effect the prospect's confidence in the product.`}
      </p>
    </div>
  );
}
