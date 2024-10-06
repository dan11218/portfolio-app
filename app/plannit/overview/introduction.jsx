import { inter } from "@/app/fonts";

export default function Introduction() {
  return (
    <section className="flex w-full flex-col items-center bg-gradient-to-l from-rose-100 to-orange-100 px-8 py-36 dark:bg-stone-800 dark:bg-none">
      <div className={`flex w-full max-w-4xl flex-col items-center`}>
        <h4 className={`${inter.className}`}>
          <span className="text-rose-500">{`Plannit`}</span>
          {` is an all-in-one event management platform designed to `}
          <span className="text-rose-500">{`organize tasks`}</span>{" "}
          {` and connect you with a vast network of `}
          <span className="text-rose-500">{`professional vendors`}</span>
          {` to create the perfect event.`}
        </h4>
      </div>
    </section>
  );
}
