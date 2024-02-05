import Paragraph from "@/app/app-components/paragraph";

export default function DesignSystem() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pt-14">
      <div className="flex w-full max-w-5xl flex-col items-center">
        <div>
          <h1>Design System</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-rose-400 to-orange-400 dark:bg-gray-300" />
        </div>
        <div className={"h-36 w-full bg-orange-300"}>Hello, world!</div>
      </div>
    </section>
  );
}
