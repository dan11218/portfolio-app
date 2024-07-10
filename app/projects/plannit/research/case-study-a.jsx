export default function CaseStudyA() {
  return (
    <div
      className={`flex w-full max-w-md flex-col bg-stone-200 px-4 py-8 md:mr-8`}
    >
      <div className="mb-4">
        <h4>{`Tripleseat`}</h4>
        <h5>{`Event sales management software.`}</h5>
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
      <div className={`mb-8`}>
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
