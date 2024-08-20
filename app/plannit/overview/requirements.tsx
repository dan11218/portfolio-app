export default function Requirements() {
  return (
    <div className="mb-16 flex h-full w-full flex-col justify-center">
      <h4 className="mb-4 font-semibold text-rose-500">{`Requirements`}</h4>
      <ul className="list-disc px-2 text-sm">
        <li className="">
          <p>
            <strong>{`Business: `}</strong>
            {`create a platform that is accessible for freelance event planners and vendors, tapping into a potential new market.`}
          </p>
        </li>
        <li>
          <p>
            <strong>{`Users: `}</strong>
            {`create a platform that is accessible for freelance event planners, tapping into a niche market.`}
          </p>
        </li>
      </ul>
    </div>
  );
}
