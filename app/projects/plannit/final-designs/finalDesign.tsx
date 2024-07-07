import Button from "@/app/components/button";
import Image from "next/image";
import SignUp from "./sign-up";
import NewEvent from "./new-event";

export default function FinalDesign() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-16 py-24">
      <div className="flex w-full flex-col items-center">
        <div>
          <h3 className="mb-3 font-bold text-rose-400">Final Designs</h3>
        </div>
        <SignUp />
        <NewEvent />
      </div>
    </section>
  );
}
