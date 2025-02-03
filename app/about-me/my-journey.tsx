import Link from "next/link";

export default function MyJourney() {
  return (
    <div className={`flex w-full flex-col items-center`}>
      <div className={`flex w-full max-w-3xl flex-col py-8`}>
        <h2 className={`mb-8`}>{`My Journey so far 🧭`}</h2>
        <div className="mb-16 flex flex-col">
          <p>{`I started off wanting to become a writer, and focused on English Literature in undergrad. My passion for writing led life-changing internships at The Nation magazine and uInterview. `}</p>
          <br />
          <p>{`At first, I thought I would learn more about the publishing industry and become a writer, but I found I was more inspired by the talented UX Designers that were helping shape the future of publishing for a digital age.`}</p>
          <br />
          <p>{`I wanted to learn more about the tech space after that, and landed a role as a Junior UX Designer in the Voice of Customer space, where I gained hands-on experience working directly with users, listening to their needs and finding solutions to collect feedback from users in websites, mobile apps, and email campaigns. `}</p>
        </div>
      </div>
    </div>
  );
}
