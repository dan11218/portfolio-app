import Image from "next/image";
import Link from "next/link";

export default function Project(props: any) {
  return (
    <Link
      href={props.case_study_url}
      className="mx-6 mb-6 flex h-[500px] w-[400px] flex-col overflow-hidden rounded-md border-[0.5px] border-solid border-slate-400 bg-slate-50 shadow-lg dark:border-slate-100 dark:bg-slate-800"
    >
      <Image
        src={props.image_url}
        width={500}
        height={500}
        alt="project thumbnail"
      />
      <div className="flex h-full w-full flex-col px-[20px] py-[10px]">
        <h4 className="py-[5px] font-medium text-slate-500 dark:text-slate-100">
          {props.skills}
        </h4>
        <h2 className="py-[5px] text-xl font-semibold text-slate-700 dark:text-slate-100">
          {props.title}
        </h2>
        <p className="py-[10px] text-slate-800 dark:text-slate-100">
          {props.description}
        </p>
      </div>
    </Link>
  );
}
