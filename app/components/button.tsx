"use client";

export default function Button(props: any) {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <button
      onClick={() => openLink(props.url)}
      className={`w-fit border-2 border-stone-900 p-3 text-slate-900 transition-colors duration-150 hover:bg-slate-900 hover:text-slate-50 dark:border-stone-50 dark:bg-stone-900 dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
    >
      {props.text}
    </button>
  );
}
