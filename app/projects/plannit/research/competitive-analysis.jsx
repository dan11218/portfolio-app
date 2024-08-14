import CaseStudyA from "./case-study-a";
import CaseStudyB from "./case-study-b";
import CaseStudyC from "./case-study-c";

export const CompetitiveAnalysis = () => {
  return (
    <div className="mb-24 flex max-w-6xl flex-col">
      <div className="mb-16 flex w-full max-w-2xl flex-col">
        <h3 className="font-bold text-rose-500">{`Competitive Analysis`}</h3>
        <p>
          {`To better understand the landscape of event planning apps,I conducted a competitive analysis into other Event apps. This process involved identifying and evaluating existing solutions to find strengths and weaknesses that could inform my own app development. Here are some similar apps and a breakdown of their features:`}
        </p>
      </div>
      <div className={`flex w-full flex-col justify-center md:flex-row`}>
        <CaseStudyA />
        <CaseStudyB />
        <CaseStudyC />
      </div>
    </div>
  );
};
