export default function Problem() {
  return (
    <div className="flex h-full w-full flex-col justify-center p-8">
      <h4 className="mb-4 text-rose-400">Problem</h4>
      <p>
        {`It can be `}
        <mark className="bg-yellow-100">
          <u className="decoration-yellow-500">{`difficult to keep track of all the details`}</u>
        </mark>
        {`, such as which vendors are assigned to which events, contacting venues for availability, or `}
        <mark className="bg-yellow-100">
          <u className="decoration-yellow-500">{`remembering to complete specific tasks for each event`}</u>
        </mark>
        {`, among other duties.`}
      </p>
    </div>
  );
}
