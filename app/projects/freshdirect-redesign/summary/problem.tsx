export default function Problem() {
  return (
    <div className="flex w-full flex-col items-center bg-[#49662e] py-24">
      <div className="flex w-full max-w-3xl flex-col text-slate-50">
        <h3 className="mb-4  dark:text-slate-50">Problem</h3>
        <p>
          {`It can be `}
          <u>{`difficult to search and browse groceries quickly and effectively`}</u>
          {`, creating a frustrating User Experience.`}
        </p>
      </div>
    </div>
  );
}
