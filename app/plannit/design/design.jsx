import { inter } from "@/app/fonts";
import DesignSystem from "./designSystem";

export default function Design() {
  return (
    <section className="flex h-fit w-screen flex-col py-24">
      <div className="mb-16 flex w-fit flex-col justify-center bg-rose-400 p-6 pl-16">
        <h2
          className={`font-bold ${inter.className} text-stone-50`}
        >{`Design`}</h2>
      </div>
      <DesignSystem />
    </section>
  );
}
