import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="h-[70px] px-[200px] bg-slate-50 justify-center inline-flex w-full sticky top-0">
            <div className="justify-between inline-flex items-start w-full max-w-6xl">
                <div className="w-[235px] self-stretch justify-center items-center gap-2.5 inline-flex">
                    <Image src="/logos/black_logo.png" width={200} height={100} alt="DG Logo"></Image>
                    {/* <div className="font-bold text-xl text-slate-700">Danny Graugnard</div> */}
                </div>
                <div className="w-[300px] self-stretch py-[5px] justify-between items-center flex">
                    <div className="text-center text-slate-800 text-base hover:text-royal-blue">
                        <Link href="/">Projects</Link>
                    </div>
                    <div className="text-center text-slate-800 text-base hover:text-royal-blue">
                        <Link href="https://drive.google.com/file/d/1nTI56A3wOYprQhMZaEhc4_X8DhuG4c_5/view?usp=sharing">Resumé</Link>
                    </div>
                    <div className="text-center text-slate-800 text-base hover:text-royal-blue">
                        <Link href="/about-me">About me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}