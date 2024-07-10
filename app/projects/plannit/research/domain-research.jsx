import CaseStudyA from "./case-study-a";
import CaseStudyB from "./case-study-b";

export const DomainResearch = () => {
  return (
    <div className="mb-16 flex flex-col">
      <div className="mb-16 flex w-full max-w-lg flex-col">
        <h3 className="mb-3 font-bold text-rose-500">{`Domain Research`}</h3>
        <p>
          {`In order to find inspiration for a starting point, I researched the market for similar solutions for event planning apps. Here's what I found:`}
        </p>
      </div>
      <div className={`flex w-full flex-col md:flex-row`}>
        <CaseStudyA />
        <CaseStudyB />
      </div>
    </div>
  );
};
