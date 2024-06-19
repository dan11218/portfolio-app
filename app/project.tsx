import Image from "next/image";
import Link from "next/link";
import { space_mono, inter } from "./fonts";

export default function Project(props: any) {
  return (
    <Link
      href={props.project_url}
      className="group mb-8 mr-6 flex h-[520px] w-[400px] flex-col overflow-hidden rounded-md border-[0.5px] border-solid border-slate-400 pb-4 shadow-lg transition duration-300"
    >
      <Image
        src={props.image_url}
        width={500}
        height={500}
        alt="project thumbnail"
      />
      <div className="flex h-full w-full flex-col px-[20px] py-[10px]">
        <p className={`py-1 ${space_mono.className}`}>{props.skills}</p>
        <h5 className={`${inter.className}`}>
          {props.title}
          <hr className="my-1 mr-auto block h-0.5 max-w-0 rounded border-0 bg-sky-500 transition-all duration-500 group-hover:max-w-full"></hr>
        </h5>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
