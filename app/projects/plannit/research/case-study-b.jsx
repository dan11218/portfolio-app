export default function CaseStudyB() {
  return (
    <div className={`w-full max-w-md bg-stone-200 px-4 py-8 md:mr-8`}>
      <div className="mb-4">
        <h4>{`Eventbrite`}</h4>
        <h5>{`A platforms where users can sign up and search for public events.`}</h5>
      </div>
      <div>
        <p>{`Pros:`}</p>
        <ul className={`list-disc`}>
          <li className="ml-4">
            <p>{`Built-in analytics tools to track total revenue of even sales.`}</p>
          </li>
          <li className="ml-4">
            <p>{`Automatic lead response.`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
