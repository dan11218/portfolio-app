export default function Problem() {
  return (
    <div className="flex h-full w-full flex-col justify-center p-8">
      <h4 className="mb-4 font-semibold">Problem</h4>
      <p>
        {`It can be `}
        <mark className="bg-yellow-100">
          <u className="decoration-yellow-500">{`difficult to keep track of all the details`}</u>
        </mark>
        {`, such as which vendors are assigned to which events, contacting venues for availability, or `}
        {`remembering to complete specific tasks for each event among other duties.`}
      </p>
    </div>
  );
}
