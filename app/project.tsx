import Image from "next/image"
import Button from "./button"

export default function Project(props: any) {
    return(
        <div className="px-[200px] py-[50px] justify-center inline-flex w-full">
            <div className={`justify-between inline-flex w-full max-w-6xl ${props.alignRight ? "flex-row-reverse": []} `}>
                <div className="flex justify-center">
                    <img src={props.image_url} width={420} height={420} alt="project thumbnail" />
                </div>
                <div className="flex flex-col justify-center px-[50px] w-[600px]">
                    <h4 className="font-semibold text-sm py-[5px] text-slate-500">{props.skills}</h4>
                    <h2 className="font-semibold text-3xl py-[5px]">{props.title}</h2>
                    <h3 className="font-regular text-sm py-[20px] text-slate-600">{props.description}</h3>
                    <Button label="See Case Study"></Button>
                </div>
            </div>
        </div>
    )
}