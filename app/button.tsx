export default function Button(props: any) {
    return(
        <button className="w-fit h-10 px-5 font-regular text-xs text-slate-50 transition-colors duration-150 bg-slate-800 rounded-lg focus:shadow-outline hover:bg-slate-600">{props.label ? props.label : "Button"}</button>
    )
}