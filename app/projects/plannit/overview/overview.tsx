import Background from "./background";
import Header from "@/app/components/header";

export default function Overview() {
  return (
    <section className="mb-16 flex h-fit w-screen flex-col items-center px-8">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <div className={"mb-8 flex w-fit flex-col items-center"}>
          <h1>{`Overview`}</h1>
          <hr
            className={`m-auto my-1 h-1 w-full rounded bg-gradient-to-r from-rose-400 to-orange-400`}
          />
        </div>
        <Background />
      </div>
    </section>
  );
}
