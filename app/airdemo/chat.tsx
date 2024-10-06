import Image from "next/image";

export default function Chat() {
  return (
    <div className="mb-16 flex w-full max-w-7xl flex-col">
      <h2 className="mb-8 font-semibold text-indigo-700">{`Create a new event`}</h2>
      <div
        id="chat-screens"
        className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3"
      >
        <div className={`mb-8 mr-8 flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/chat/Chat with representative - intro.png"
            width={500}
            height={500}
            layout="responsive"
            alt="new event form"
            className="shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/chat/Chat with representative - filled in form.png"
            width={500}
            height={500}
            layout="responsive"
            alt="list of vendors (filtered)"
            className="shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/chat/Chat with representative - response.png"
            width={500}
            height={500}
            layout="responsive"
            alt="venue page"
            className="shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full flex-col`}>
          <Image
            src="/static/airdemo/screens/chat/Chat with representative - end.png"
            width={500}
            height={500}
            layout="responsive"
            alt="new event form with vendor selected"
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
