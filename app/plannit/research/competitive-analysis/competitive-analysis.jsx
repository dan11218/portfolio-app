import CaseStudyA from "./case-study-a";
import CaseStudyB from "./case-study-b";
import CaseStudyC from "./case-study-c";

export const CompetitiveAnalysis = () => {
  return (
    <div className="flex flex-col items-center px-8">
      <div className="mb-16 flex w-full max-w-2xl flex-col">
        <h3 className="mb-4 font-bold text-rose-500">{`Competitive Analysis`}</h3>
        <p>
          {`To better understand the landscape of event planning apps,I conducted a competitive analysis into other Event apps. This process involved identifying and evaluating existing solutions to find strengths and weaknesses that could inform my own app development. Here are some similar apps and a breakdown of their features:`}
        </p>
      </div>
      <div className={`mb-16 flex w-full flex-col md:flex-row`}>
        <CaseStudyA />
        <CaseStudyB />
        <CaseStudyC />
      </div>
      <div className="mb-16 flex w-full max-w-2xl flex-col">
        <h3 className="mb-4 font-bold text-rose-500">{`Results`}</h3>
        <ul className={`list-disc`}>
          <li>
            <p>
              {`Solutions like Tripleseat and Eventzilla possess tools that allow the event owner to analyze sales reports and generate BEOs (Banquet Event Orders) needed to stay organized, but they are catered towards hotels, and corporate conference spaces with higher tiered pricing.`}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
