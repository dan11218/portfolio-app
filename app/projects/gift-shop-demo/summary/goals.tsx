export default function Goals() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-3 font-bold text-cyan-500">{`Goals`}</h3>
      <ul className="list-disc px-2 text-sm">
        <li>
          <strong>{`Business: `}</strong>
          {`Design an e-commerce experience that Sales team and Solutions Engineers to simulate the Feedback Button and targeted campaigns.`}
        </li>
        <li>
          <strong>{`Users: `}</strong>
          {`create a gift shop where users can shop for usabilla swag. Users can leave passive feedback using the Feedback Button, or receive targeted surveys to collect feedback during the user journey.`}
        </li>
      </ul>
    </div>
  );
}
