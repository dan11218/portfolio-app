export default function Goals() {
  return (
    <div className="flex flex-col">
      <h3 className="mb-3 font-bold text-rose-400">Goals</h3>
      <ul className="list-disc px-8 text-sm">
        <li>
          <strong>{`Business: `}</strong>
          {`create a platform that is accessible for freelance event planners and vendors, tapping into a potential new market.`}
        </li>
        <li>
          <strong>{`Users: `}</strong>
          {`create a platform that is accessible for freelance event planners, tapping into a niche market.`}
        </li>
      </ul>
    </div>
  );
}
