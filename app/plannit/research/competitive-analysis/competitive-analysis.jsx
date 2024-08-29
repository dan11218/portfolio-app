import CaseStudyA from "./case-study-a";
import CaseStudyB from "./case-study-b";
import CaseStudyC from "./case-study-c";

export const CompetitiveAnalysis = () => {
  return (
    <div className="flex flex-col items-center px-8">
      <div className="mb-16 flex w-full max-w-2xl flex-col">
        <h3 className="mb-4 font-bold text-rose-500">{`Competitive Analysis`}</h3>
        <p>
          {`To better understand the landscape of event planning apps, I conducted a competitive analysis into other Event apps. This process involved identifying and evaluating existing solutions to find strengths and weaknesses that could inform my own app development. Here are some similar apps and a breakdown of their features:`}
        </p>
      </div>
      <div className={`mb-16 flex w-full flex-col md:flex-row`}>
        <CaseStudyA />
        <CaseStudyB />
        <CaseStudyC />
      </div>
      <div className="mb-16 flex w-full max-w-5xl flex-col border-2 border-stone-200 bg-white px-8 py-16 text-stone-800 md:px-16">
        <h5>
          {`Solutions like Tripleseat and Eventzilla possess tools that allow the event owner to `}
          <span className="font-medium text-sky-600">{` analyze sales reports and generate BEOs (Banquet Event Orders)`}</span>
          {` needed to stay organized, but they are catered towards hotels, and corporate conference spaces with `}
          <span className="font-medium text-rose-600">{`higher tiered pricing`}</span>
          .
        </h5>
      </div>
      <div className="flex w-full max-w-5xl flex-col border-2 border-stone-200 bg-white px-8 py-16 text-stone-800 md:px-16">
        <h5>
          {`Apps like Eventbrite `}
          <span className="font-medium text-sky-600">{`make it easy for anyone to sign up`}</span>
          {` and start organizing their events. But they `}
          <span className="font-medium text-rose-600">{`lack the ability to add event space details and vendor information`}</span>
          {`. Users are left having to use other third-party tools.`}.
        </h5>
      </div>
    </div>
  );
};
