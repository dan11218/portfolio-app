export default function CaseStudyB() {
  return (
    <div
      className={`mb-8 w-full max-w-md bg-stone-200 px-4 py-8 md:mb-0 md:mr-8 dark:bg-stone-700`}
    >
      <div className="mb-4">
        <h4>{`Eventbrite`}</h4>
        <h6>{`A platforms where users can sign up and search for public events.`}</h6>
      </div>
      <div className={`mb-8`}>
        <p>{`Pros:`}</p>
        <ul className={`list-disc`}>
          <li className="ml-4">
            <p>{`Anyone can sign up and create events.`}</p>
          </li>
          <li className="ml-4">
            <p>{`Allows users to charge and sell tickets through the app.`}</p>
          </li>
          <li className="ml-4">
            <p>{`Different tiers and features available.`}</p>
          </li>
        </ul>
      </div>
      <div className={`mb-8`}>
        <p>{`Cons:`}</p>
        <ul className={`list-disc`}>
          <li className="ml-4">
            <p>{`No section for adding vendor details.`}</p>
          </li>
          <li className="ml-4">
            <p>{`No contacts integration.`}</p>
          </li>
          <li className="ml-4">
            <p>{`Unable to pull up venue details.`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
