import Image from "next/image";
import { inter } from "./fonts";
import Link from "next/link";

export default function Project(props: any) {
  return (
    <Link
      href={props.url}
      className="flex flex-col overflow-hidden rounded-xl border-[0.5px] border-solid border-slate-400 shadow-xl transition duration-300 hover:shadow-slate-500 dark:hover:shadow-slate-300"
    >
      <div className={`flex w-full flex-col`}>
        <Image
          src={props.image_url}
          width={800}
          height={800}
          alt="project thumbnail"
        />
      </div>
      <div className="flex w-full flex-col p-8">
        <p className="mb-2 text-slate-600 dark:text-slate-100">
          {props.skills}
        </p>
        <h5 className={`${inter.className} mb-2`}>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
