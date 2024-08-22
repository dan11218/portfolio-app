export default function AffinityMap() {
  return (
    <section className={`flex w-full flex-col items-center`}>
      <div className="mb-8 flex w-full flex-col items-center">
        <div className="mb-8 flex w-full max-w-2xl flex-col px-8">
          <h3 className="mb-4 font-semibold text-rose-500">{`Affinity Mapping`}</h3>
          <p>
            {`By organizing user feedback into categories, I identified common themes and prioritized features that had the most significant impact. This method allowed me to visualize connections between different pieces of feedback, making it easier to uncover insights and drive data-informed decisions for the app’s development.`}
          </p>
        </div>
      </div>
    </section>
  );
}
