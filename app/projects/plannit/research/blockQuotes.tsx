import { kalam } from "@/app/fonts";

export default function BlockQuotes() {
  return (
    <div className="mb-16 flex flex-col">
      <div className="mb-16 flex flex-col">
        <h3 className="mb-3 font-bold text-rose-400">
          Understanding the user&apos;s needs
        </h3>
        <p>
          When users were asked about their experience planning events,
          here&apos;s what they said...
        </p>
      </div>
      <div
        className={`${kalam.className} flex h-fit w-full max-w-3xl flex-col text-2xl font-light italic text-slate-700 dark:text-white`}
      >
        <blockquote className="mb-8">
          <div>
            &quot;I have a network of vendors I work with that I refer to to my
            clients, and they know the event spaces I work with inside-out.
            I&apos;d love to be able to keep a list of vendors that I can choose
            from and assign them to events.&quot;
          </div>
        </blockquote>
        <blockquote className="mb-8">
          <div>
            &quot;It&apos;s difficult to keep track of various tasks for each of
            my events.&quot;
          </div>
        </blockquote>
        <blockquote className="mb-8">
          <div>
            &quot;I need a way to view all my upcoming events with a details at
            a quick glance. Right now, we use a giant calendar with post-it
            notes on our wall!&quot;
          </div>
        </blockquote>
      </div>
    </div>
  );
}
