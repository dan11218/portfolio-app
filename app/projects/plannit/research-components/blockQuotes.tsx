import { kalam } from "@/app/fonts";

export default function BlockQuotes() {
  return (
    <div
      className={`${kalam.className} mb-16 flex h-fit w-full max-w-3xl flex-col font-light text-gray-900 dark:text-white`}
    >
      <blockquote className="mb-8">
        <p>
          "I have a network of vendors I work with that I refer to to my
          clients, and they know the event spaces I work with inside-out. I’d
          love to be able to keep a list of vendors that I can choose from and
          assign them to events."
        </p>
      </blockquote>
      <blockquote className="mb-8">
        <p>
          "It’s difficult to keep track of various tasks for each of my events."
        </p>
      </blockquote>
      <blockquote className="mb-8">
        <p>
          "I need a way to view all my upcoming events with a details at a quick
          glance. Right now, we use a giant calendar with post-it notes on our
          wall!"
        </p>
      </blockquote>
    </div>
  );
}
