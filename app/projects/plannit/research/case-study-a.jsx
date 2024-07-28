export default function CaseStudyA() {
  return (
    <div
      className={`mb-8 flex w-full max-w-md flex-col border border-slate-300 bg-slate-100 px-4 py-8 md:mb-0 md:mr-8 dark:bg-stone-700`}
    >
      <div className="mb-4">
        <h4 className={`font-semibold`}>{`Tripleseat`}</h4>
        <p className={`mb-8 italic`}>{`Event sales management software.`}</p>
      </div>
      <div className={`mb-8`}>
        <p>{`Pros:`}</p>
        <ul className={`list-disc`}>
          <li className="ml-4">
            <p>{`Built-in analytics tools to track total revenue of even sales.`}</p>
          </li>
          <li className="ml-4">
            <p>{`Automatic lead response.`}</p>
          </li>
          <li className="ml-4">
            <p>{`Mobile app available to manage events.`}</p>
          </li>
        </ul>
      </div>
      <div className={``}>
        <p>{`Cons:`}</p>
        <ul className={`list-disc`}>
          <li className="ml-4">
            <p>{`Geared towards Hotels and Restaurant spaces.`}</p>
          </li>
          <li className="ml-4">
            <p>{`UI feels corporate, as if designed for large enterprises only.`}</p>
          </li>
          <li className="ml-4">
            <p>{`No entry-level plans for freelancers and small businesses.`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
