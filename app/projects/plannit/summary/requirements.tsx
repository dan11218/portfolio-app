export default function Requirements() {
  return (
    <div className="mb-8 flex h-full w-full max-w-[350px] flex-col justify-center sm:mb-0">
      <h4 className="mb-4 font-semibold text-rose-500">{`Requirements`}</h4>
      <ul className="list-disc px-2 text-sm">
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
