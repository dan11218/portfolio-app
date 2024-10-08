import PreviousDesigns from "./previous-designs";

export default function Problem() {
  return (
    <section className="flex w-full flex-col">
      <div className="flex w-full flex-col items-center bg-[#49662e] px-8 py-24">
        <div className="flex w-full max-w-2xl flex-col text-slate-50">
          <h3 className="mb-4 font-semibold dark:text-slate-50">{`Problem`}</h3>
          <p>
            {`It can be difficult to search and browse groceries quickly and effectively, creating a frustrating User Experience.`}
          </p>
        </div>
      </div>
      <PreviousDesigns />
    </section>
  );
}
