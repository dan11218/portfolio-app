import Image from "next/image"
import Link from "next/link"

export default function Project(props: any) {
    return(
            <div className={`m-[80px] justify-between inline-flex w-full max-w-5xl ${props.alignRight ? "flex-row-reverse": []} `}>
                <div className="flex justify-center">
                    <Image src={props.image_url} width={420} height={420} alt="project thumbnail" />
                </div>
                <div className="flex flex-col px-[50px] w-[600px]">
                    <h4 className="font-medium py-[5px] text-slate-600">{props.skills}</h4>
                    <h2 className="font-semibold py-[5px] text-slate-700">{props.title}</h2>
                    <p className="font-regular py-[20px] text-slate-800">{props.description}</p>
                    <div className="flex flex-row justify-between w-80">
                        <Link href={props.case_study_url} className="w-fit flex items-center h-10 px-5 font-medium text-sm text-slate-50 transition-colors duration-150 bg-slate-800 rounded-lg focus:shadow-outline hover:bg-slate-600">See Case Study</Link>
                        <Link href={props.prototype_url} className="w-fit flex items-center h-10 px-5 font-medium text-sm text-slate-50 transition-colors duration-150 bg-slate-800 rounded-lg focus:shadow-outline hover:bg-slate-600">View Prototype</Link>
                    </div>
                </div>
            </div>
    )
}