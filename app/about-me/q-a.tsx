import { inter } from "../fonts";
export default function QA() {
  return (
    <div className={`flex flex-col py-16`}>
      <h2 className={`mb-8 ${inter.className}`}>{`Q&A 🎤`}</h2>
      <div className="mb-8 flex flex-col">
        <h3>{`I want to work for a company that...`}</h3>
        <p>{`Values a teammate's professional growth, and communicates their mission, goals, and strategies with the team.`}</p>
      </div>
      <div className="mb-8 flex flex-col">
        <h3>{`Right now I'm learning...`}</h3>
        <p>{`Animations, state management, 3D design, and game design.`}</p>
      </div>
      <div className="mb-8 flex flex-col">
        <h3>{`What's your favorite place you've been too so far?`}</h3>
        <p>{`Spain. Specifically, Madrid, and a small town called Vic. I’ve fallen in love with Jamón Serrano and Spanish wine!`}</p>
      </div>
    </div>
  );
}
