export default function Interviews() {
  return (
    <div className="mb-16 flex w-full flex-col items-center px-8">
      <div className="mb-8 flex w-full max-w-2xl flex-col">
        <h3 className="mb-4 font-semibold text-rose-500">{`Interviews`}</h3>
        <p>
          {`To gain a deeper understanding of the challenges faced by event planners, we conducted interviews with approximately 8 users who regularly plan events. Our goal was to uncover their pain points and gather insights that would inform the design of our event planning app. Through these interviews, we learned about the specific difficulties they encounter, such as managing multiple tasks, coordinating with vendors, and keeping track of event details.`}
        </p>
      </div>
      <div
        className={`flex w-full max-w-2xl flex-col italic text-slate-700 dark:text-white`}
      >
        <ul className="list-disc">
          <li>
            {`"I have a network of vendors I work with that I refer to my clients, and they know the event spaces I work with inside-out. I'd love to keep a list of vendors to choose from and assign to events."`}
          </li>

          <li>
            {`"It's difficult to keep track of various tasks for each of my events."`}
          </li>
          <li>
            {`"I need a way to view all my upcoming events with details at a quick glance. Right now, we use a giant calendar with post-it notes on our wall!"`}
          </li>
        </ul>
      </div>
    </div>
  );
}
