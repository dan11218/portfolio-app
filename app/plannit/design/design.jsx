import { inter } from "@/app/fonts";
import DesignSystem from "./designSystem";

export default function Design() {
  return (
    <section className="flex h-fit w-screen flex-col py-24">
      <div className="mb-16 flex w-fit flex-col justify-center border-b-8 border-rose-400 pb-2 pl-16">
        <h2 className={`font-bold ${inter.className}`}>{`Design`}</h2>
      </div>
      <DesignSystem />
    </section>
  );
}
