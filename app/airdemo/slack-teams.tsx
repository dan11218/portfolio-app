import Image from "next/image";

export default function SlackTeams() {
  return (
    <div className="mb-16 flex w-full max-w-7xl flex-col">
      <h2 className="mb-8 font-semibold text-indigo-700">{`Slack + Microsoft Teams integration`}</h2>
      <div
        id="sign-up-screens"
        className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3"
      >
        <div className={`flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/slack-teams/Slack customer chat revised.png"
            width={500}
            height={500}
            alt="registration"
            className="shadow-lg"
          />
        </div>
        <div className={`flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/slack-teams/Slack mockup revised.png"
            width={500}
            height={500}
            alt="registration"
            className="shadow-lg"
          />
        </div>
        <div className={`flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/slack-teams/Teams - AirDemo Channel.png"
            width={500}
            height={500}
            alt="registration"
            className="shadow-lg"
          />
        </div>
        <div className={`flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/slack-teams/Teams AirDemo Chat.png"
            width={500}
            height={500}
            alt="registration"
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
