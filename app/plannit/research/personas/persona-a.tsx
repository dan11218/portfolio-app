import Image from "next/image";

export default function PersonaA() {
  return (
    <div className="mb-8 flex w-full flex-col dark:bg-stone-700">
      <div className="flex flex-row">
        <div className="flex w-full flex-col px-16 py-24">
          <h4 className="mb-4 font-semibold">{`Planner Patty`}</h4>
          <div className="mb-8 flex flex-col">
            <h5 className="mb-4 font-semibold">{`Needs`}</h5>
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
            <h5 className="mb-4 font-semibold">{`Pain points`}</h5>
            <ul className="list-disc">
              <li className="ml-4">
                <p>
                  {`Balancing multiple events and ensuring that each one receives adequate attention`}
                </p>
              </li>
              <li className="ml-4">
                <p>{`Coordinating schedules and availability with clients, vendors, and staff`}</p>
              </li>
              <li className="ml-4">
                <p>{`Managing last-minute changes and requests efficiently`}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-full">
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
