export default function Problem() {
  return (
    <div className="flex h-full w-full max-w-3xl flex-col p-8">
      <h3 className="mb-4 font-semibold text-[#6F9848] dark:text-slate-50">
        Problem
      </h3>
      <p>
        {`It can be `}
        <mark className="bg-yellow-100">
          <u className="decoration-yellow-500">{`difficult to search and browse groceries quickly and effectively`}</u>
        </mark>
        {`, creating a frustrating User Experience.`}
      </p>
    </div>
  );
}
