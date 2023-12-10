import Image from "next/image"
import Link from "next/link"

export default function Jumbotron() {
    return (
        <div className="px-[200px] py-[20px] justify-center inline-flex w-full bg-slate-100">
            <div className="justify-between inline-flex w-full max-w-6xl">
                <div className="relative">
                    <Image src="/images/Jumbotron graphics.png" width={500} height={500} alt="profile image"></Image>
                    <Image className="object-contain inset-0" src="/images/profile_photo.png" fill={true} alt="profile image"></Image>
                </div>
                <div className="flex flex-col justify-center w-[500px] px-[50px]">
                    <h2 className="font-semibold text-4xl py-[5px]">Hi, I&apos;m Danny! 👋</h2>
                    <h3 className="font-medium text-xl py-[20px] text-sky-700">I&apos;m a designer with a background in Software Engineering and Customer Support</h3>
                    <Link href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing" className="w-fit h-10 px-5 flex items-center font-regular text-xs text-slate-50 transition-colors duration-150 bg-slate-800 rounded-lg focus:shadow-outline hover:bg-slate-600">Download CV</Link>
                </div>
            </div>
        </div>
    )
}