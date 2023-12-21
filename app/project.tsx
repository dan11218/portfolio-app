import Image from "next/image";
import Link from "next/link";

export default function Project(props: any) {
  return (
    <div
      className={`m-[80px] inline-flex w-full max-w-5xl justify-between ${
        props.alignRight ? "flex-row-reverse" : []
      } `}
    >
      <div className="flex justify-center">
        <Image
          src={props.image_url}
          width={420}
          height={420}
          alt="project thumbnail"
        />
      </div>
      <div className="flex w-[600px] flex-col px-[50px]">
        <h4 className="py-[5px] font-medium text-slate-600">{props.skills}</h4>
        <h2 className="py-[5px] font-semibold text-slate-700">{props.title}</h2>
        <p className="font-regular py-[20px] text-slate-800">
          {props.description}
        </p>
        <div className="flex w-80 flex-row justify-between">
          <Link
            href={props.case_study_url}
            className="focus:shadow-outline flex h-10 w-fit items-center rounded-lg bg-slate-800 px-5 text-sm font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-600"
          >
            See Case Study
          </Link>
          <Link
            href={props.prototype_url}
            className="focus:shadow-outline flex h-10 w-fit items-center rounded-lg bg-slate-800 px-5 text-sm font-medium text-slate-50 transition-colors duration-150 hover:bg-slate-600"
          >
            View Prototype
          </Link>
        </div>
      </div>
    </div>
  );
}
