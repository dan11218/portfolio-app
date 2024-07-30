export default function Problem() {
  return (
    <div className="flex h-full w-full max-w-3xl flex-col items-center p-8">
      <h4 className="mb-4 font-semibold text-[#6F9848]">Problem</h4>
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
