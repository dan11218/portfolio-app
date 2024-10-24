import Image from "next/image";

export default function Highlights() {
  return (
    <section id="highlights" className={`flex h-full w-full flex-col`}>
      <div className="flex flex-col items-center py-24">
        <div className="mb-32 flex w-full max-w-7xl flex-col items-center justify-between md:flex-row ">
          <div
            className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 md:mr-16`}
          >
            <h3
              className={`mb-4 font-medium`}
            >{`Connect your sales team to prospects in minutes.`}</h3>
            <p>{`If prospects have more questions, they can easily to connect to one of your sales reps without leaving the tour. `}</p>
          </div>
          <div className="w-full">
            <Image
              src="/static/airdemo/screens/chat/Chat with representative - end.png"
              width={800}
              height={800}
              layout="responsive"
              alt="screenshot of chat window"
            />
          </div>
        </div>
        <div className="flex w-full max-w-7xl flex-col-reverse items-center justify-between md:flex-row">
          <div className="w-full md:mr-16">
            <Image
              src="/static/airdemo/screens/slack-teams/Slack customer chat revised.png"
              width={800}
              height={800}
              layout="responsive"
              alt="screenshot of slack view"
            />
          </div>
          <div className={`mb-16 flex w-full max-w-xl flex-col md:mb-0 `}>
            <h3
              className={`mb-4 font-medium`}
            >{`Continue the conversation from Slack or Teams.`}</h3>
            <p>{`Connect your Slack or Teams account to Flagship, and directly speak with your customers and prospects .`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
