import Background from "./background";
import Header from "@/app/components/header";

export default function Overview() {
  return (
    <section className="mb-16 flex h-fit w-screen flex-col items-center px-8">
      <div className="flex w-full max-w-3xl flex-col items-center">
        <Background />
      </div>
    </section>
  );
}
