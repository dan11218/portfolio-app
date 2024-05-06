import Image from "next/image";

export default function DesignSystem() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-4 pt-14">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <div className="mb-16 flex flex-col items-center">
          <h1>Design System</h1>
          <hr className="m-auto my-1 h-1 w-full max-w-32 rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mr-8 flex flex-col">
            <Image
              src={"/static/plannit/Typography.png"}
              width={600}
              height={600}
              alt="screenshot of typography"
              className="mb-8"
            />
            <Image
              src={"/static/plannit/Components.png"}
              width={600}
              height={600}
              alt="screenshot of typography"
              className="mb-8"
            />
          </div>
          <div className="flex flex-col">
            <Image
              src={"/static/plannit/color_scheme.png"}
              width={600}
              height={600}
              alt="screenshot of typography"
              className="mb-8"
            />
            <Image
              src={"/static/plannit/Logos.png"}
              width={600}
              height={600}
              alt="screenshot of typography"
              className="mb-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
