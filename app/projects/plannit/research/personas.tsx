export default function Personas() {
  return (
    <section className={`flex w-full flex-col items-center`}>
      <div className="mb-8 flex w-full max-w-3xl flex-col">
        <h3 className="mb-4 font-semibold text-rose-500">{`Personas`}</h3>
        <p>
          {`User personas were created to better understand the different types of users who would benefit from Plannit. There are two main stakeholders in this case: 1) the Event Planner, 2) the event space coordinator, and 3) the Vendor. These personas represent the key characteristics, needs, and pain points of our target audience, allowing us to design features that cater to their specific requirements:`}
        </p>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full max-w-4xl flex-col">
          <h4 className="mb-4 font-semibold text-rose-500">{`Planner Patty`}</h4>
          <div className="mb-8">
            <h5 className="mb-4 font-semibold text-rose-500">{`Needs`}</h5>
            <ul className="list-disc">
              <li>
                <p>
                  {`A centralized platform to manage all aspects of event planning`}
                </p>
              </li>
              <li>
                <p>{`Tools to help schedule and coordinate with vendors`}</p>
              </li>
              <li>
                <p>{`Features to create and manage event timelines and BEOs`}</p>
              </li>
            </ul>
          </div>
          <h5 className="mb-4 font-semibold text-rose-500">{`Pain points`}</h5>
          <ul className="list-disc">
            <li>
              <p>
                {`Balancing multiple events and ensuring that each one receives adequate attention`}
              </p>
            </li>
            <li>
              <p>{`Coordinating schedules and availability with clients, vendors, and staff`}</p>
            </li>
            <li>
              <p>{`Managing last-minute changes and requests efficiently`}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
