"use client";

export default function Button(props: any) {
  // const openLink = (url: string) => {
  //   window.open(url);
  // };

  return (
    <a
      href={props.url}
      className={`w-fit border-2 border-current p-3 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50  dark:text-stone-50 dark:hover:bg-stone-50 dark:hover:text-stone-900`}
    >
      {props.text}
    </a>
  );
}
