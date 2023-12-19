import Image from "next/image"

export default function Introduction() {
    return(
            <div className="px-[150px] py-[20px] h-[600px] justify-center inline-flex w-full border-solid border-2 border-orange-600">
                <div className="justify-between flex flex-row w-full max-w-6xl border-solid border-2 border-red-600">
                    <div className="flex flex-col items-center w-fit h-fit border-solid border-2 border-green-600">
                        <Image src="/images/portfolio_aboutme.png" width={475} height={300} alt="profile image"></Image>
                    </div>
                    <div className="flex flex-col w-[500px] px-[25px] border-solid border-2 border-indigo-600 ">
                        <h2 className="font-semibold text-royal-blue">Hi, I&apos;m Danny!</h2>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <p className="font-regular my-3">I&apos;m a UX Designer based in Queens, New York. I found my passion for design and software when I was an Event Coordinator working at a boutique hotel in NYC. {<br />} One day, I had an idea for an app that would help planners stay organised and solve some of the pain points I felt in my experience. I wanted to learn more about software development on both the engineering and design sides of the process. When I&apos;m not working, I&apos;m either cooking, reading poetry, gaming/streaming, or trying out new restaurants NYC with my husband. I&apos;m also working on an indie-horror game built in Godot.</p>
                    </div>
                </div>
            </div>
    )
}