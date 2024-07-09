export default function Requirements() {
  return (
    <div className="flex h-full w-full flex-col justify-center p-8">
      <h4 className="mb-4 font-semibold">Requirements</h4>
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
