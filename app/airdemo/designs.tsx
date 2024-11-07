import { inter } from "@/app/fonts";
import Image from "next/image";

export default function Designs() {
  return (
    <section className="flex h-fit w-screen flex-col py-24">
      <div className="mb-16 flex w-fit flex-col justify-center border-b-8 border-indigo-400 pb-2 pl-16">
        <h2 className={`font-bold ${inter.className}`}>{`Designs`}</h2>
      </div>
      <div className="flex w-full max-w-[1600px] flex-col items-center px-8">
        <div id="new-chat" className="mb-16 flex w-full flex-col">
          <h2 className="mb-8 font-semibold text-indigo-700">{`New chat`}</h2>
          <div className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/chat/Chat with representative - intro.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Chat with representative"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/chat/Chat with representative - filled in form.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Chat with representative - filled in form"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/chat/Chat with representative - response.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Chat with representative - response"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/chat/Chat with representative - end.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Chat with representative - end"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
        <div id="chat-settings" className="mb-16 flex w-full flex-col">
          <h2 className="mb-8 font-semibold text-indigo-700">{`Chat Settings`}</h2>
          <div className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/chat-settings/Mockup - Settings - Chat - No rules.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Mockup - Settings - Chat - No rules"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/chat-settings/Mockup - Settings - Chat - Add new rule.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Mockup - Settings - Chat - Add new rule"
                className="shadow-lg"
              />
            </div>

            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/chat-settings/Mockup - Settings - Chat - With rules.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Mockup - Settings - Chat - With rules"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
        <div id="slack-teams" className="mb-16 flex w-full flex-col">
          <h2 className="mb-8 font-semibold text-indigo-700">{`Slack + Microsoft Teams Integration`}</h2>
          <div className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/slack-teams/Slack customer chat revised.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Slack customer chat revised"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/slack-teams/Slack mockup revised.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Slack mockup revised"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/slack-teams/Teams - AirDemo Channel.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Teams - AirDemo Channel"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/slack-teams/Teams AirDemo Chat.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Teams AirDemo Chat"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
        <div id="integration-settings" className="mb-16 flex w-full flex-col">
          <h2 className="mb-8 font-semibold text-indigo-700">{`Integration Settings`}</h2>
          <div
            id="sign-up-screens"
            className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
          >
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/integration-settings/Mockup - AI - Training (revised).png"
                width={500}
                height={500}
                layout="responsive"
                alt="Mockup - AI - Training (revised)"
                className="shadow-lg"
              />
            </div>

            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/integration-settings/Mockup - AI - Gong team.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Mockup - AI - Gong team"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/integration-settings/Mockup - AI - Gong calls.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Mockup - AI - Gong calls"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
        <div id="button-animation" className="mb-16 flex w-full flex-col">
          <h2 className="mb-8 font-semibold text-indigo-700">{`Play Button Animation Keyframes`}</h2>
          <div
            id="sign-up-screens"
            className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
          >
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/pulse-animation/Play - pulse animation frame 1.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Play - pulse animation frame 1"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/pulse-animation/Play - pulse animation frame 2.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Play - pulse animation frame 2"
                className="shadow-lg"
              />
            </div>
            <div className={`flex w-full flex-col`}>
              <Image
                src="/static/airdemo/screens/pulse-animation/Play - pulse animation frame 3.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Play - pulse animation frame 3"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
