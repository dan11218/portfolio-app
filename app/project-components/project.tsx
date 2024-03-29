import Image from "next/image";
import Link from "next/link";
import { space_mono } from "../fonts";

export default function Project(props: any) {
  return (
    <Link
      href={props.project_url}
      className="group mx-6 mb-6 flex h-[500px] w-[400px] flex-col overflow-hidden rounded-md border-[0.5px] border-solid border-slate-400 bg-slate-50 shadow-lg transition duration-300 dark:border-slate-100 dark:bg-slate-900"
    >
      <Image
        src={props.image_url}
        width={500}
        height={500}
        alt="project thumbnail"
      />
      <div className="flex h-full w-full flex-col px-[20px] py-[10px]">
        <h4
          className={`my-1 text-sm text-slate-700 dark:text-indigo-400 ${space_mono.className}`}
        >
          {props.skills}
        </h4>
        <h3 className="text-2xl">
          {props.title}
          <span className="my-1 mr-auto block h-0.5 max-w-0 rounded border-0 bg-sky-500 transition-all duration-500 group-hover:max-w-full dark:bg-gray-300"></span>
        </h3>
        <p className="">{props.description}</p>
      </div>
    </Link>
  );
}
