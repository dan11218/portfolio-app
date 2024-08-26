import SignUp from "./sign-up";
import NewEvent from "./new-event";
import { inter } from "@/app/fonts";

export default function FinalDesign() {
  return (
    <section className="flex h-fit w-screen flex-col py-24">
      <div className="mb-16 flex w-fit flex-col justify-center border-b-8 border-rose-400 pb-2 pl-16">
        <h2 className={`font-bold ${inter.className}`}>{`Final Designs`}</h2>
      </div>
      <div className="flex w-full flex-col items-center px-8">
        <SignUp />
        <NewEvent />
      </div>
    </section>
  );
}
