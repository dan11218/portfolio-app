import Image from "next/image";

export default function DesignSystem() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-24 flex w-full max-w-6xl flex-col">
        <h3 className="mb-3 font-bold text-rose-500">Design System</h3>
        <p>{`Design stuff here about the design system blah blah blah`}</p>
      </div>
      <div className="flex w-full max-w-6xl flex-col">
        <div className="mb-8 flex h-fit w-full">
          <Image
            src={"/static/plannit/design-system/Typography.png"}
            width={600}
            height={600}
            layout="responsive"
            alt="screenshot of typography"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="mb-8 flex h-fit w-full">
          <Image
            src={"/static/plannit/design-system/Components.png"}
            width={600}
            height={600}
            layout="responsive"
            alt="screenshot of components"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="mb-8 flex h-fit w-full">
          <Image
            src={"/static/plannit/design-system/color_scheme.png"}
            width={600}
            height={600}
            layout="responsive"
            alt="screenshot of typography"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="mb-8 flex h-fit w-full">
          <Image
            src={"/static/plannit/design-system/Logos.png"}
            width={600}
            height={600}
            layout="responsive"
            alt="screenshot of typography"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
