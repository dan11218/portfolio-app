import Image from "next/image";
import { space_mono, inter } from "./fonts";

export default function Project(props: any) {
  return (
    <div className="mb-8 mr-6 flex h-[500px] w-full max-w-sm flex-col overflow-hidden rounded-md border-[0.5px] border-solid border-slate-400 shadow-lg transition duration-300">
      <Image
        src={props.image_url}
        width={500}
        height={500}
        alt="project thumbnail"
      />
      <div className="flex w-full flex-col p-8">
        <h5 className={`${inter.className} mb-2`}>{props.title}</h5>
        <p className={`${space_mono.className} mb-4 text-sm`}>{props.skills}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
