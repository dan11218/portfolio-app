import Image from "next/image";
import { space_mono, inter } from "./fonts";

export default function Project(props: any) {
  return (
    <div className="group mb-8 mr-6 flex h-[520px] w-full max-w-md flex-col overflow-hidden rounded-md border-[0.5px] border-solid border-slate-400 pb-4 shadow-lg transition duration-300">
      <Image
        src={props.image_url}
        width={500}
        height={500}
        alt="project thumbnail"
      />
      <div className="flex w-full flex-col px-[20px] py-[10px]">
        <p className={`${space_mono.className} mb-4 text-sm`}>{props.skills}</p>
        <h5 className={`${inter.className} mb-2`}>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
