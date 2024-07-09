export default function BlockQuotes() {
  return (
    <div className="mb-16 flex flex-col">
      <div className="mb-8 flex flex-col">
        <h3 className="mb-3 font-semibold text-rose-500">
          {`Understanding the user's needs`}
        </h3>
        <p>
          {`When users were asked about their experience planning events,
          here's what they said...`}
        </p>
      </div>
      <div
        className={`flex h-fit w-full max-w-3xl flex-col italic text-slate-700 dark:text-white`}
      >
        <blockquote className="mb-8">
          <li>
            {`"I have a network of vendors I work with that I refer to to my
            clients, and they know the event spaces I work with inside-out.
            I'd love to be able to keep a list of vendors that I can choose
            from and assign them to events."`}
          </li>
        </blockquote>
        <blockquote className="mb-8">
          <li>
            {`"It's difficult to keep track of various tasks for each of
            my events."`}
          </li>
        </blockquote>
        <blockquote className="mb-8">
          <li>
            {`"I need a way to view all my upcoming events with a details at
            a quick glance. Right now, we use a giant calendar with post-it
            notes on our wall!"`}
          </li>
        </blockquote>
      </div>
    </div>
  );
}
