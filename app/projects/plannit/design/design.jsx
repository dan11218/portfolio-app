import { inter } from "@/app/fonts";
import DesignSystem from "./designSystem";

export default function Design() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-8 py-24">
      <h2 className={`${inter.className} mb-24 font-semibold`}>{"Design"}</h2>
      <DesignSystem />
    </section>
  );
}
