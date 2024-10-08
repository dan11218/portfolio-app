import { inter } from "@/app/fonts";
import Chat from "./chat";
import SlackTeams from "./slack-teams";

export default function Designs() {
  return (
    <section className="flex h-fit w-screen flex-col py-24">
      <div className="mb-16 flex w-fit flex-col justify-center border-b-8 border-indigo-400 pb-2 pl-16">
        <h2 className={`font-bold ${inter.className}`}>{`Designs`}</h2>
      </div>
      <div className="flex w-full flex-col items-center px-8">
        <Chat />
        <SlackTeams />
      </div>
    </section>
  );
}
