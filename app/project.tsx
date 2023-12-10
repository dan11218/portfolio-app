import Image from "next/image"
import Link from "next/link"

export default function Project(props: any) {
    return(
        <div className="px-[200px] py-[50px] justify-center inline-flex w-full">
            <div className={`justify-between inline-flex w-full max-w-6xl ${props.alignRight ? "flex-row-reverse": []} `}>
                <div className="flex justify-center">
                    <img src={props.image_url} width={420} height={420} alt="project thumbnail" />
                </div>
                <div className="flex flex-col justify-center px-[50px] w-[600px]">
                    <h4 className="font-medium text-sm py-[5px] text-slate-600">{props.skills}</h4>
                    <h2 className="font-semibold text-3xl py-[5px] text-slate-800">{props.title}</h2>
                    <p className="font-regular text-sm py-[20px] text-slate-800">{props.description}</p>
                    <Link href={props.case_study_url} className="w-fit flex items-center h-10 px-5 font-regular text-xs text-slate-50 transition-colors duration-150 bg-slate-800 rounded-lg focus:shadow-outline hover:bg-slate-600">See Case Study</Link>
                </div>
            </div>
        </div>
    )
}