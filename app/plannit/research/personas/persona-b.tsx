import Image from "next/image";

export default function PersonaB() {
  return (
    <div className="mb-8 flex w-full flex-col bg-amber-100">
      <div className="flex flex-row">
        <div className="flex w-full flex-col px-8 py-24">
          <div className="mb-8 flex flex-col">
            <h4>{`Coordinator Chris`}</h4>
            <p className="font-light">{`Event Coordinator at Elliot Hotel`}</p>
          </div>
          <div className="mb-8 flex flex-col">
            <h5 className="mb-4">{`Needs`}</h5>
            <ul className="list-disc">
              <li className="ml-4">
                <p>
                  {`A streamlined system to track event bookings and availability`}
                </p>
              </li>
              <li className="ml-4">
                <p>{`Tools to facilitate communication and coordination with clients, vendors, and event planners`}</p>
              </li>
              <li className="ml-4">
                <p>{`Features to manage and organize event staff schedules and tasks`}</p>
              </li>
            </ul>
          </div>
          <div className="mb-8 flex flex-col">
            <h5 className="mb-4">{`Pain points`}</h5>
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
        <div className="relative w-full max-w-md">
          <Image
            src={`/static/plannit/avatars/persona_b.jpg`}
            fill
            alt="avatar"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
