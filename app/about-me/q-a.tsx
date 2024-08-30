import { inter } from "../fonts";
export default function QA() {
  return (
    <div className={`flex w-full flex-col items-center`}>
      <div className={`flex w-full max-w-3xl flex-col px-16 py-16`}>
        <h2 className={`mb-8 ${inter.className}`}>{`FAQ 🎤`}</h2>
        <div className="mb-16 flex flex-col">
          <h3 className="font-medium">{`I want to work for a company that...`}</h3>
          <p>{`Values a teammate's professional growth, and communicates their mission, goals, and strategies with the team.`}</p>
        </div>
        <div className="mb-16 flex flex-col">
          <h3 className="font-medium">{`Right now I'm learning...`}</h3>
          <p>{`Tech stuff: animations, state management, 3D design, and game design. Fun stuff: pasta-making, omakase (sushi making), streaming.`}</p>
        </div>
        <div className="mb-16 flex flex-col">
          <h3 className="font-medium">{`What's your favorite place you've been too so far?`}</h3>
          <p>{`Spain. Specifically, Madrid, and a small town called Vic. I’ve fallen in love with Jamón Serrano and Spanish wine!`}</p>
        </div>
        <div className="mb-16 flex flex-col">
          <h3 className="font-medium">{`Which project are you most proud of and why?`}</h3>
          <p>{`I would have to say Plannit (link). It was the first time I put my self in the shoes of a founder by coming up with an original concept. I architected the entire road map for development and led developers through the agile process, organized brainstorming sessions, and designed wireframes based on our findings. I loved this project for the experiences I gained from working in a team and to build a product that solves an important problem for event planners, which resonates with me as a previous event coordinator.`}</p>
        </div>
        <div className="mb-16 flex flex-col">
          <h3 className="font-medium">{`What is your design Inspiration?`}</h3>
          <p>{`Notion has been my secret weapon in my career, because of it’s easy-to-use interface, and that it gives me the ability to quickly create pages, databases, and organize my data and thoughts. The biggest feature that makes it stand out from other text editors is the ability to easily manipulate and move around blocks of text without having to select to highlight text manually with your cursor. Such action can actually lead to inaccurate formatting and leads to my (and others) frustration.`}</p>
        </div>
      </div>
    </div>
  );
}
