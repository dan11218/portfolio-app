import Image from "next/image";

export default function PersonaA() {
  return (
    <div className="mb-8 flex w-full flex-col border-2 border-slate-200 bg-white dark:bg-stone-800">
      <div className="flex flex-row">
        <div className="flex w-full flex-col px-8 py-24">
          <div className="mb-8 flex flex-col">
            <h4>{`Planner Patty`}</h4>
            <p className="font-light">{`Event Planner`}</p>
          </div>
          <div className="mb-8 flex flex-col">
            <h5 className="mb-4">{`Needs`}</h5>
            <ul className="list-disc">
              <li className="ml-4">
                <p>
                  {`A centralized platform to manage all aspects of event planning`}
                </p>
              </li>
              <li className="ml-4">
                <p>{`Tools to help schedule and coordinate with vendors`}</p>
              </li>
              <li className="ml-4">
                <p>{`Features to create and manage event timelines and BEOs`}</p>
              </li>
            </ul>
          </div>
          <div className="mb-8 flex flex-col">
            <h5 className="mb-4">{`Pain points`}</h5>
            <ul className="list-disc">
              <li className="ml-4">
                <p>
                  {`Difficulty in keeping track of various tasks for multiple events`}
                </p>
              </li>
              <li className="ml-4">
                <p>{`Managing and organizing vendor information`}</p>
              </li>
              <li className="ml-4">
                <p>{`Ensuring all event details are up-to-date and easily accessible`}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-full max-w-md">
          <Image
            src={`/static/plannit/avatars/persona_a.jpg`}
            fill
            alt="avatar"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
