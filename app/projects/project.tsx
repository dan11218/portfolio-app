import Image from "next/image";
import Link from "next/link";
import { space_mono, inter } from "../fonts";

export default function Project(props: any) {
  return (
    <div className="group mb-8 mr-6 flex h-[520px] w-full max-w-md flex-col overflow-hidden rounded-md border-[0.5px] border-solid border-slate-400 pb-4 shadow-lg transition duration-300">
      <Image
        src={props.image_url}
        width={500}
        height={500}
        alt="project thumbnail"
      />
      <div className="flex h-full w-full flex-col justify-between px-[20px] py-[10px]">
        <p className={`${space_mono.className} text-sm`}>{props.skills}</p>
        <h5 className={`${inter.className}`}>{props.title}</h5>
        <p>{props.description}</p>
        <Link
          href={props.prototype_url}
          className={`w-fit text-sky-600 underline`}
        >
          {`Open prototype`}
        </Link>
      </div>
    </div>
  );
}
