import { inter } from "@/app/fonts";

export default function Prototype() {
  return (
    <section className={`mb-24 flex w-full flex-col `}>
      <div className="mb-16 flex w-fit flex-col justify-center border-b-8 border-rose-400 pb-2 pl-16">
        <h2 className={`font-bold ${inter.className}`}>{`Prototype`}</h2>
      </div>
      <div className="flex w-full flex-col items-center">
        <iframe
          className="h-[850px] w-full"
          src="https://embed.figma.com/proto/V1LLfmALneuerhGoq7hATw/Plannit-App?page-id=0%3A1&node-id=2063-1609&node-type=canvas&viewport=571%2C34%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2063%3A1637&share=1&show-proto-sidebar=1&embed-host=share"
        ></iframe>
      </div>
    </section>
  );
}
