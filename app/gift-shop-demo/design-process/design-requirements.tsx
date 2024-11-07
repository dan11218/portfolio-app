export default function DesignRequirements() {
  return (
    <div className="mb-16 flex w-full max-w-xl flex-col">
      <h3 className="mb-3 font-bold text-cyan-500">Design Requirements</h3>
      <ul className="list-disc px-6">
        <li>{`Implement the Feedback Button`}</li>
        <li>
          {`Trigger a survey when the user successfully completes the checkout
          flow`}
        </li>
        <li>
          {`Trigger a survey when a user experiences an error during the checkout
          flow`}
        </li>
        <li>
          {`Utilize user personas to design the checkout flow and trigger surveys
          based on happy/sad paths`}
        </li>
      </ul>
    </div>
  );
}
