import Image from "next/image"
import Link from "next/link"

export default function Jumbotron() {
   return (
      <div className="px-[200px] py-[20px] justify-center inline-flex w-full h-[400px] bg-slate-50">
         <div className="flex flex-col justify-center items-center w-full h-50 max-w-6xl px-[50px]">
            <h2 className="font-semibold py-[5px] text-slate-700">Hi, I&apos;m Danny! 👋</h2>
            <h3 className="font-medium py-[20px] text-sky-700">I&apos;m a designer with a background in Software Engineering and Customer Support</h3>
            <Link href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing" className="w-fit h-10 px-5 flex items-center font-medium text-sm text-slate-50 transition-colors duration-150 bg-slate-800 rounded-lg focus:shadow-outline hover:bg-slate-600">Download CV</Link>
         </div>
      </div>
   )
}