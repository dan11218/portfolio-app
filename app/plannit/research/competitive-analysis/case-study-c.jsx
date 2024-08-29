export default function CaseStudyC() {
  return (
    <div
      className={`mb-8 flex w-full max-w-[350px] flex-col border border-slate-300 bg-white px-4 py-8 md:mb-0 md:mr-8 dark:bg-stone-700`}
    >
      <div className="mb-4">
        <h4>{`Eventzilla`}</h4>
        <p
          className={`italic`}
        >{`Event Registration and marketing platform.`}</p>
      </div>
      <div className={`mb-4`}>
        <p>{`Pros:`}</p>
        <ul className={`list-disc`}>
          <li className="ml-4">
            <p>{`Seamless event registration and attendee management software`}</p>
          </li>
          <li className="ml-4">
            <p>{`Contactless check-in for guests.`}</p>
          </li>
        </ul>
      </div>
      <div className={``}>
        <p>{`Cons:`}</p>
        <ul className={`list-disc`}>
          <li className="ml-4">
            <p>{`It's marketed towards conference and concert events.`}</p>
          </li>
          <li className="ml-4">
            <p>{`Contactless check-in for guests.`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
